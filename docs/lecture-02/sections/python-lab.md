## Live Python experiment {#python-lab}

The editor below runs Python directly in the browser. Change the coordinates of the points, run the code, and inspect which operations return points, anchored vectors, free vectors, or numbers. The first execution downloads the browser Python runtime, so it may take a moment.

<script type="py-editor" env="lecture-02-vectors" setup config='{"files":{"../assets/python/lecture-02/vector_model.py":"./vector_model.py"}}'>
from vector_model import Point, AnchoredVector, FreeVector, Basis
</script>

<script type="py-editor" env="lecture-02-vectors">
P = Point(1, 2)
Q = Point(4, 6)

# (P, Q) -> anchored vector PQ -> free vector [PQ]
PQ = P.anchored_vector_to(Q)
v = PQ.as_free_vector()

print("P =", P)
print("Q =", Q)
print("ordinary Q - P =", Q - P)
print("anchored vector PQ =", PQ)
print("free vector [PQ] has coordinates", v.coordinates)
print("||[PQ]|| =", v.norm)
print("P translated by [PQ] =", P.translated_by(v))

# A different anchored vector may represent the same free vector.
A = Point(-2, 1)
B = Point(1, 5)
AB = A.anchored_vector_to(B)
w = AB.as_free_vector()

print("PQ equals AB as anchored vectors:", PQ == AB)
print("PQ is equivalent to AB:", PQ.is_equivalent_to(AB))
print("[PQ] equals [AB] as free vectors:", v == w)

# Free-vector operations produce vectors or scalars according to the formula.
u = Point(0, 0).anchored_vector_to(Point(1, -2)).as_free_vector()
print("v + u =", (v + u).coordinates)
print("2v =", (2 * v).coordinates)
print("v dot u =", v.dot(u))
print("projection of v onto u =", v.projection_onto(u).coordinates)
</script>

The setup code loads the same mathematical model used by the examples above. The visible block contains only the experiment, so students may alter the data without rewriting the class definitions.