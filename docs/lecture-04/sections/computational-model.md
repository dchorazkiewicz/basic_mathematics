## Computational interlude: polar data and a conic family {#computational-model}

The implementation keeps only the data and operations needed to convert polar coordinates and evaluate the focus--directrix family.

??? example "Python class: `PolarCoordinates`"

    ```python
    from dataclasses import dataclass
    from math import cos, sin


    @dataclass
    class PolarCoordinates:
        radius: float
        angle: float

        def __post_init__(self) -> None:
            if self.radius < 0:
                raise ValueError("radius must be nonnegative")

        def to_cartesian(self, pole: Point2) -> Point2:
            radial = FreeVector2(
                self.radius * cos(self.angle),
                self.radius * sin(self.angle),
            )
            # Polar direction and distance produce a displacement from the pole.
            return translate(pole, radial)
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

        def radius_at(self, angle: float) -> float | None:
            denominator = 1 + self.eccentricity * cos(
                angle - self.orientation
            )
            if denominator <= 0:
                return None
            return self.focal_parameter / denominator

        def point_at(self, angle: float, focus: Point2) -> Point2 | None:
            radius = self.radius_at(angle)
            if radius is None:
                return None
            return PolarCoordinates(radius, angle).to_cartesian(focus)
    ```

The optional return value records the domain restriction: under the convention \(r\geq0\), not every viewing angle produces a point.