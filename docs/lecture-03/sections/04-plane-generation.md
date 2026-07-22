## Planes in three-dimensional space {#plane-generation}

A line was produced by allowing one real parameter,

$$
P=P_0\oplus t\mathbf v.
$$

Only one independent direction of motion was available.

> **Guiding question.** What set is obtained when motion from one fixed point is allowed in two independent directions?

Let $P_0\in\mathcal P$ be a point in three-dimensional space and let $\mathbf u,\mathbf v\in V$ be nonparallel free vectors.

!!! derivation "Generating the plane"
    Every permitted displacement is a linear combination

    $$
    s\mathbf u+t\mathbf v\in V.
    $$

    Applying that free vector at $P_0$ gives the point

    $$
    \boxed{
    P=P_0\oplus(s\mathbf u+t\mathbf v).
    }
    $$

    One parameter produces a line; two independent parameters produce a plane. If the directions were parallel, every combination would still lie along one direction.

!!! definition "Parametric plane"
    $$
    \boxed{
    \Pi=\{P_0\oplus(s\mathbf u+t\mathbf v):s,t\in\mathbb R\}.
    }
    $$

    If $P_0=(x_0,y_0,z_0)$, $\mathbf u=[u_1,u_2,u_3]$, and $\mathbf v=[v_1,v_2,v_3]$, then

    $$
    \boxed{
    \begin{cases}
    x=x_0+su_1+tv_1,\\
    y=y_0+su_2+tv_2,\\
    z=z_0+su_3+tv_3.
    \end{cases}}
    $$

<figure class="figure-panel jsx-panel" data-fullscreen-panel>
  <div class="figure-toolbar"><div><span class="figure-title">Two independent directions generate a plane</span><span class="figure-step-title">Change the two vector coefficients and rotate the scene.</span></div><button class="icon-button" type="button" data-fullscreen>⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="plane-generation-board" class="jxgbox" data-plane-generation></div></div>
  <div class="parameter-controls" style="--parameter-count:2">
    <label class="parameter-control"><span>$s$ = <output data-plane-s>1</output></span><input type="range" min="-2" max="2" step="0.1" value="1" data-plane-s-slider></label>
    <label class="parameter-control"><span>$t$ = <output data-plane-t>1</output></span><input type="range" min="-2" max="2" step="0.1" value="1" data-plane-t-slider></label>
  </div>
  <figcaption class="figure-caption">The combination $s\mathbf u+t\mathbf v$ is a free displacement. The point $P_0\oplus(s\mathbf u+t\mathbf v)$ is obtained by applying that displacement at $P_0$.</figcaption>
</figure>