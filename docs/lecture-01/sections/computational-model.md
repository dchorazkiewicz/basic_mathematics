## Computational interlude: mathematical objects as types {#computational-model}

The classes below implement the objects used in this lecture. Each method corresponds to an operation already present in the mathematics.

??? example "Python class: `Point`"

    ```python
    from dataclasses import dataclass
    from math import hypot


    @dataclass
    class Point:
        x: float
        y: float

        def distance_to(self, other: "Point") -> float:
            return hypot(other.x - self.x, other.y - self.y)
    ```

??? example "Python class: `Function`"

    ```python
    from collections.abc import Callable
    from dataclasses import dataclass


    @dataclass
    class Function:
        rule: Callable[[float], float]

        def __call__(self, x: float) -> float:
            return self.rule(x)

        def graph_point(self, x: float) -> Point:
            return Point(x, self(x))
    ```

??? example "Python class: `ParametricCurve`"

    ```python
    from collections.abc import Callable
    from dataclasses import dataclass


    @dataclass
    class ParametricCurve:
        x_of_t: Callable[[float], float]
        y_of_t: Callable[[float], float]

        def at(self, t: float) -> Point:
            return Point(self.x_of_t(t), self.y_of_t(t))
    ```

??? example "Python class: `Relation`"

    ```python
    from collections.abc import Callable
    from dataclasses import dataclass


    @dataclass
    class Relation:
        condition: Callable[[Point], bool]

        def contains(self, point: Point) -> bool:
            return self.condition(point)
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

        def contains(self, point: Point, tolerance: float = 1e-9) -> bool:
            return abs(self.centre.distance_to(point) - self.radius) <= tolerance

        def at(self, angle: float) -> Point:
            return Point(
                self.centre.x + self.radius * cos(angle),
                self.centre.y + self.radius * sin(angle),
            )
    ```

`Function.graph_point(x)` and `ParametricCurve.at(t)` return points. `Relation.contains(P)` and `Circle.contains(P)` return truth values. The return type records the mathematical role of each construction.