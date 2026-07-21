## Parallel vectors, multiplication by a number, and linear combinations {#scaling}

Before multiplying a vector by a number, we first identify the geometric relation that this operation is meant to preserve.

!!! definition "Parallel vectors from length equalities"
    Two nonzero free vectors $\mathbf a$ and $\mathbf b$ have the same direction and the same orientation when placing them successively produces no shortening:

    $$
    |\mathbf a+\mathbf b|=|\mathbf a|+|\mathbf b|.
    $$

    They have the same direction and opposite orientations when

    $$
    |\mathbf a-\mathbf b|=|\mathbf a|+|\mathbf b|.
    $$

    In both cases the vectors are called parallel.

For $\mathbf a=[a_1,a_2]$ and $\mathbf b=[b_1,b_2]$, equality in the triangle inequality gives the coordinate criterion

$$
\boxed{\mathbf a\parallel\mathbf b\iff \lambda\mathbf a=\mu\mathbf b}
$$

for some real numbers $\lambda$ and $\mu$ that are not both zero. In the plane this may also be written as

$$
\boxed{a_1b_2-a_2b_1=0.}
$$

If $\lambda$ and $\mu$ have the same sign, the orientations agree; if their signs are opposite, the orientations are opposite.

### Multiplication by a real number

If $t>0$, then $t\mathbf a$ is parallel to $\mathbf a$, has the same orientation, and

$$
|t\mathbf a|=t|\mathbf a|.
$$

If $t<0$, the orientation is reversed and

$$
|t\mathbf a|=|t|\,|\mathbf a|.
$$

For $t=0$, the result is the zero vector. In coordinates,

$$
\boxed{t[a_1,a_2]=[ta_1,ta_2].}
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Scaling and combining vectors</span><span class="figure-step-title" data-scaling-readout>$2\mathbf u-\mathbf v$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open scaling figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-scaling-board" class="jxgbox" data-vector-scaling></div></div>
  <div class="parameter-controls" style="--parameter-count:2">
    <label class="parameter-control"><span>$a$ = <output data-scale-a>2</output></span><input type="range" min="-3" max="3" step="0.25" value="2" data-scale-a-slider></label>
    <label class="parameter-control"><span>$b$ = <output data-scale-b>-1</output></span><input type="range" min="-3" max="3" step="0.25" value="-1" data-scale-b-slider></label>
  </div>
  <figcaption class="figure-caption">The two scaled displacements are added head to tail to form $a\mathbf u+b\mathbf v$.</figcaption>
</figure>

Scalar multiplication is compatible with addition:

$$
\boxed{t(\mathbf a+\mathbf b)=t\mathbf a+t\mathbf b},
\qquad
\boxed{(s+t)\mathbf a=s\mathbf a+t\mathbf a}.
$$

These identities follow from coordinatewise arithmetic, while geometrically they say that scaling commutes with combining directed changes.

### Linear combinations: what addition and scaling can build

!!! definition "Linear combination"
    Given vectors $\mathbf u,\mathbf v$ and real numbers $a,b$, the vector

    $$
    \boxed{a\mathbf u+b\mathbf v}
    $$

    is called a linear combination of $\mathbf u$ and $\mathbf v$.

First scale $\mathbf u$ by $a$ and $\mathbf v$ by $b$, then add the resulting displacements. A linear combination is therefore not a new operation.

!!! note "One direction versus two directions"
    A single nonzero vector generates only the line

    $$
    \{\lambda\mathbf v:\lambda\in\mathbb R\}.
    $$

    Two parallel vectors still generate one line. Two nonparallel vectors provide two independent directions and can generate the whole plane.

??? derivation "Why nonparallel directions reach the plane"
    If $\mathbf u$ and $\mathbf v$ are parallel, every multiple of either vector lies on the same line, so every sum $a\mathbf u+b\mathbf v$ remains on that line. If they are not parallel, the parallelogram construction decomposes any target displacement into one component along each direction. The two coefficients record those two signed motions.

!!! theorem "Basis theorem in the plane"
    Two nonparallel vectors $\mathbf u$ and $\mathbf v$ determine every vector in the plane uniquely in the form

    $$
    \boxed{\mathbf w=a\mathbf u+b\mathbf v}.
    $$

    A basis is precisely such a pair of independent directions, and basis coordinates are the coefficients in this reconstruction.
