## Computational interlude: controlling point and vector types {#computational-model}

Coordinates alone do not determine the type of an object. The implementation therefore uses distinct classes for points, anchored vectors, and free vectors. In particular, `Point2` does not define point addition or point subtraction as vector operations. The bridges between points and vectors are explicit functions.

??? example "Python class: `Point2`"

    ```python
    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class Point2:
        """A location; it is not a free vector."""

        x: float
        y: float

        # No __add__ or __sub__ is supplied here.
        # A program must not silently confuse points with vectors.
    ```

??? example "Python class: `FreeVector2`"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass
    from math import hypot


    @dataclass(frozen=True, slots=True)
    class FreeVector2:
        """A displacement independent of its starting point."""

        dx: float
        dy: float

        def __add__(self, other: FreeVector2) -> FreeVector2:
            # Vector + vector -> vector.
            if not isinstance(other, FreeVector2):
                return NotImplemented
            return FreeVector2(self.dx + other.dx, self.dy + other.dy)

        def __neg__(self) -> FreeVector2:
            # The opposite displacement reverses both components.
            return FreeVector2(-self.dx, -self.dy)

        def __sub__(self, other: FreeVector2) -> FreeVector2:
            # Vector subtraction is addition of the opposite vector.
            if not isinstance(other, FreeVector2):
                return NotImplemented
            return self + (-other)

        def __mul__(self, scalar: float) -> FreeVector2:
            # Scalar * vector -> vector.
            if not isinstance(scalar, (int, float)):
                return NotImplemented
            return FreeVector2(scalar * self.dx, scalar * self.dy)

        __rmul__ = __mul__

        def dot(self, other: FreeVector2) -> float:
            # Vector dot vector -> scalar.
            if not isinstance(other, FreeVector2):
                raise TypeError("The dot product requires two free vectors.")
            return self.dx * other.dx + self.dy * other.dy

        @property
        def norm(self) -> float:
            # The norm is a nonnegative scalar.
            return hypot(self.dx, self.dy)
    ```

??? example "Python operations: points and free vectors"

    ```python
    def displacement(start: Point2, end: Point2) -> FreeVector2:
        """Construct the free vector represented by the ordered pair."""

        if not isinstance(start, Point2) or not isinstance(end, Point2):
            raise TypeError("A displacement requires two points.")
        return FreeVector2(end.x - start.x, end.y - start.y)


    def translate(point: Point2, vector: FreeVector2) -> Point2:
        """Apply a free displacement to a point."""

        if not isinstance(point, Point2):
            raise TypeError("The first argument must be a point.")
        if not isinstance(vector, FreeVector2):
            raise TypeError("The second argument must be a free vector.")
        return Point2(point.x + vector.dx, point.y + vector.dy)
    ```

??? example "Python class: `AnchoredVector2`"

    ```python
    from __future__ import annotations

    from dataclasses import dataclass


    @dataclass(frozen=True, slots=True)
    class AnchoredVector2:
        """A directed segment with specified initial and terminal points."""

        start: Point2
        end: Point2

        @property
        def free_vector(self) -> FreeVector2:
            # Forget the location and retain only the displacement.
            return displacement(self.start, self.end)

        def is_equivalent_to(self, other: AnchoredVector2) -> bool:
            # Two anchored vectors are equivalent when their displacements agree.
            if not isinstance(other, AnchoredVector2):
                return False
            return self.free_vector == other.free_vector
    ```

This implementation does not silently identify a pair of points with a free vector. The conversion is performed by `displacement`; applying a vector to a point is performed by `translate`. Vector addition, scalar multiplication, the norm, and the dot product exist only on the vector class.