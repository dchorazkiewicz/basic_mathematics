from dataclasses import dataclass
from math import acos, hypot


@dataclass
class Point:
    # Object: a Cartesian point P=(x,y).
    x: float
    y: float

    def __add__(self, other: "Point") -> "Point":
        # Definition — point addition: (p1,p2)+(q1,q2)=(p1+q1,p2+q2).
        return Point(self.x + other.x, self.y + other.y)

    def __neg__(self) -> "Point":
        # Definition — opposite point: -(p1,p2)=(-p1,-p2).
        return Point(-self.x, -self.y)

    def __sub__(self, other: "Point") -> "Point":
        # Definition — point difference: Q-P=(q1-p1,q2-p2), still a point.
        return Point(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar: float) -> "Point":
        # Definition — point scaling: lambda(p1,p2)=(lambda p1,lambda p2).
        return Point(scalar * self.x, scalar * self.y)

    # The same point scaling is available in the order lambda * P.
    __rmul__ = __mul__

    def distance_to(self, other: "Point") -> float:
        # Definition — d(P,Q)=sqrt((q1-p1)^2+(q2-p2)^2).
        return hypot(other.x - self.x, other.y - self.y)

    def anchored_vector_to(self, other: "Point") -> "AnchoredVector":
        # Definition — the ordered pair (P,Q) determines the anchored vector PQ.
        return AnchoredVector(self, other)

    def translated_by(self, vector: "FreeVector") -> "Point":
        # Definition — P (+) v=(p1+v1,p2+v2): a free vector acts on a point.
        return vector.apply_to(self)


@dataclass
class AnchoredVector:
    # Object: the anchored vector PQ determined by its start P and end Q.
    start: Point
    end: Point

    @property
    def coordinate_difference(self) -> Point:
        # Definition — Delta(P,Q)=Q-P is the ordinary point-coordinate difference.
        return self.end - self.start

    @property
    def coordinates(self) -> tuple[float, float]:
        # Definition — coordinates of PQ are (q1-p1,q2-p2).
        difference = self.coordinate_difference
        return difference.x, difference.y

    @property
    def length(self) -> float:
        # Definition — |PQ|=d(P,Q).
        return self.start.distance_to(self.end)

    def reversed(self) -> "AnchoredVector":
        # Construction — reversing the ordered pair changes PQ into QP.
        return AnchoredVector(self.end, self.start)

    def is_equivalent_to(self, other: "AnchoredVector") -> bool:
        # Definition — PQ~AB iff Delta(P,Q)=Delta(A,B).
        return self.coordinates == other.coordinates

    def as_free_vector(self) -> "FreeVector":
        # Definition — [PQ] forgets the endpoints and retains the displacement.
        return FreeVector(self)


@dataclass(eq=False)
class FreeVector:
    # Object: a free vector [PQ], represented by one anchored vector PQ.
    representative: AnchoredVector

    @classmethod
    def _from_components(cls, dx: float, dy: float) -> "FreeVector":
        # Construction — [dx,dy] uses the canonical representative from O=(0,0).
        origin = Point(0, 0)
        endpoint = Point(dx, dy)
        return origin.anchored_vector_to(endpoint).as_free_vector()

    @property
    def coordinates(self) -> tuple[float, float]:
        # Definition — [PQ]=[q1-p1,q2-p2].
        return self.representative.coordinates

    @property
    def dx(self) -> float:
        # Coordinate — dx is the first component v1 of v=[v1,v2].
        return self.coordinates[0]

    @property
    def dy(self) -> float:
        # Coordinate — dy is the second component v2 of v=[v1,v2].
        return self.coordinates[1]

    def __eq__(self, other: object) -> bool:
        # Definition — free vectors are equal iff their representatives are equivalent.
        return isinstance(other, FreeVector) and self.coordinates == other.coordinates

    def representative_at(self, start: Point) -> AnchoredVector:
        # Construction — choose PQ beginning at P such that [PQ]=v.
        end = Point(start.x + self.dx, start.y + self.dy)
        return AnchoredVector(start, end)

    def apply_to(self, point: Point) -> Point:
        # Definition — P (+) v is the endpoint of the representative of v starting at P.
        return self.representative_at(point).end

    def __add__(self, other: "FreeVector") -> "FreeVector":
        # Definition — [u1,u2]+[v1,v2]=[u1+v1,u2+v2].
        return self._from_components(self.dx + other.dx, self.dy + other.dy)

    def __neg__(self) -> "FreeVector":
        # Definition — -[v1,v2]=[-v1,-v2].
        return self._from_components(-self.dx, -self.dy)

    def __sub__(self, other: "FreeVector") -> "FreeVector":
        # Definition — u-v=u+(-v).
        return self + (-other)

    def __mul__(self, scalar: float) -> "FreeVector":
        # Definition — t[v1,v2]=[t v1,t v2].
        return self._from_components(scalar * self.dx, scalar * self.dy)

    # The same scalar multiplication is available in the order t * v.
    __rmul__ = __mul__

    @property
    def norm(self) -> float:
        # Definition — ||v||=sqrt(v1^2+v2^2).
        return hypot(self.dx, self.dy)

    def normalized(self) -> "FreeVector":
        # Definition — v-hat=v/||v|| for v!=0.
        if self.norm == 0:
            raise ValueError("the zero vector has no direction")
        return (1 / self.norm) * self

    def dot(self, other: "FreeVector") -> float:
        # Definition — u dot v=u1 v1+u2 v2: vector x vector -> scalar.
        return self.dx * other.dx + self.dy * other.dy

    def determinant(self, other: "FreeVector") -> float:
        # Definition — det(u,v)=u1 v2-u2 v1.
        return self.dx * other.dy - self.dy * other.dx

    def is_parallel_to(self, other: "FreeVector", tolerance: float = 1e-9) -> bool:
        # Test — nonzero u,v are parallel iff det(u,v)=0.
        if self.norm == 0 or other.norm == 0:
            raise ValueError("parallel directions must be nonzero")
        return abs(self.determinant(other)) <= tolerance

    def is_perpendicular_to(self, other: "FreeVector", tolerance: float = 1e-9) -> bool:
        # Test — nonzero u,v are perpendicular iff u dot v=0.
        if self.norm == 0 or other.norm == 0:
            raise ValueError("perpendicular directions must be nonzero")
        return abs(self.dot(other)) <= tolerance

    def angle_to(self, other: "FreeVector") -> float:
        # Definition — cos(theta)=(u dot v)/(||u|| ||v||).
        if self.norm == 0 or other.norm == 0:
            raise ValueError("an angle requires two nonzero vectors")
        cosine = self.dot(other) / (self.norm * other.norm)
        return acos(max(-1.0, min(1.0, cosine)))

    def projection_onto(self, other: "FreeVector") -> "FreeVector":
        # Definition — proj_v(u)=((u dot v)/(v dot v))v for v!=0.
        if other.norm == 0:
            raise ValueError("projection direction must be nonzero")
        coefficient = self.dot(other) / other.dot(other)
        return coefficient * other


@dataclass
class Basis:
    # Object: a basis B=(b1,b2) formed by two nonparallel free vectors.
    first: FreeVector
    second: FreeVector

    def __post_init__(self) -> None:
        # Definition — B is a basis only when det(b1,b2)!=0.
        if self.first.determinant(self.second) == 0:
            raise ValueError("basis vectors must be nonparallel")

    def combine(self, a: float, b: float) -> FreeVector:
        # Definition — coordinates [a,b]_B represent the vector a b1+b b2.
        return a * self.first + b * self.second

    def coordinates_of(self, vector: FreeVector) -> tuple[float, float]:
        # Definition — [v]_B=(a,b) iff v=a b1+b b2.
        determinant = self.first.determinant(self.second)
        a = vector.determinant(self.second) / determinant
        b = self.first.determinant(vector) / determinant
        return a, b
