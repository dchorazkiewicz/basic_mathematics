## Computational interlude: polar data and a conic family {#computational-model}

A polar pair is not merely an arbitrary pair of numbers: the radial coordinate must satisfy the convention \(r\geq0\), and a polar conic may fail to produce an admissible point for some angles. The implementation below uses `Point2`, `FreeVector2`, and `translate` from the computational model of Lecture 2.

??? example "Python implementation: polar coordinates and the focus--directrix family"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass
    from math import cos, sin


    @dataclass(frozen=True, slots=True)
    class PolarCoordinates:
        radius: float
        angle: float

        def __post_init__(self) -> None:
            if self.radius < 0:
                raise ValueError("This course uses the convention r >= 0.")

        def to_cartesian(self, pole: Point2) -> Point2:
            radial_vector = FreeVector2(
                self.radius * cos(self.angle),
                self.radius * sin(self.angle),
            )
            return translate(pole, radial_vector)


    @dataclass(frozen=True, slots=True)
    class PolarConic:
        focal_parameter: float
        eccentricity: float
        orientation: float = 0.0

        def __post_init__(self) -> None:
            if self.focal_parameter <= 0:
                raise ValueError("The focal parameter must be positive.")
            if self.eccentricity < 0:
                raise ValueError("The eccentricity cannot be negative.")

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

The return type `float | None` records a genuine domain issue. Under the convention \(r\geq0\), an angle for which \(1+e\cos(\theta-\theta_0)\leq0\) does not produce a point through this radial description. The program must control the same restrictions that are present in the mathematics.
