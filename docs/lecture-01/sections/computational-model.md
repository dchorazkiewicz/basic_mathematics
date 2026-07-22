## Computational interlude: mathematical objects as types {#computational-model}

Writing a program forces us to state which objects exist and what each operation returns. The following minimal model separates three roles already used in this lecture: a point is data, a parametric curve produces a point from a parameter, and a relation tests whether a point satisfies a condition.

??? example "Python implementation: points, curves, and relations"

    ```python
    from __future__ import annotations

    from collections.abc import Callable
    from dataclasses import dataclass
    from math import hypot


    @dataclass(frozen=True, slots=True)
    class Point2:
        x: float
        y: float

        def distance_to(self, other: Point2) -> float:
            return hypot(other.x - self.x, other.y - self.y)


    @dataclass(frozen=True, slots=True)
    class ParametricCurve2:
        x_of_t: Callable[[float], float]
        y_of_t: Callable[[float], float]

        def at(self, t: float) -> Point2:
            return Point2(self.x_of_t(t), self.y_of_t(t))


    @dataclass(frozen=True, slots=True)
    class CircleRelation:
        centre: Point2
        radius: float

        def __post_init__(self) -> None:
            if self.radius <= 0:
                raise ValueError("The radius must be positive.")

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            return abs(self.centre.distance_to(point) - self.radius) <= tolerance
    ```

The return types encode the mathematics: `curve.at(t)` returns a `Point2`, whereas `circle.contains(P)` returns a truth value. A curve, a point, and a relation may all involve the same coordinates, but they are not the same kind of object.
