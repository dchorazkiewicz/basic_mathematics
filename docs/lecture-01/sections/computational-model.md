## Computational interlude: mathematical objects as types {#computational-model}

Writing a program forces us to state which objects exist and what each operation returns. The blocks below are cumulative, but every class is shown separately so that its role can be inspected without opening the whole implementation.

??? example "Python class: `Point2`"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass
    from math import hypot


    @dataclass(frozen=True, slots=True)
    class Point2:
        """A location in the Cartesian plane."""

        x: float
        y: float

        def distance_to(self, other: Point2) -> float:
            # A distance is a number, not another point.
            return hypot(other.x - self.x, other.y - self.y)
    ```

??? example "Python class: `ParametricCurve2`"

    ```python
    from collections.abc import Callable
    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class ParametricCurve2:
        """A rule that produces one point for each parameter value."""

        x_of_t: Callable[[float], float]
        y_of_t: Callable[[float], float]

        def at(self, t: float) -> Point2:
            # The two numerical outputs are assembled into one point.
            return Point2(self.x_of_t(t), self.y_of_t(t))
    ```

??? example "Python class: `CircleRelation`"

    ```python
    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class CircleRelation:
        """A relation testing membership in a circle."""

        centre: Point2
        radius: float

        def __post_init__(self) -> None:
            # The constructor rejects data outside the mathematical domain.
            if self.radius <= 0:
                raise ValueError("The radius must be positive.")

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            # A relation returns a truth value.
            error = self.centre.distance_to(point) - self.radius
            return abs(error) <= tolerance
    ```

The return types encode the mathematics: `curve.at(t)` returns a `Point2`, whereas `circle.contains(P)` returns a truth value. A curve, a point, and a relation may all involve the same coordinates, but they are not the same kind of object.