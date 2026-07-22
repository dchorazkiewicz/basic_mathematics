## Computational interlude: lines and planes as constructed objects {#computational-model}

The equations in this lecture combine objects of different types. A parameter multiplied by a direction is a vector; translating a base point by that vector produces a point. Membership in a line or plane is then a scalar condition. The first block uses `Point2`, `FreeVector2`, `displacement`, and `translate` from the preceding computational model.

??? example "Python implementation: a line in the plane"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Line2:
        base: Point2
        direction: FreeVector2

        def __post_init__(self) -> None:
            if self.direction.norm == 0:
                raise ValueError("A line requires a nonzero direction vector.")

        @classmethod
        def through(cls, first: Point2, second: Point2) -> Line2:
            return cls(first, displacement(first, second))

        def at(self, t: float) -> Point2:
            return translate(self.base, t * self.direction)

        @property
        def normal(self) -> FreeVector2:
            return FreeVector2(-self.direction.dy, self.direction.dx)

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            offset = displacement(self.base, point)
            return abs(self.normal.dot(offset)) <= tolerance
    ```

The method `at(t)` implements the parametric construction. The method `contains(P)` first constructs the displacement from the base point to `P`, then takes its dot product with a normal vector, and finally tests whether the resulting number is zero.

??? example "Python implementation: a plane in three-dimensional space"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Point3:
        x: float
        y: float
        z: float


    @dataclass(frozen=True, slots=True)
    class FreeVector3:
        dx: float
        dy: float
        dz: float

        def __add__(self, other: FreeVector3) -> FreeVector3:
            return FreeVector3(
                self.dx + other.dx,
                self.dy + other.dy,
                self.dz + other.dz,
            )

        def __mul__(self, scalar: float) -> FreeVector3:
            return FreeVector3(
                scalar * self.dx,
                scalar * self.dy,
                scalar * self.dz,
            )

        __rmul__ = __mul__

        def dot(self, other: FreeVector3) -> float:
            return (
                self.dx * other.dx
                + self.dy * other.dy
                + self.dz * other.dz
            )

        def cross(self, other: FreeVector3) -> FreeVector3:
            return FreeVector3(
                self.dy * other.dz - self.dz * other.dy,
                self.dz * other.dx - self.dx * other.dz,
                self.dx * other.dy - self.dy * other.dx,
            )

        @property
        def norm_squared(self) -> float:
            return self.dot(self)


    def displacement3(start: Point3, end: Point3) -> FreeVector3:
        return FreeVector3(
            end.x - start.x,
            end.y - start.y,
            end.z - start.z,
        )


    def translate3(point: Point3, vector: FreeVector3) -> Point3:
        return Point3(
            point.x + vector.dx,
            point.y + vector.dy,
            point.z + vector.dz,
        )


    @dataclass(frozen=True, slots=True)
    class Plane3:
        base: Point3
        first_direction: FreeVector3
        second_direction: FreeVector3

        def __post_init__(self) -> None:
            if self.normal.norm_squared == 0:
                raise ValueError("The two directions must be nonparallel.")

        @property
        def normal(self) -> FreeVector3:
            return self.first_direction.cross(self.second_direction)

        def at(self, s: float, t: float) -> Point3:
            shift = s * self.first_direction + t * self.second_direction
            return translate3(self.base, shift)

        def contains(self, point: Point3, tolerance: float = 1e-9) -> bool:
            offset = displacement3(self.base, point)
            return abs(self.normal.dot(offset)) <= tolerance
    ```

The cross product is used only where it is needed: it constructs a normal to the two permitted directions. The normal equation is implemented as a relation returning `bool`, not as another point or vector.
