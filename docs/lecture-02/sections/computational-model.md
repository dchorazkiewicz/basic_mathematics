## Computational interlude: controlling point and vector types {#computational-model}

Points, anchored vectors, and free vectors are represented by different classes. The two bridges are explicit: two points determine a displacement, and a point translated by a vector gives a point.

??? example "Python class: `Point2`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class Point2:
        x: float
        y: float
    ```

??? example "Python class: `FreeVector2`"

    ```python
    from dataclasses import dataclass
    from math import hypot


    @dataclass
    class FreeVector2:
        dx: float
        dy: float

        def __add__(self, other: "FreeVector2") -> "FreeVector2":
            return FreeVector2(self.dx + other.dx, self.dy + other.dy)

        def __neg__(self) -> "FreeVector2":
            return FreeVector2(-self.dx, -self.dy)

        def __sub__(self, other: "FreeVector2") -> "FreeVector2":
            return self + (-other)

        def __mul__(self, scalar: float) -> "FreeVector2":
            return FreeVector2(scalar * self.dx, scalar * self.dy)

        __rmul__ = __mul__

        def dot(self, other: "FreeVector2") -> float:
            # Vector dot vector gives a number.
            return self.dx * other.dx + self.dy * other.dy

        @property
        def norm(self) -> float:
            return hypot(self.dx, self.dy)
    ```

??? example "Python operations: points and free vectors"

    ```python
    def displacement(start: Point2, end: Point2) -> FreeVector2:
        # Ordered pair of points -> free vector.
        return FreeVector2(end.x - start.x, end.y - start.y)


    def translate(point: Point2, vector: FreeVector2) -> Point2:
        # Point and free vector -> point.
        return Point2(point.x + vector.dx, point.y + vector.dy)
    ```

??? example "Python class: `AnchoredVector2`"

    ```python
    from dataclasses import dataclass


    @dataclass
    class AnchoredVector2:
        start: Point2
        end: Point2

        @property
        def free_vector(self) -> FreeVector2:
            return displacement(self.start, self.end)

        def is_equivalent_to(self, other: "AnchoredVector2") -> bool:
            return self.free_vector == other.free_vector
    ```

The implementation never identifies a point with a vector. `displacement` changes an ordered pair of points into a free vector; `translate` applies that vector to a point.