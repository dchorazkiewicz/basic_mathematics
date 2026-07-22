from dataclasses import dataclass
from math import acos, hypot


@dataclass
class Point:
    x: float
    y: float

    def __add__(self, other: "Point") -> "Point":
        # (p1, p2) + (q1, q2) = (p1 + q1, p2 + q2)
        return Point(self.x + other.x, self.y + other.y)

    def __neg__(self) -> "Point":
        # -(p1, p2) = (-p1, -p2)
        return Point(-self.x, -self.y)

    def __sub__(self, other: "Point") -> "Point":
        # Ordinary coordinate difference: Q - P is still a round-bracket point.
        return Point(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar: float) -> "Point":
        # lambda (p1, p2) = (lambda p1, lambda p2)
        return Point(scalar * self.x, scalar * self.y)

    __rmul__ = __mul__

    def distance_to(self, other: "Point") -> float:
        # d(P, Q) = sqrt((q1 - p1)^2 + (q2 - p2)^2)
        return hypot(other.x - self.x, other.y - self.y)

    def anchored_vector_to(self, other: "Point") -> "AnchoredVector":
        # The ordered pair (P, Q) determines the anchored vector PQ.
        return AnchoredVector(self, other)

    def translated_by(self, vector: "FreeVector") -> "Point":
        # P (+) v is the endpoint of the representative of v beginning at P.
        return vector.apply_to(self)


@dataclass
class AnchoredVector:
    start: Point
    end: Point

    @property
    def coordinate_difference(self) -> Point:
        # Delta(P, Q) = Q - P, calculated on point coordinates.
        return self.end - self.start

    @property
    def coordinates(self) -> tuple[float, float]:
        # PQ has coordinate change (q1 - p1, q2 - p2).
        difference = self.coordinate_difference
        return difference.x, difference.y

    @property
    def length(self) -> float:
        # |PQ| = d(P, Q)
        return self.start.distance_to(self.end)

    def reversed(self) -> "AnchoredVector":
        # Reversing (P, Q) gives QP.
        return AnchoredVector(self.end, self.start)

    def is_equivalent_to(self, other: "AnchoredVector") -> bool:
        # PQ ~ AB exactly when both arrows have the same coordinate change.
        return self.coordinates == other.coordinates

    def as_free_vector(self) -> "FreeVector":
        # PQ -> [PQ]: forget the endpoints and retain the displacement.
        return FreeVector(self)


@dataclass(eq=False)
class FreeVector:
    representative: AnchoredVector

    @classmethod
    def _from_components(cls, dx: float, dy: float) -> "FreeVector":
        # A result [dx, dy] is represented canonically from O=(0, 0).
        origin = Point(0, 0)
        endpoint = Point(dx, dy)
        return origin.anchored_vector_to(endpoint).as_free_vector()

    @property
    def coordinates(self) -> tuple[float, float]:
        # [PQ] = [q1 - p1, q2 - p2]
        return self.representative.coordinates

    @property
    def dx(self) -> float:
        return self.coordinates[0]

    @property
    def dy(self) -> float:
        return self.coordinates[1]

    def __eq__(self, other: object) -> bool:
        # Free vectors are equal when their anchored representatives are equivalent.
        return isinstance(other, FreeVector) and self.coordinates == other.coordinates

    def representative_at(self, start: Point) -> AnchoredVector:
        # Anchor the same free displacement at a chosen point P.
        end = Point(start.x + self.dx, start.y + self.dy)
        return AnchoredVector(start, end)

    def apply_to(self, point: Point) -> Point:
        # P (+) v = (p1 + v1, p2 + v2)
        return self.representative_at(point).end

    def __add__(self, other: "FreeVector") -> "FreeVector":
        # u + v = [u1 + v1, u2 + v2]
        return self._from_components(self.dx + other.dx, self.dy + other.dy)

    def __neg__(self) -> "FreeVector":
        # -v = [-v1, -v2]
        return self._from_components(-self.dx, -self.dy)

    def __sub__(self, other: "FreeVector") -> "FreeVector":
        # u - v = u + (-v)
        return self + (-other)

    def __mul__(self, scalar: float) -> "FreeVector":
        # t v = [t v1, t v2]
        return self._from_components(scalar * self.dx, scalar * self.dy)

    __rmul__ = __mul__

    @property
    def norm(self) -> float:
        # ||v|| = sqrt(v1^2 + v2^2)
        return hypot(self.dx, self.dy)

    def normalized(self) -> "FreeVector":
        # v-hat = v / ||v||
        if self.norm == 0:
            raise ValueError("the zero vector has no direction")
        return (1 / self.norm) * self

    def dot(self, other: "FreeVector") -> float:
        # u . v = u1 v1 + u2 v2: vector and vector -> scalar.
        return self.dx * other.dx + self.dy * other.dy

    def determinant(self, other: "FreeVector") -> float:
        # det(u, v) = u1 v2 - u2 v1
        return self.dx * other.dy - self.dy * other.dx

    def is_parallel_to(self, other: "FreeVector", tolerance: float = 1e-9) -> bool:
        # Nonzero directions are parallel exactly when det(u, v)=0.
        if self.norm == 0 or other.norm == 0:
            raise ValueError("parallel directions must be nonzero")
        return abs(self.determinant(other)) <= tolerance

    def is_perpendicular_to(self, other: "FreeVector", tolerance: float = 1e-9) -> bool:
        # Nonzero directions are perpendicular exactly when u . v=0.
        if self.norm == 0 or other.norm == 0:
            raise ValueError("perpendicular directions must be nonzero")
        return abs(self.dot(other)) <= tolerance

    def angle_to(self, other: "FreeVector") -> float:
        # cos(theta) = (u . v) / (||u|| ||v||)
        if self.norm == 0 or other.norm == 0:
            raise ValueError("an angle requires two nonzero vectors")
        cosine = self.dot(other) / (self.norm * other.norm)
        return acos(max(-1.0, min(1.0, cosine)))

    def projection_onto(self, other: "FreeVector") -> "FreeVector":
        # proj_v(u) = (u . v)/(v . v) v
        if other.norm == 0:
            raise ValueError("projection direction must be nonzero")
        coefficient = self.dot(other) / other.dot(other)
        return coefficient * other


@dataclass
class Basis:
    first: FreeVector
    second: FreeVector

    def __post_init__(self) -> None:
        # A basis requires two nonparallel directions.
        if self.first.determinant(self.second) == 0:
            raise ValueError("basis vectors must be nonparallel")

    def combine(self, a: float, b: float) -> FreeVector:
        # [a, b]_B represents a b1 + b b2.
        return a * self.first + b * self.second

    def coordinates_of(self, vector: FreeVector) -> tuple[float, float]:
        # Solve v = a b1 + b b2 by the two-dimensional determinant formulas.
        determinant = self.first.determinant(self.second)
        a = vector.determinant(self.second) / determinant
        b = self.first.determinant(vector) / determinant
        return a, b
