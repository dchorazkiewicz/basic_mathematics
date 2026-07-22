## Computational interlude: mathematical objects as types {#computational-model}

The code keeps only the structure needed to distinguish a point, a parametrised curve, and a relation.

??? example "Python class: `Point2`"

    ```python
    from dataclasses import dataclass
    from math import hypot


    @dataclass
    class Point2:
        x: float
        y: float

        def distance_to(self, other: "Point2") -> float:
            # Two points determine one distance.
            return hypot(other.x - self.x, other.y - self.y)
    ```

??? example "Python class: `ParametricCurve2`"

    ```python
    from collections.abc import Callable
    from dataclasses import dataclass


    @dataclass
    class ParametricCurve2:
        x_of_t: Callable[[float], float]
        y_of_t: Callable[[float], float]

        def at(self, t: float) -> Point2:
            # A parameter value produces a point.
            return Point2(self.x_of_t(t), self.y_of_t(t))
    ```

??? example "Python class: `CircleRelation`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class CircleRelation:
        centre: Point2
        radius: float

        def __post_init__(self) -> None:
            if self.radius <= 0:
                raise ValueError("radius must be positive")

        def contains(self, point: Point2, tolerance: float = 1e-9) -> bool:
            # A relation produces True or False.
            return abs(self.centre.distance_to(point) - self.radius) <= tolerance
    ```

The return types state the mathematical roles: `at(t)` returns a point, while `contains(P)` returns a truth value.