## Orthogonal projection {#projection}

Let $\mathbf v\neq\mathbf0$. We want to split $\mathbf u$ into a displacement parallel to $\mathbf v$ and a perpendicular remainder. A vector parallel to $\mathbf v$ has the form $\lambda\mathbf v$, so we seek $\lambda$ such that

$$
\mathbf u-\lambda\mathbf v\perp\mathbf v.
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Orthogonal projection</span><span class="figure-step-title" data-projection-readout>Move $\mathbf u$ and the direction $\mathbf v$.</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector projection figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-projection-board" class="jxgbox" data-vector-projection></div></div>
  <div class="relation-readout"><span data-projection-coefficient></span><span data-projection-vector></span><span data-projection-check></span></div>
  <figcaption class="figure-caption">The projection is the multiple of $\mathbf v$ whose remainder from $\mathbf u$ is perpendicular to $\mathbf v$.</figcaption>
</figure>

!!! derivation "The right-angle condition determines the coefficient"
    Write $\mathbf u=[u_1,u_2]$ and $\mathbf v=[v_1,v_2]$. Perpendicularity requires

    $$
    (\mathbf u-\lambda\mathbf v)\cdot\mathbf v=0.
    $$

    In coordinates this is

    $$
    (u_1-\lambda v_1)v_1+(u_2-\lambda v_2)v_2=0,
    $$

    hence

    $$
    \mathbf u\cdot\mathbf v-\lambda(\mathbf v\cdot\mathbf v)=0.
    $$

    Since $\mathbf v\neq\mathbf0$, we have $\mathbf v\cdot\mathbf v=\|\mathbf v\|^2>0$, so

    $$
    \lambda=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}.
    $$

!!! theorem "Projection formula"
    For $\mathbf v\neq\mathbf0$,

    $$
    \boxed{\operatorname{proj}_{\mathbf v}\mathbf u
      =\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\,\mathbf v}.
    $$

    This is not an independent rule: it is the unique multiple of $\mathbf v$ that leaves a perpendicular remainder.

!!! consequence "Orthogonal decomposition"
    Every vector $\mathbf u$ can be written as

    $$
    \boxed{
    \mathbf u
      =\operatorname{proj}_{\mathbf v}\mathbf u
      +\left(\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u\right)
    }.
    $$

    The first term is parallel to $\mathbf v$ and the second is perpendicular to $\mathbf v$. Therefore the Pythagorean theorem gives

    $$
    \boxed{
    \|\mathbf u\|^2
      =\left\|\operatorname{proj}_{\mathbf v}\mathbf u\right\|^2
      +\left\|\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u\right\|^2
    }.
    $$
