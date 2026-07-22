## Computational interlude: controlling point and vector types {#computational-model}

The implementation mirrors the notation of the lecture. Ordinary point arithmetic returns points. The method `vector_to` implements the type change \([Q-P]\), while `translated_by` implements \(P\oplus\mathbf v\).

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
            return Point(self.x - other.x, self.y - other.y)

        def __mul__(self, scalar: float) -> "Point":
            return Point(scalar * self.x, scalar * self.y)

        __rmul__ = __mul__

        def distance_to(self, other: "Point") -> float:
            return hypot(other.x - self.x, other.y - self.y)

        def vector_to(self, other: "Point") -> "FreeVector":
            # Two points -> the free vector [other - self].
            return FreeVector(other.x - self.x, other.y - self.y)

        def translated_by(self, vector: "FreeVector") -> "Point":
            # Point and free vector -> point.
            return Point(self.x + vector.dx, self.y + vector.dy)
    ```

??? example "Python class: `FreeVector`"

    ```python
    from dataclasses import dataclass
    from math import acos, hypot


    @dataclass
    class FreeVector:
        dx: float
        dy: float

        def __add__(self, other: "FreeVector") -> "FreeVector":
            return FreeVector(self.dx + other.dx, self.dy + other.dy)

        def __neg__(self) -> "FreeVector":
            return FreeVector(-self.dx, -self.dy)

        def __sub__(self, other: "FreeVector") -> "FreeVector":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector":
            return FreeVector(scalar * self.dx, scalar * self.dy)

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

        def is_parallel_to(self, other: "FreeVector", tolerance: float = 1e-9) -> bool:
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
        def free_vector(self) -> FreeVector:
            return self.start.vector_to(self.end)

        @property
        def length(self) -> float:
            return self.start.distance_to(self.end)

        def reversed(self) -> "AnchoredVector":
            return AnchoredVector(self.end, self.start)

        def is_equivalent_to(self, other: "AnchoredVector") -> bool:
            return self.free_vector == other.free_vector
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

The distinction is explicit in the method names:

- `Q - P` is ordinary point-coordinate subtraction and returns a `Point`;
- `P.vector_to(Q)` returns the free vector \([Q-P]\);
- `P.translated_by(v)` returns the point \(P\oplus\mathbf v\);
- vector addition, scaling, norm, angle, dot product and projection belong to `FreeVector`;
- `Basis.coordinates_of(v)` returns the two coefficients reconstructing the vector in the chosen basis.