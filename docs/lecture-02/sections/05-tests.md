## One angle calculation, two geometric tests {#tests}

Take two arbitrary nonzero vectors

$$
\mathbf u=[u_1,u_2],\qquad \mathbf v=[v_1,v_2].
$$

Let their angles of inclination be $\alpha$ and $\beta$. Then

$$
\mathbf u=\|\mathbf u\|[\cos\alpha,\sin\alpha],
\qquad
\mathbf v=\|\mathbf v\|[\cos\beta,\sin\beta].
$$

!!! principle "One comparison controls both tests"
    The directed turn from $\mathbf u$ to $\mathbf v$ is $\beta-\alpha$. Its sine detects parallel directions, while its cosine detects perpendicular directions.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Two vectors, two coordinate tests</span><span class="figure-step-title" data-tests-readout>Move the endpoints of $\mathbf u$ and $\mathbf v$.</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector tests figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-tests-board" class="jxgbox" data-vector-tests></div></div>
  <div class="relation-readout"><span data-determinant-readout></span><span data-dot-readout></span><span data-angle-readout></span></div>
  <figcaption class="figure-caption">The same angle difference produces both coordinate tests.</figcaption>
</figure>

### Parallel directions arise from the sine of the angle difference

!!! derivation "Parallelism from $\sin(\beta-\alpha)$"
    Two nonzero vectors determine the same unoriented direction precisely when

    $$
    \beta-\alpha\equiv0\pmod\pi,
    $$

    equivalently when $\sin(\beta-\alpha)=0$. Using

    $$
    \sin(\beta-\alpha)=\sin\beta\cos\alpha-\cos\beta\sin\alpha
    $$

    and substituting the coordinate expressions for the four trigonometric terms gives

    $$
    \sin(\beta-\alpha)=\frac{u_1v_2-u_2v_1}{\|\mathbf u\|\,\|\mathbf v\|}.
    $$

    The denominator is nonzero, so the sine vanishes exactly when the numerator vanishes.

!!! theorem "Parallelism test"
    $$
    \boxed{\mathbf u\parallel\mathbf v\iff u_1v_2-u_2v_1=0}.
    $$

    Equivalently,

    $$
    \boxed{\mathbf u\parallel\mathbf v\iff \mathbf u=\lambda\mathbf v\text{ for some }\lambda\neq0}.
    $$

!!! proof "Why the determinant condition gives a scalar multiple"
    If $v_1\neq0$, set $\lambda=u_1/v_1$. The equality $u_1v_2-u_2v_1=0$ then gives $u_2=\lambda v_2$, hence $\mathbf u=\lambda\mathbf v$. If $v_1=0$, then $v_2\neq0$ and the same argument uses $\lambda=u_2/v_2$.

The quantity $u_1v_2-u_2v_1$ measures whether the two coordinate directions span genuine area. It is zero exactly when both vectors lie on one line.

### The cosine of the same difference reveals perpendicularity

!!! derivation "Perpendicularity from $\cos(\beta-\alpha)$"
    The vectors are perpendicular precisely when

    $$
    \beta-\alpha\equiv\frac\pi2\pmod\pi,
    $$

    equivalently when $\cos(\beta-\alpha)=0$. The identity

    $$
    \cos(\beta-\alpha)=\cos\beta\cos\alpha+\sin\beta\sin\alpha
    $$

    gives

    $$
    \cos(\beta-\alpha)=\frac{u_1v_1+u_2v_2}{\|\mathbf u\|\,\|\mathbf v\|}.
    $$

!!! definition "Dot product"
    For vectors in the plane,

    $$
    \boxed{\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2}.
    $$

    In three-dimensional space,

    $$
    \boxed{[u_1,u_2,u_3]\cdot[v_1,v_2,v_3]=u_1v_1+u_2v_2+u_3v_3}.
    $$

!!! theorem "Perpendicularity and angle"
    $$
    \boxed{\mathbf u\perp\mathbf v\iff\mathbf u\cdot\mathbf v=0}.
    $$

    More generally, if $\theta$ is the smaller angle between them,

    $$
    \boxed{\mathbf u\cdot\mathbf v=\|\mathbf u\|\,\|\mathbf v\|\cos\theta}.
    $$

The dot product is positive for an acute angle, zero for a right angle, and negative for an obtuse angle.

!!! example "Example"
    For $\mathbf u=[3,2]$ and $\mathbf v=[-2,3]$,

    $$
    \mathbf u\cdot\mathbf v=3(-2)+2(3)=0.
    $$

    Therefore $\cos\theta=0$, so the vectors are perpendicular.

!!! summary "Summary"
    The sine of the angle difference produces the parallelism test $u_1v_2-u_2v_1=0$. The cosine of the same difference produces the perpendicularity test $\mathbf u\cdot\mathbf v=0$. Neither rule is imposed arbitrarily; both are consequences of the geometry of angle.
