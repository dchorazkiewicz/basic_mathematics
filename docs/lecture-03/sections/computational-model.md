## Computational interlude: lines and planes as constructed objects {#computational-model}

The plane classes `Point` and `FreeVector` are those defined in Lecture 2. The new classes implement the constructions and tests introduced in this chapter.

??? example "Python class: `Line`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Line:
        base: Point
        direction: FreeVector

        def __post_init__(self) -> None:
            if self.direction.norm == 0:
                raise ValueError("direction must be nonzero")

        @classmethod
        def through(cls, first: Point, second: Point) -> "Line":
            return cls(first, first.vector_to(second))

        def at(self, t: float) -> Point:
            return self.base.translated_by(t * self.direction)

        @property
        def normal(self) -> FreeVector:
            return FreeVector(-self.direction.dy, self.direction.dx)

        @property
        def slope(self) -> float | None:
            if self.direction.dx == 0:
                return None
            return self.direction.dy / self.direction.dx

        def normal_equation(self) -> tuple[float, float, float]:
            a, b = self.normal.dx, self.normal.dy
            c = a * self.base.x + b * self.base.y
            return a, b, c

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            offset = self.base.vector_to(point)
            return abs(self.normal.dot(offset)) <= tolerance

        def is_parallel_to(self, other: "Line") -> bool:
            return self.direction.is_parallel_to(other.direction)

        def is_perpendicular_to(self, other: "Line") -> bool:
            return self.direction.is_perpendicular_to(other.direction)

        def nearest_point(self, point: Point) -> Point:
            offset = self.base.vector_to(point)
            shift = offset.projection_onto(self.direction)
            return self.base.translated_by(shift)

        def distance_to(self, point: Point) -> float:
            return point.distance_to(self.nearest_point(point))
    ```

??? example "Python class: `Point3D`"

    ```python
    from dataclasses import dataclass
    from math import sqrt


    @dataclass
    class Point3D:
        x: float
        y: float
        z: float

        def __add__(self, other: "Point3D") -> "Point3D":
            return Point3D(self.x + other.x, self.y + other.y, self.z + other.z)

        def __neg__(self) -> "Point3D":
            return Point3D(-self.x, -self.y, -self.z)

        def __sub__(self, other: "Point3D") -> "Point3D":
            return Point3D(self.x - other.x, self.y - other.y, self.z - other.z)

        def __mul__(self, scalar: float) -> "Point3D":
            return Point3D(scalar * self.x, scalar * self.y, scalar * self.z)

        __rmul__ = __mul__

        def distance_to(self, other: "Point3D") -> float:
            return sqrt(
                (other.x - self.x) ** 2
                + (other.y - self.y) ** 2
                + (other.z - self.z) ** 2
            )

        def vector_to(self, other: "Point3D") -> "FreeVector3D":
            return FreeVector3D(
                other.x - self.x,
                other.y - self.y,
                other.z - self.z,
            )

        def translated_by(self, vector: "FreeVector3D") -> "Point3D":
            return Point3D(
                self.x + vector.dx,
                self.y + vector.dy,
                self.z + vector.dz,
            )
    ```

??? example "Python class: `FreeVector3D`"

    ```python
    from dataclasses import dataclass
    from math import acos, sqrt


    @dataclass
    class FreeVector3D:
        dx: float
        dy: float
        dz: float

        def __add__(self, other: "FreeVector3D") -> "FreeVector3D":
            return FreeVector3D(
                self.dx + other.dx,
                self.dy + other.dy,
                self.dz + other.dz,
            )

        def __neg__(self) -> "FreeVector3D":
            return FreeVector3D(-self.dx, -self.dy, -self.dz)

        def __sub__(self, other: "FreeVector3D") -> "FreeVector3D":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector3D":
            return FreeVector3D(
                scalar * self.dx,
                scalar * self.dy,
                scalar * self.dz,
            )

        __rmul__ = __mul__

        @property
        def norm(self) -> float:
            return sqrt(self.dot(self))

        def normalized(self) -> "FreeVector3D":
            if self.norm == 0:
                raise ValueError("the zero vector has no direction")
            return (1 / self.norm) * self

        def dot(self, other: "FreeVector3D") -> float:
            return (
                self.dx * other.dx
                + self.dy * other.dy
                + self.dz * other.dz
            )

        def cross(self, other: "FreeVector3D") -> "FreeVector3D":
            return FreeVector3D(
                self.dy * other.dz - self.dz * other.dy,
                self.dz * other.dx - self.dx * other.dz,
                self.dx * other.dy - self.dy * other.dx,
            )

        def is_parallel_to(
            self,
            other: "FreeVector3D",
            tolerance: float = 1e-9,
        ) -> bool:
            return self.cross(other).norm <= tolerance

        def is_perpendicular_to(
            self,
            other: "FreeVector3D",
            tolerance: float = 1e-9,
        ) -> bool:
            return abs(self.dot(other)) <= tolerance

        def angle_to(self, other: "FreeVector3D") -> float:
            if self.norm == 0 or other.norm == 0:
                raise ValueError("an angle requires two nonzero vectors")
            cosine = self.dot(other) / (self.norm * other.norm)
            return acos(max(-1.0, min(1.0, cosine)))
    ```

??? example "Python class: `Plane`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Plane:
        base: Point3D
        first_direction: FreeVector3D
        second_direction: FreeVector3D

        def __post_init__(self) -> None:
            if self.normal.norm == 0:
                raise ValueError("directions must be nonparallel")

        @classmethod
        def through(
            cls,
            first: Point3D,
            second: Point3D,
            third: Point3D,
        ) -> "Plane":
            return cls(
                first,
                first.vector_to(second),
                first.vector_to(third),
            )

        @property
        def normal(self) -> FreeVector3D:
            return self.first_direction.cross(self.second_direction)

        def at(self, s: float, t: float) -> Point3D:
            shift = s * self.first_direction + t * self.second_direction
            return self.base.translated_by(shift)

        def normal_equation(self) -> tuple[float, float, float, float]:
            a, b, c = self.normal.dx, self.normal.dy, self.normal.dz
            d = a * self.base.x + b * self.base.y + c * self.base.z
            return a, b, c, d

        def contains(self, point: Point3D, tolerance: float = 1e-9) -> bool:
            offset = self.base.vector_to(point)
            return abs(self.normal.dot(offset)) <= tolerance

        def distance_to(self, point: Point3D) -> float:
            offset = self.base.vector_to(point)
            return abs(self.normal.dot(offset)) / self.normal.norm

        def is_parallel_to(self, other: "Plane") -> bool:
            return self.normal.is_parallel_to(other.normal)

        def is_perpendicular_to(self, other: "Plane") -> bool:
            return self.normal.is_perpendicular_to(other.normal)

        def intersection_direction(self, other: "Plane") -> FreeVector3D:
            direction = self.normal.cross(other.normal)
            if direction.norm == 0:
                raise ValueError("parallel planes have no unique intersection direction")
            return direction
    ```

The names now expose the dimension only where it matters: `Point` and `FreeVector` describe the Cartesian plane, while `Point3D` and `FreeVector3D` describe space. `Line.at(t)` and `Plane.at(s, t)` return points; normal equations and distance tests return scalars.