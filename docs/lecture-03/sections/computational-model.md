## Computational interlude: lines and planes as constructed objects {#computational-model}

The equations in this lecture combine objects of different types. A parameter multiplied by a direction is a vector; translating a base point by that vector produces a point. Membership in a line or plane is a scalar condition. The two-dimensional blocks use `Point2`, `FreeVector2`, `displacement`, and `translate` from Lecture 2.

??? example "Python class: `Line2`"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Line2:
        """A line determined by one point and one nonzero direction."""

        base: Point2
        direction: FreeVector2

        def __post_init__(self) -> None:
            # A zero direction would generate only one point.
            if self.direction.norm == 0:
                raise ValueError("A line requires a nonzero direction vector.")

        @classmethod
        def through(cls, first: Point2, second: Point2) -> Line2:
            # Two points determine the direction represented by first -> second.
            return cls(first, displacement(first, second))

        def at(self, t: float) -> Point2:
            # Scalar * vector -> vector, then point translated by vector -> point.
            return translate(self.base, t * self.direction)

        @property
        def normal(self) -> FreeVector2:
            # Rotating [u, v] to [-v, u] produces a perpendicular direction.
            return FreeVector2(-self.direction.dy, self.direction.dx)

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            # The offset is a vector; its dot product with the normal is a scalar.
            offset = displacement(self.base, point)
            return abs(self.normal.dot(offset)) <= tolerance
    ```

The method `at(t)` implements the parametric construction. The method `contains(P)` first constructs a displacement vector and then tests a scalar equation.

??? example "Python class: `Point3`"

    ```python
    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Point3:
        """A location in three-dimensional Cartesian space."""

        x: float
        y: float
        z: float
    ```

??? example "Python class: `FreeVector3`"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class FreeVector3:
        """A free displacement in three-dimensional space."""

        dx: float
        dy: float
        dz: float

        def __add__(self, other: FreeVector3) -> FreeVector3:
            # Vector + vector -> vector.
            if not isinstance(other, FreeVector3):
                return NotImplemented
            return FreeVector3(
                self.dx + other.dx,
                self.dy + other.dy,
                self.dz + other.dz,
            )

        def __mul__(self, scalar: float) -> FreeVector3:
            # Scalar * vector -> vector.
            if not isinstance(scalar, (int, float)):
                return NotImplemented
            return FreeVector3(
                scalar * self.dx,
                scalar * self.dy,
                scalar * self.dz,
            )

        __rmul__ = __mul__

        def dot(self, other: FreeVector3) -> float:
            # Vector dot vector -> scalar.
            if not isinstance(other, FreeVector3):
                raise TypeError("The dot product requires two free vectors.")
            return (
                self.dx * other.dx
                + self.dy * other.dy
                + self.dz * other.dz
            )

        def cross(self, other: FreeVector3) -> FreeVector3:
            # In three dimensions, vector cross vector -> vector.
            if not isinstance(other, FreeVector3):
                raise TypeError("The cross product requires two free vectors.")
            return FreeVector3(
                self.dy * other.dz - self.dz * other.dy,
                self.dz * other.dx - self.dx * other.dz,
                self.dx * other.dy - self.dy * other.dx,
            )

        @property
        def norm_squared(self) -> float:
            # Squared length is enough for testing whether the vector is zero.
            return self.dot(self)
    ```

??? example "Python operations: points and vectors in three dimensions"

    ```python
    def displacement3(start: Point3, end: Point3) -> FreeVector3:
        """Construct the free vector represented by start -> end."""

        if not isinstance(start, Point3) or not isinstance(end, Point3):
            raise TypeError("A displacement requires two points.")
        return FreeVector3(
            end.x - start.x,
            end.y - start.y,
            end.z - start.z,
        )


    def translate3(point: Point3, vector: FreeVector3) -> Point3:
        """Apply a free vector to a point."""

        if not isinstance(point, Point3):
            raise TypeError("The first argument must be a point.")
        if not isinstance(vector, FreeVector3):
            raise TypeError("The second argument must be a free vector.")
        return Point3(
            point.x + vector.dx,
            point.y + vector.dy,
            point.z + vector.dz,
        )
    ```

??? example "Python class: `Plane3`"

    ```python
    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Plane3:
        """A plane generated from one point and two independent directions."""

        base: Point3
        first_direction: FreeVector3
        second_direction: FreeVector3

        def __post_init__(self) -> None:
            # Parallel directions have zero cross product and generate only a line.
            if self.normal.norm_squared == 0:
                raise ValueError("The two directions must be nonparallel.")

        @property
        def normal(self) -> FreeVector3:
            # The cross product constructs a vector perpendicular to both directions.
            return self.first_direction.cross(self.second_direction)

        def at(self, s: float, t: float) -> Point3:
            # Two scaled directions form one displacement from the base point.
            shift = s * self.first_direction + t * self.second_direction
            return translate3(self.base, shift)

        def contains(self, point: Point3, tolerance: float = 1e-9) -> bool:
            # The normal equation is a scalar relation.
            offset = displacement3(self.base, point)
            return abs(self.normal.dot(offset)) <= tolerance
    ```

The cross product appears only where it is required: it constructs a normal to the two permitted directions. The normal equation is implemented as a relation returning `bool`, not as another point or vector.