## Computational interlude: points and vectors as distinct types {#computational-model}

This implementation follows the construction used in the lecture:

\[
(P,Q)
\longmapsto
\overrightarrow{PQ}
\longmapsto
[\overrightarrow{PQ}]
\longmapsto
[v_1,v_2].
\]

A free vector is represented in the program by one anchored representative. Two such objects are equal when their representatives have the same coordinate change. The code also implements the bridge operations and all operations introduced in this chapter:

\[
\begin{aligned}
(P,Q)&\longmapsto \overrightarrow{PQ},\\
\overrightarrow{PQ}&\longmapsto[\overrightarrow{PQ}],\\
(P,\mathbf v)&\longmapsto P\oplus\mathbf v,\\
(\mathbf u,\mathbf v)&\longmapsto\mathbf u+\mathbf v,\\
(t,\mathbf v)&\longmapsto t\mathbf v,\\
(\mathbf u,\mathbf v)&\longmapsto\mathbf u\cdot\mathbf v.
\end{aligned}
\]

??? example "Python class: `Point`"

    ```python
    from dataclasses import dataclass
    from math import hypot


    @dataclass
    class Point:
        x: float
        y: float

        def __add__(self, other: "Point") -> "Point":
            return Point(self.x + other.x, self.y + other.y)

        def __neg__(self) -> "Point":
            return Point(-self.x, -self.y)

        def __sub__(self, other: "Point") -> "Point":
            # Ordinary round-bracket coordinate difference.
            return Point(self.x - other.x, self.y - other.y)

        def __mul__(self, scalar: float) -> "Point":
            return Point(scalar * self.x, scalar * self.y)

        __rmul__ = __mul__

        def distance_to(self, other: "Point") -> float:
            return hypot(other.x - self.x, other.y - self.y)

        def anchored_vector_to(self, other: "Point") -> "AnchoredVector":
            return AnchoredVector(self, other)

        def translated_by(self, vector: "FreeVector") -> "Point":
            return vector.apply_to(self)
    ```

??? example "Python class: `AnchoredVector`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class AnchoredVector:
        start: Point
        end: Point

        @property
        def coordinate_difference(self) -> Point:
            return self.end - self.start

        @property
        def coordinates(self) -> tuple[float, float]:
            difference = self.coordinate_difference
            return difference.x, difference.y

        @property
        def length(self) -> float:
            return self.start.distance_to(self.end)

        def reversed(self) -> "AnchoredVector":
            return AnchoredVector(self.end, self.start)

        def is_equivalent_to(self, other: "AnchoredVector") -> bool:
            return self.coordinates == other.coordinates

        def as_free_vector(self) -> "FreeVector":
            return FreeVector(self)
    ```

??? example "Python class: `FreeVector`"

    ```python
    from dataclasses import dataclass
    from math import acos, hypot


    @dataclass(eq=False)
    class FreeVector:
        representative: AnchoredVector

        @classmethod
        def _from_components(cls, dx: float, dy: float) -> "FreeVector":
            # Every result is again represented by two points.
            origin = Point(0, 0)
            endpoint = Point(dx, dy)
            return origin.anchored_vector_to(endpoint).as_free_vector()

        @property
        def coordinates(self) -> tuple[float, float]:
            return self.representative.coordinates

        @property
        def dx(self) -> float:
            return self.coordinates[0]

        @property
        def dy(self) -> float:
            return self.coordinates[1]

        def __eq__(self, other: object) -> bool:
            return (
                isinstance(other, FreeVector)
                and self.coordinates == other.coordinates
            )

        def representative_at(self, start: Point) -> AnchoredVector:
            end = Point(start.x + self.dx, start.y + self.dy)
            return AnchoredVector(start, end)

        def apply_to(self, point: Point) -> Point:
            return self.representative_at(point).end

        def __add__(self, other: "FreeVector") -> "FreeVector":
            return self._from_components(
                self.dx + other.dx,
                self.dy + other.dy,
            )

        def __neg__(self) -> "FreeVector":
            return self._from_components(-self.dx, -self.dy)

        def __sub__(self, other: "FreeVector") -> "FreeVector":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector":
            return self._from_components(
                scalar * self.dx,
                scalar * self.dy,
            )

        __rmul__ = __mul__

        @property
        def norm(self) -> float:
            return hypot(self.dx, self.dy)

        def normalized(self) -> "FreeVector":
            if self.norm == 0:
                raise ValueError("the zero vector has no direction")
            return (1 / self.norm) * self

        def dot(self, other: "FreeVector") -> float:
            return self.dx * other.dx + self.dy * other.dy

        def determinant(self, other: "FreeVector") -> float:
            return self.dx * other.dy - self.dy * other.dx

        def is_parallel_to(
            self,
            other: "FreeVector",
            tolerance: float = 1e-9,
        ) -> bool:
            if self.norm == 0 or other.norm == 0:
                raise ValueError("parallel directions must be nonzero")
            return abs(self.determinant(other)) <= tolerance

        def is_perpendicular_to(
            self,
            other: "FreeVector",
            tolerance: float = 1e-9,
        ) -> bool:
            if self.norm == 0 or other.norm == 0:
                raise ValueError("perpendicular directions must be nonzero")
            return abs(self.dot(other)) <= tolerance

        def angle_to(self, other: "FreeVector") -> float:
            if self.norm == 0 or other.norm == 0:
                raise ValueError("an angle requires two nonzero vectors")
            cosine = self.dot(other) / (self.norm * other.norm)
            return acos(max(-1.0, min(1.0, cosine)))

        def projection_onto(self, other: "FreeVector") -> "FreeVector":
            if other.norm == 0:
                raise ValueError("projection direction must be nonzero")
            coefficient = self.dot(other) / other.dot(other)
            return coefficient * other
    ```

??? example "Python class: `Basis`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Basis:
        first: FreeVector
        second: FreeVector

        def __post_init__(self) -> None:
            if self.first.determinant(self.second) == 0:
                raise ValueError("basis vectors must be nonparallel")

        def combine(self, a: float, b: float) -> FreeVector:
            return a * self.first + b * self.second

        def coordinates_of(self, vector: FreeVector) -> tuple[float, float]:
            determinant = self.first.determinant(self.second)
            a = vector.determinant(self.second) / determinant
            b = self.first.determinant(vector) / determinant
            return a, b
    ```

To run the examples, place the four class definitions above in one file, append either block below, and execute:

```text
python vectors.py
```

??? example "Run: points, representatives, and equivalence"

    ```python
    if __name__ == "__main__":
        P = Point(1, 2)
        Q = Point(4, 6)

        print(P + Q)          # Point(x=5, y=8)
        print(-P)             # Point(x=-1, y=-2)
        print(Q - P)          # Point(x=3, y=4)
        print(2 * P)          # Point(x=2, y=4)
        print(P.distance_to(Q))  # 5.0

        PQ = P.anchored_vector_to(Q)
        print(PQ.coordinates)  # (3, 4)
        print(PQ.length)       # 5.0

        A = Point(-2, 1)
        B = Point(1, 5)
        AB = A.anchored_vector_to(B)

        print(PQ == AB)                    # False
        print(PQ.is_equivalent_to(AB))     # True

        v = PQ.as_free_vector()
        w = AB.as_free_vector()

        print(v == w)                      # True
        print(v.coordinates)               # (3, 4)
        print(v.representative_at(Point(10, -1)))
        # AnchoredVector(start=Point(x=10, y=-1), end=Point(x=13, y=3))

        print(P.translated_by(v))           # Point(x=4, y=6)
    ```

The last line implements

\[
P\oplus[Q-P]=Q.
\]

??? example "Run: vector operations and a basis"

    ```python
    if __name__ == "__main__":
        O = Point(0, 0)

        v = O.anchored_vector_to(Point(3, 4)).as_free_vector()
        u = O.anchored_vector_to(Point(1, -2)).as_free_vector()
        n = O.anchored_vector_to(Point(-4, 3)).as_free_vector()

        print((v + u).coordinates)          # (4, 2)
        print((v - u).coordinates)          # (2, 6)
        print((-v).coordinates)             # (-3, -4)
        print((2 * v).coordinates)          # (6, 8)
        print(v.norm)                       # 5.0
        print(tuple(round(c, 3) for c in v.normalized().coordinates))
        # (0.6, 0.8)
        print(v.dot(u))                     # -5
        print(v.determinant(u))             # -10
        print(v.is_parallel_to(2 * v))      # True
        print(v.is_perpendicular_to(n))     # True
        print(round(v.angle_to(u), 3))      # 2.034
        print(v.projection_onto(u).coordinates)  # (-1.0, 2.0)

        b1 = O.anchored_vector_to(Point(1, 1)).as_free_vector()
        b2 = O.anchored_vector_to(Point(1, -1)).as_free_vector()
        basis = Basis(b1, b2)

        vector = O.anchored_vector_to(Point(4, 2)).as_free_vector()
        print(basis.coordinates_of(vector))       # (3.0, 1.0)
        print(basis.combine(3, 1).coordinates)    # (4, 2)
    ```

The implementation therefore preserves the distinctions made in the chapter:

- `Q - P` is the ordinary point-coordinate difference and returns a `Point`;
- `P.anchored_vector_to(Q)` constructs the anchored vector \(\overrightarrow{PQ}\);
- `PQ.as_free_vector()` passes to the free vector \([\overrightarrow{PQ}]\);
- two anchored vectors may be different but equivalent;
- equal free vectors may be represented at different starting points;
- only free vectors carry vector addition, scaling, norm, angle, dot product and projection.
