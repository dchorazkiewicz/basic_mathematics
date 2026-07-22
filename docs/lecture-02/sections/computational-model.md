## Computational interlude: constructing vectors from points {#computational-model}

The implementation follows the order used in the mathematics. Points come first. An ordered pair of points determines an anchored vector. A free vector is then obtained by forgetting the location of that representative and retaining its coordinate change.

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
            # Ordinary coordinate subtraction: point - point -> point.
            return Point(self.x - other.x, self.y - other.y)

        def __mul__(self, scalar: float) -> "Point":
            return Point(scalar * self.x, scalar * self.y)

        __rmul__ = __mul__

        def distance_to(self, other: "Point") -> float:
            return hypot(other.x - self.x, other.y - self.y)

        def anchored_vector_to(self, other: "Point") -> "AnchoredVector":
            # The ordered pair (self, other) determines an anchored vector.
            return AnchoredVector(self, other)

        def translated_by(self, vector: "FreeVector") -> "Point":
            # Point plus a free displacement gives a point.
            return Point(self.x + vector.dx, self.y + vector.dy)
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
            # This is the ordinary round-bracket difference end - start.
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

        def as_free_vector(self) -> "FreeVector":
            # Forget the endpoints and retain their common displacement.
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
        def from_coordinates(cls, dx: float, dy: float) -> "FreeVector":
            # Coordinates determine the canonical representative from O=(0,0).
            origin = Point(0, 0)
            endpoint = Point(dx, dy)
            return cls(AnchoredVector(origin, endpoint))

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

        def __add__(self, other: "FreeVector") -> "FreeVector":
            return FreeVector.from_coordinates(
                self.dx + other.dx,
                self.dy + other.dy,
            )

        def __neg__(self) -> "FreeVector":
            return FreeVector.from_coordinates(-self.dx, -self.dy)

        def __sub__(self, other: "FreeVector") -> "FreeVector":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector":
            return FreeVector.from_coordinates(
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
            return abs(self.determinant(other)) <= tolerance

        def is_perpendicular_to(
            self,
            other: "FreeVector",
            tolerance: float = 1e-9,
        ) -> bool:
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
            if self.first.is_parallel_to(self.second):
                raise ValueError("basis vectors must be nonparallel")

        def combine(self, a: float, b: float) -> FreeVector:
            return a * self.first + b * self.second

        def coordinates_of(self, vector: FreeVector) -> tuple[float, float]:
            determinant = self.first.determinant(self.second)
            a = vector.determinant(self.second) / determinant
            b = self.first.determinant(vector) / determinant
            return a, b
    ```

??? example "Using points, anchored vectors, and free vectors"

    ```python
    P = Point(1, 2)
    Q = Point(4, 6)

    ordinary_difference = Q - P
    print(ordinary_difference)
    # Point(x=3, y=4)

    PQ = P.anchored_vector_to(Q)
    print(PQ)
    # AnchoredVector(start=Point(x=1, y=2), end=Point(x=4, y=6))

    v = PQ.as_free_vector()
    print(v.coordinates)
    # (3, 4)

    print(v.norm)
    # 5.0

    print(P.translated_by(v))
    # Point(x=4, y=6)

    R = Point(-2, 5)
    w = Q.anchored_vector_to(R).as_free_vector()

    print((v + w).coordinates)
    # (-3, 3)

    print(v.dot(w))
    # -22

    basis = Basis(
        Point(0, 0).anchored_vector_to(Point(1, 1)).as_free_vector(),
        Point(0, 0).anchored_vector_to(Point(1, -1)).as_free_vector(),
    )
    vector = Point(0, 0).anchored_vector_to(Point(4, 2)).as_free_vector()

    print(basis.coordinates_of(vector))
    # (3.0, 1.0)
    ```

The construction is now the same as in the text:

\[
(P,Q)
\longmapsto
\overrightarrow{PQ}
\longmapsto
[\overrightarrow{PQ}]
\longmapsto
[v_1,v_2].
\]

The coordinates are properties of the displacement represented by the points; they are not the starting definition of the vector object.