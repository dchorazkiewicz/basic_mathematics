## Computational interlude: lines and planes as constructed objects {#computational-model}

The planar classes `Point`, `AnchoredVector`, and `FreeVector` are those defined in Lecture 2. A line direction is therefore obtained from an ordered pair of points or from another already constructed free vector. The three-dimensional model repeats the same construction in space.

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
            anchored = first.anchored_vector_to(second)
            return cls(first, anchored.as_free_vector())

        def at(self, t: float) -> Point:
            return self.base.translated_by(t * self.direction)

        @property
        def normal(self) -> FreeVector:
            origin = Point(0, 0)
            endpoint = Point(-self.direction.dy, self.direction.dx)
            return origin.anchored_vector_to(endpoint).as_free_vector()

        @property
        def slope(self) -> float | None:
            if self.direction.dx == 0:
                return None
            return self.direction.dy / self.direction.dx

        def normal_equation(self) -> tuple[float, float, float]:
            a, b = self.normal.coordinates
            c = a * self.base.x + b * self.base.y
            return a, b, c

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            anchored = self.base.anchored_vector_to(point)
            offset = anchored.as_free_vector()
            return abs(self.normal.dot(offset)) <= tolerance

        def is_parallel_to(self, other: "Line") -> bool:
            return self.direction.is_parallel_to(other.direction)

        def is_perpendicular_to(self, other: "Line") -> bool:
            return self.direction.is_perpendicular_to(other.direction)

        def nearest_point(self, point: Point) -> Point:
            offset = self.base.anchored_vector_to(point).as_free_vector()
            shift = offset.projection_onto(self.direction)
            return self.base.translated_by(shift)

        def distance_to(self, point: Point) -> float:
            return point.distance_to(self.nearest_point(point))
    ```

??? example "Using `Line`"

    ```python
    A = Point(1, 1)
    B = Point(4, 3)

    line = Line.through(A, B)

    print(line.direction.coordinates)
    # (3, 2)

    print(line.at(0))
    # Point(x=1, y=1)

    print(line.at(1))
    # Point(x=4, y=3)

    print(line.at(2))
    # Point(x=7, y=5)

    print(line.normal.coordinates)
    # (-2, 3)

    print(line.normal_equation())
    # (-2, 3, 1)

    print(line.contains(Point(7, 5)))
    # True
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
            return Point3D(
                self.x + other.x,
                self.y + other.y,
                self.z + other.z,
            )

        def __neg__(self) -> "Point3D":
            return Point3D(-self.x, -self.y, -self.z)

        def __sub__(self, other: "Point3D") -> "Point3D":
            return Point3D(
                self.x - other.x,
                self.y - other.y,
                self.z - other.z,
            )

        def __mul__(self, scalar: float) -> "Point3D":
            return Point3D(
                scalar * self.x,
                scalar * self.y,
                scalar * self.z,
            )

        __rmul__ = __mul__

        def distance_to(self, other: "Point3D") -> float:
            return sqrt(
                (other.x - self.x) ** 2
                + (other.y - self.y) ** 2
                + (other.z - self.z) ** 2
            )

        def anchored_vector_to(self, other: "Point3D") -> "AnchoredVector3D":
            return AnchoredVector3D(self, other)

        def translated_by(self, vector: "FreeVector3D") -> "Point3D":
            return Point3D(
                self.x + vector.dx,
                self.y + vector.dy,
                self.z + vector.dz,
            )
    ```

??? example "Python class: `AnchoredVector3D`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class AnchoredVector3D:
        start: Point3D
        end: Point3D

        @property
        def coordinate_difference(self) -> Point3D:
            return self.end - self.start

        @property
        def coordinates(self) -> tuple[float, float, float]:
            difference = self.coordinate_difference
            return difference.x, difference.y, difference.z

        @property
        def length(self) -> float:
            return self.start.distance_to(self.end)

        def reversed(self) -> "AnchoredVector3D":
            return AnchoredVector3D(self.end, self.start)

        def as_free_vector(self) -> "FreeVector3D":
            return FreeVector3D(self)
    ```

??? example "Python class: `FreeVector3D`"

    ```python
    from dataclasses import dataclass
    from math import acos, sqrt


    @dataclass(eq=False)
    class FreeVector3D:
        representative: AnchoredVector3D

        @classmethod
        def from_coordinates(
            cls,
            dx: float,
            dy: float,
            dz: float,
        ) -> "FreeVector3D":
            origin = Point3D(0, 0, 0)
            endpoint = Point3D(dx, dy, dz)
            return cls(AnchoredVector3D(origin, endpoint))

        @property
        def coordinates(self) -> tuple[float, float, float]:
            return self.representative.coordinates

        @property
        def dx(self) -> float:
            return self.coordinates[0]

        @property
        def dy(self) -> float:
            return self.coordinates[1]

        @property
        def dz(self) -> float:
            return self.coordinates[2]

        def __eq__(self, other: object) -> bool:
            return (
                isinstance(other, FreeVector3D)
                and self.coordinates == other.coordinates
            )

        def __add__(self, other: "FreeVector3D") -> "FreeVector3D":
            return FreeVector3D.from_coordinates(
                self.dx + other.dx,
                self.dy + other.dy,
                self.dz + other.dz,
            )

        def __neg__(self) -> "FreeVector3D":
            return FreeVector3D.from_coordinates(-self.dx, -self.dy, -self.dz)

        def __sub__(self, other: "FreeVector3D") -> "FreeVector3D":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector3D":
            return FreeVector3D.from_coordinates(
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
            return FreeVector3D.from_coordinates(
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
            first_direction = first.anchored_vector_to(second).as_free_vector()
            second_direction = first.anchored_vector_to(third).as_free_vector()
            return cls(first, first_direction, second_direction)

        @property
        def normal(self) -> FreeVector3D:
            return self.first_direction.cross(self.second_direction)

        def at(self, s: float, t: float) -> Point3D:
            shift = s * self.first_direction + t * self.second_direction
            return self.base.translated_by(shift)

        def normal_equation(self) -> tuple[float, float, float, float]:
            a, b, c = self.normal.coordinates
            d = a * self.base.x + b * self.base.y + c * self.base.z
            return a, b, c, d

        def contains(self, point: Point3D, tolerance: float = 1e-9) -> bool:
            offset = self.base.anchored_vector_to(point).as_free_vector()
            return abs(self.normal.dot(offset)) <= tolerance

        def distance_to(self, point: Point3D) -> float:
            offset = self.base.anchored_vector_to(point).as_free_vector()
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

??? example "Using points, vectors, and a plane in space"

    ```python
    P = Point3D(1, 0, 0)
    Q = Point3D(0, 1, 0)
    R = Point3D(0, 0, 1)

    PQ = P.anchored_vector_to(Q)
    PR = P.anchored_vector_to(R)

    print(PQ.coordinates)
    # (-1, 1, 0)

    print(PR.coordinates)
    # (-1, 0, 1)

    plane = Plane.through(P, Q, R)

    print(plane.normal.coordinates)
    # (1, 1, 1)

    print(plane.normal_equation())
    # (1, 1, 1, 1)

    print(plane.at(0, 0))
    # Point3D(x=1, y=0, z=0)

    print(plane.at(1, 0))
    # Point3D(x=0, y=1, z=0)

    print(plane.at(0, 1))
    # Point3D(x=0, y=0, z=1)

    print(plane.contains(Point3D(0.2, 0.3, 0.5)))
    # True
    ```

Every direction used by `Line` or `Plane` is now obtained from a representative determined by points. Its coordinates are then read from that representative and used by the algebraic operations.