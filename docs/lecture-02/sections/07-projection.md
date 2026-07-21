## Projection is forced by the right-angle condition {#projection}

Let $\mathbf v\neq\mathbf0$. We seek a multiple $\lambda\mathbf v$ such that the remainder

$$
\mathbf u-\lambda\mathbf v
$$

is perpendicular to $\mathbf v$. Geometrically, this means decomposing $\mathbf u$ into a component parallel to $\mathbf v$ and a component perpendicular to $\mathbf v$:

$$
\mathbf u=\lambda\mathbf v+(\mathbf u-\lambda\mathbf v).
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Orthogonal projection</span><span class="figure-step-title" data-projection-readout>Move $\mathbf u$ and the direction $\mathbf v$.</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector projection figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-projection-board" class="jxgbox" data-vector-projection></div></div>
  <div class="relation-readout"><span data-projection-coefficient></span><span data-projection-vector></span><span data-projection-check></span></div>
  <figcaption class="figure-caption">The point on the line spanned by $\mathbf v$ is determined by the right-angle condition.</figcaption>
</figure>

!!! principle "Geometric requirement"
    The foot $H$ lies on the line spanned by $\mathbf v$. The vector from the origin to $H$ is the parallel component $\lambda\mathbf v$, while the vector from $H$ to the endpoint of $\mathbf u$ is the perpendicular remainder. The right-angle condition determines $\lambda$.

!!! derivation "Solving the right-angle condition"
    Perpendicularity requires

    $$
    (\mathbf u-\lambda\mathbf v)\cdot\mathbf v=0.
    $$

    Expanding gives

    $$
    \mathbf u\cdot\mathbf v-\lambda(\mathbf v\cdot\mathbf v)=0,
    $$

    so

    $$
    \lambda=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}.
    $$

!!! theorem "Projection formula"
    For $\mathbf v\neq\mathbf0$,

    $$
    \boxed{\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\,\mathbf v}.
    $$

    The formula is the solution of a geometric requirement, not a rule to be memorised without explanation.

### Orthogonal decomposition and its consequences

!!! definition "Orthogonal decomposition"
    $$
    \boxed{\mathbf u=\operatorname{proj}_{\mathbf v}\mathbf u+\left(\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u\right)}.
    $$

    The first term is parallel to $\mathbf v$ and the second is perpendicular to $\mathbf v$.

!!! theorem "Pythagorean identity for components"
    $$
    \boxed{\|\mathbf u\|^2=\left\|\operatorname{proj}_{\mathbf v}\mathbf u\right\|^2+\left\|\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u\right\|^2}.
    $$

### Scalar component and vector projection

!!! definition "Scalar and vector components"
    The signed scalar component of $\mathbf u$ in the direction of nonzero $\mathbf v$ is

    $$
    \boxed{\operatorname{comp}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\|\mathbf v\|}}.
    $$

    The corresponding vector projection is

    $$
    \boxed{\operatorname{proj}_{\mathbf v}\mathbf u=\operatorname{comp}_{\mathbf v}\mathbf u\frac{\mathbf v}{\|\mathbf v\|}}.
    $$

    The scalar component measures signed length along the chosen direction; multiplying by the unit vector turns that amount back into an actual displacement.

### The Cauchy--Schwarz inequality

!!! derivation "Derivation from projection"
    The parallel component cannot be longer than the whole vector:

    $$
    \left|\operatorname{comp}_{\mathbf v}\mathbf u\right|\leq\|\mathbf u\|.
    $$

    Substituting the scalar-component formula gives

    $$
    \frac{|\mathbf u\cdot\mathbf v|}{\|\mathbf v\|}\leq\|\mathbf u\|.
    $$

    Multiplying by $\|\mathbf v\|>0$ yields

    $$
    \boxed{|\mathbf u\cdot\mathbf v|\leq\|\mathbf u\|\,\|\mathbf v\|}.
    $$

Consequently, for nonzero vectors,

$$
-1\leq\frac{\mathbf u\cdot\mathbf v}{\|\mathbf u\|\,\|\mathbf v\|}\leq1,
$$

so the angle formula using $\arccos$ is meaningful.

### The triangle inequality

!!! derivation "Derivation from Cauchy--Schwarz"
    Using Cauchy--Schwarz,

    $$
    \begin{aligned}
    \|\mathbf u+\mathbf v\|^2
      &=\|\mathbf u\|^2+2\mathbf u\cdot\mathbf v+\|\mathbf v\|^2\\
      &\leq\|\mathbf u\|^2+2\|\mathbf u\|\,\|\mathbf v\|+\|\mathbf v\|^2\\
      &=(\|\mathbf u\|+\|\mathbf v\|)^2.
    \end{aligned}
    $$

    Both sides are nonnegative, so taking square roots gives

    $$
    \boxed{\|\mathbf u+\mathbf v\|\leq\|\mathbf u\|+\|\mathbf v\|}.
    $$

The triangle inequality is the algebraic form of the Euclidean fact that the straight segment between two points is no longer than a route that changes direction at an intermediate point.
