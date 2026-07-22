## Computational interlude: Cartesian and polar conics {#computational-model}

The planar classes `Point`, `AnchoredVector`, and `FreeVector` are those defined in Lecture 2. Polar directions are therefore constructed from points on the unit circle and only then converted into free vectors.

??? example "Python class: `PolarCoordinates`"

    ```python
    from dataclasses import dataclass
    from math import atan2, cos, sin


    @dataclass
    class PolarCoordinates:
        radius: float
        angle: float

        def __post_init__(self) -> None:
            if self.radius < 0:
                raise ValueError("radius must be nonnegative")

        @property
        def unit_direction(self) -> FreeVector:
            origin = Point(0, 0)
            endpoint = Point(cos(self.angle), sin(self.angle))
            return origin.anchored_vector_to(endpoint).as_free_vector()

        def to_cartesian(self, pole: Point) -> Point:
            radial_vector = self.radius * self.unit_direction
            return pole.translated_by(radial_vector)

        @classmethod
        def from_cartesian(
            cls,
            point: Point,
            pole: Point,
        ) -> "PolarCoordinates":
            displacement = pole.anchored_vector_to(point).as_free_vector()
            return cls(
                displacement.norm,
                atan2(displacement.dy, displacement.dx),
            )
    ```

??? example "Using `PolarCoordinates`"

    ```python
    from math import pi

    pole = Point(1, 1)
    polar = PolarCoordinates(4, pi / 3)

    print(polar.unit_direction.coordinates)
    # (0.5000000000000001, 0.8660254037844386)

    point = polar.to_cartesian(pole)
    print(point)
    # Point(x=3.0000000000000004, y=4.464101615137754)

    recovered = PolarCoordinates.from_cartesian(point, pole)
    print(recovered.radius)
    # 4.0
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
            radial_endpoint = Point(cos(angle), sin(angle))
            radial = Point(0, 0).anchored_vector_to(radial_endpoint)
            unit_vector = radial.as_free_vector()
            return self.centre.translated_by(self.radius * unit_vector)

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            return abs(self.centre.distance_to(point) - self.radius) <= tolerance
    ```

??? example "Using `Circle`"

    ```python
    from math import pi

    circle = Circle(Point(0, 0), 2)

    print(circle.at(pi / 2))
    # Point(x=1.2246467991473532e-16, y=2.0)

    print(circle.contains(Point(0, 2)))
    # True
    ```

??? example "Python class: `Ellipse`"

    ```python
    from dataclasses import dataclass
    from math import cos, sin, sqrt


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

        def contains_by_foci(
            self,
            point: Point,
            tolerance: float = 1e-9,
        ) -> bool:
            first, second = self.foci
            distance_sum = (
                point.distance_to(first)
                + point.distance_to(second)
            )
            return abs(distance_sum - 2 * self.semi_major) <= tolerance
    ```

??? example "Using `Ellipse`"

    ```python
    ellipse = Ellipse(5, 3)
    point = ellipse.at(0)

    print(point)
    # Point(x=5.0, y=0.0)

    print(ellipse.foci)
    # (Point(x=-4.0, y=0), Point(x=4.0, y=0))

    print(ellipse.contains(point))
    # True

    print(ellipse.contains_by_foci(point))
    # True
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

??? example "Using `Parabola`"

    ```python
    parabola = Parabola(2)
    point = parabola.at(1.5)

    print(point)
    # Point(x=4.5, y=6.0)

    print(parabola.contains(point))
    # True

    print(parabola.contains_by_focus_directrix(point))
    # True
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

        def contains_by_foci(
            self,
            point: Point,
            tolerance: float = 1e-9,
        ) -> bool:
            first, second = self.foci
            distance_difference = abs(
                point.distance_to(first) - point.distance_to(second)
            )
            return abs(
                distance_difference - 2 * self.semi_transverse
            ) <= tolerance
    ```

??? example "Using `Hyperbola`"

    ```python
    hyperbola = Hyperbola(3, 4)
    point = hyperbola.at(0)

    print(point)
    # Point(x=3.0, y=0.0)

    print(hyperbola.foci)
    # (Point(x=-5.0, y=0), Point(x=5.0, y=0))

    print(hyperbola.asymptote_slopes)
    # (-1.3333333333333333, 1.3333333333333333)

    print(hyperbola.contains(point))
    # True
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

??? example "Using `PolarConic`"

    ```python
    from math import pi

    conic = PolarConic(
        focal_parameter=3,
        eccentricity=0.5,
        orientation=pi / 6,
    )

    print(conic.conic_type)
    # ellipse

    print(conic.radius_at(pi / 6))
    # 2.0

    print(conic.point_at(pi / 6, Point(0, 0)))
    # Point(x=1.7320508075688774, y=0.9999999999999999)
    ```

The polar construction now follows the same chain as the vector lecture: two points determine a representative, the representative determines a free direction vector, scalar multiplication sets its length, and translating the pole produces the final point.