## Computational interlude: lines and planes as constructed objects {#computational-model}

The code mirrors the constructions of the chapter: a parameter scales a direction vector, a vector moves a point, and membership is tested by a scalar equation.

??? example "Python class: `Line2`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Line2:
        base: Point2
        direction: FreeVector2

        def __post_init__(self) -> None:
            if self.direction.norm == 0:
                raise ValueError("direction must be nonzero")

        @classmethod
        def through(cls, first: Point2, second: Point2) -> "Line2":
            return cls(first, displacement(first, second))

        def at(self, t: float) -> Point2:
            return translate(self.base, t * self.direction)

        @property
        def normal(self) -> FreeVector2:
            return FreeVector2(-self.direction.dy, self.direction.dx)

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            offset = displacement(self.base, point)
            # Normal dot displacement gives the scalar equation of the line.
            return abs(self.normal.dot(offset)) <= tolerance
    ```

??? example "Python class: `Point3`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Point3:
        x: float
        y: float
        z: float
    ```

??? example "Python class: `FreeVector3`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class FreeVector3:
        dx: float
        dy: float
        dz: float

        def __add__(self, other: "FreeVector3") -> "FreeVector3":
            return FreeVector3(
                self.dx + other.dx,
                self.dy + other.dy,
                self.dz + other.dz,
            )

        def __mul__(self, scalar: float) -> "FreeVector3":
            return FreeVector3(
                scalar * self.dx,
                scalar * self.dy,
                scalar * self.dz,
            )

        __rmul__ = __mul__

        def dot(self, other: "FreeVector3") -> float:
            return (
                self.dx * other.dx
                + self.dy * other.dy
                + self.dz * other.dz
            )

        def cross(self, other: "FreeVector3") -> "FreeVector3":
            # In three dimensions, vector cross vector gives a vector.
            return FreeVector3(
                self.dy * other.dz - self.dz * other.dy,
                self.dz * other.dx - self.dx * other.dz,
                self.dx * other.dy - self.dy * other.dx,
            )

        @property
        def norm_squared(self) -> float:
            return self.dot(self)
    ```

??? example "Python operations: points and vectors in three dimensions"

    ```python
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
    ```

??? example "Python class: `Plane3`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Plane3:
        base: Point3
        first_direction: FreeVector3
        second_direction: FreeVector3

        @property
        def normal(self) -> FreeVector3:
            return self.first_direction.cross(self.second_direction)

        def __post_init__(self) -> None:
            if self.normal.norm_squared == 0:
                raise ValueError("directions must be nonparallel")

        def at(self, s: float, t: float) -> Point3:
            shift = s * self.first_direction + t * self.second_direction
            return translate3(self.base, shift)

        def contains(self, point: Point3, tolerance: float = 1e-9) -> bool:
            offset = displacement3(self.base, point)
            return abs(self.normal.dot(offset)) <= tolerance
    ```

`Line2.at` and `Plane3.at` return points. The `contains` methods return truth values obtained from scalar equations.