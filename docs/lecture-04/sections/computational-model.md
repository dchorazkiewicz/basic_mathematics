## Computational interlude: Cartesian and polar conics {#computational-model}

The plane classes `Point` and `FreeVector` are those defined in Lecture 2. Each conic below implements the equations, parametrisations and geometric data used in this chapter.

??? example "Python class: `PolarCoordinates`"

    ```python
    from dataclasses import dataclass
    from math import atan2, cos, hypot, sin


    @dataclass
    class PolarCoordinates:
        radius: float
        angle: float

        def __post_init__(self) -> None:
            if self.radius < 0:
                raise ValueError("radius must be nonnegative")

        @property
        def unit_direction(self) -> FreeVector:
            return FreeVector(cos(self.angle), sin(self.angle))

        def to_cartesian(self, pole: Point) -> Point:
            return pole.translated_by(self.radius * self.unit_direction)

        @classmethod
        def from_cartesian(cls, point: Point, pole: Point) -> "PolarCoordinates":
            displacement = pole.vector_to(point)
            return cls(
                hypot(displacement.dx, displacement.dy),
                atan2(displacement.dy, displacement.dx),
            )
    ```

??? example "Python class: `Circle`"

    ```python
    from dataclasses import dataclass
    from math import cos, sin


    @dataclass
    class Circle:
        centre: Point
        radius: float

        def __post_init__(self) -> None:
            if self.radius <= 0:
                raise ValueError("radius must be positive")

        def at(self, angle: float) -> Point:
            return Point(
                self.centre.x + self.radius * cos(angle),
                self.centre.y + self.radius * sin(angle),
            )

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            return abs(self.centre.distance_to(point) - self.radius) <= tolerance
    ```

??? example "Python class: `Ellipse`"

    ```python
    from dataclasses import dataclass
    from math import cos, sqrt, sin


    @dataclass
    class Ellipse:
        semi_major: float
        semi_minor: float

        def __post_init__(self) -> None:
            if self.semi_major < self.semi_minor or self.semi_minor <= 0:
                raise ValueError("require semi_major >= semi_minor > 0")

        @property
        def focal_distance(self) -> float:
            return sqrt(self.semi_major**2 - self.semi_minor**2)

        @property
        def foci(self) -> tuple[Point, Point]:
            c = self.focal_distance
            return Point(-c, 0), Point(c, 0)

        def at(self, t: float) -> Point:
            return Point(
                self.semi_major * cos(t),
                self.semi_minor * sin(t),
            )

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            value = (
                point.x**2 / self.semi_major**2
                + point.y**2 / self.semi_minor**2
            )
            return abs(value - 1) <= tolerance

        def contains_by_foci(self, point: Point, tolerance: float = 1e-9) -> bool:
            first, second = self.foci
            return abs(
                point.distance_to(first)
                + point.distance_to(second)
                - 2 * self.semi_major
            ) <= tolerance
    ```

??? example "Python class: `Parabola`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Parabola:
        focal_parameter: float

        def __post_init__(self) -> None:
            if self.focal_parameter <= 0:
                raise ValueError("focal parameter must be positive")

        @property
        def focus(self) -> Point:
            return Point(self.focal_parameter, 0)

        @property
        def directrix_x(self) -> float:
            return -self.focal_parameter

        def at(self, t: float) -> Point:
            p = self.focal_parameter
            return Point(p * t**2, 2 * p * t)

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            p = self.focal_parameter
            return abs(point.y**2 - 4 * p * point.x) <= tolerance

        def contains_by_focus_directrix(
            self,
            point: Point,
            tolerance: float = 1e-9,
        ) -> bool:
            distance_to_directrix = abs(point.x - self.directrix_x)
            return abs(
                point.distance_to(self.focus) - distance_to_directrix
            ) <= tolerance
    ```

??? example "Python class: `Hyperbola`"

    ```python
    from dataclasses import dataclass
    from math import cosh, sinh, sqrt


    @dataclass
    class Hyperbola:
        semi_transverse: float
        semi_conjugate: float

        def __post_init__(self) -> None:
            if self.semi_transverse <= 0 or self.semi_conjugate <= 0:
                raise ValueError("both semiaxes must be positive")

        @property
        def focal_distance(self) -> float:
            return sqrt(self.semi_transverse**2 + self.semi_conjugate**2)

        @property
        def foci(self) -> tuple[Point, Point]:
            c = self.focal_distance
            return Point(-c, 0), Point(c, 0)

        @property
        def asymptote_slopes(self) -> tuple[float, float]:
            slope = self.semi_conjugate / self.semi_transverse
            return -slope, slope

        def at(self, t: float, branch: int = 1) -> Point:
            if branch not in (-1, 1):
                raise ValueError("branch must be -1 or 1")
            return Point(
                branch * self.semi_transverse * cosh(t),
                self.semi_conjugate * sinh(t),
            )

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            value = (
                point.x**2 / self.semi_transverse**2
                - point.y**2 / self.semi_conjugate**2
            )
            return abs(value - 1) <= tolerance

        def contains_by_foci(self, point: Point, tolerance: float = 1e-9) -> bool:
            first, second = self.foci
            return abs(
                abs(point.distance_to(first) - point.distance_to(second))
                - 2 * self.semi_transverse
            ) <= tolerance
    ```

??? example "Python class: `PolarConic`"

    ```python
    from dataclasses import dataclass
    from math import cos


    @dataclass
    class PolarConic:
        focal_parameter: float
        eccentricity: float
        orientation: float = 0.0

        def __post_init__(self) -> None:
            if self.focal_parameter <= 0:
                raise ValueError("focal parameter must be positive")
            if self.eccentricity < 0:
                raise ValueError("eccentricity must be nonnegative")

        @property
        def conic_type(self) -> str:
            if self.eccentricity == 0:
                return "circle"
            if self.eccentricity < 1:
                return "ellipse"
            if self.eccentricity == 1:
                return "parabola"
            return "hyperbola"

        def radius_at(self, angle: float) -> float | None:
            denominator = 1 + self.eccentricity * cos(
                angle - self.orientation
            )
            if denominator <= 0:
                return None
            return self.focal_parameter / denominator

        def point_at(self, angle: float, focus: Point) -> Point | None:
            radius = self.radius_at(angle)
            if radius is None:
                return None
            return PolarCoordinates(radius, angle).to_cartesian(focus)
    ```

The classes expose both descriptions used in the chapter: `contains` checks Cartesian equations, the focal methods check geometric distance conditions, and `PolarConic.point_at` constructs a point from direction and focal distance.