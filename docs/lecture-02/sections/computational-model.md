## Computational interlude: controlling point and vector types {#computational-model}

Coordinates alone do not determine the type of an object. The implementation below therefore uses distinct classes for points, anchored vectors, and free vectors. The two bridges between points and free vectors are explicit functions: `displacement(P, Q)` constructs the free displacement represented by the ordered pair of points, while `translate(P, v)` applies a free vector to a point.

??? example "Python implementation: points and vectors"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass
    from math import hypot


    @dataclass(frozen=True, slots=True)
    class Point2:
        x: float
        y: float


    @dataclass(frozen=True, slots=True)
    class FreeVector2:
        dx: float
        dy: float

        def __add__(self, other: FreeVector2) -> FreeVector2:
            return FreeVector2(self.dx + other.dx, self.dy + other.dy)

        def __neg__(self) -> FreeVector2:
            return FreeVector2(-self.dx, -self.dy)

        def __sub__(self, other: FreeVector2) -> FreeVector2:
            return self + (-other)

        def __mul__(self, scalar: float) -> FreeVector2:
            return FreeVector2(scalar * self.dx, scalar * self.dy)

        __rmul__ = __mul__

        def dot(self, other: FreeVector2) -> float:
            return self.dx * other.dx + self.dy * other.dy

        @property
        def norm(self) -> float:
            return hypot(self.dx, self.dy)


    def displacement(start: Point2, end: Point2) -> FreeVector2:
        return FreeVector2(end.x - start.x, end.y - start.y)


    def translate(point: Point2, vector: FreeVector2) -> Point2:
        return Point2(point.x + vector.dx, point.y + vector.dy)


    @dataclass(frozen=True, slots=True)
    class AnchoredVector2:
        start: Point2
        end: Point2

        @property
        def free_vector(self) -> FreeVector2:
            return displacement(self.start, self.end)

        def is_equivalent_to(self, other: AnchoredVector2) -> bool:
            return self.free_vector == other.free_vector
    ```

This model does not silently identify a pair of points with a free vector. The conversion is performed by `displacement`. Likewise, applying a vector to a point is performed by `translate`. Vector addition, scalar multiplication, the norm, and the dot product are defined only on the vector class.
