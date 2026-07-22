## Lines in the Cartesian plane {#line-construction}

A line should not first appear as a formula to be recognised. We already have all the ingredients needed to construct it geometrically: a point tells us where to begin, and a nonzero vector tells us in which direction motion is allowed.

> **Guiding question.** Which points can be reached from one fixed point by moving only in one fixed direction?

!!! definition "Data that determine a line"
    A line in the Cartesian plane is determined by one point $P_0$ on the line and one nonzero direction vector $\mathbf v$. Every point of the line is reached by adding a scalar multiple of $\mathbf v$ to $P_0$.

Let $P_0=(x_0,y_0)$ be fixed and let $\mathbf v=[u,v]\neq\mathbf0$. Every permitted displacement is $t\mathbf v$, so

$$
P=P_0+t\mathbf v,\qquad t\in\mathbb R.
$$

!!! definition "Parametric definition"
    $$
    \boxed{L=\{P_0+t\mathbf v:t\in\mathbb R\}}
    $$

    $$
    \boxed{x=x_0+tu,\qquad y=y_0+tv.}
    $$

<figure class="figure-panel jsx-panel" data-fullscreen-panel>
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Generating a line from one point and one direction</span>
      <span class="figure-step-title">Move $P_0$ and $P_0+\mathbf v$, then vary $t$ to generate points of the line.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open line generation figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="line-generation-board" class="jxgbox" data-line-generation></div></div>
  <div class="parameter-controls" style="--parameter-count:1">
    <label class="parameter-control">
      <span>$t$ = <output data-line-t-output>1</output></span>
      <input type="range" min="-3" max="3" step="0.1" value="1" data-line-t-slider>
    </label>
  </div>
  <div class="relation-readout"><span data-line-generation-readout></span></div>
  <figcaption class="figure-caption">The fixed point $P_0$ gives the starting location. The direction vector $\mathbf v$ gives the only permitted direction of motion. As $t$ ranges over all real numbers, $P_0+t\mathbf v$ traces the entire line.</figcaption>
</figure>

At $t=0$ we are at $P_0$; positive and negative values move in the two opposite orientations. Replacing $\mathbf v$ by a nonzero scalar multiple changes only how quickly the parameter traverses the points, not the geometric line.

### The same line described by a perpendicular direction

Choose a nonzero normal vector $\mathbf n=[a,b]$ perpendicular to $\mathbf v$. A point $P=(x,y)$ lies on the line precisely when $P-P_0$ is perpendicular to $\mathbf n$.

!!! derivation "From direction to normal form"
    $$
    \mathbf n\cdot(P-P_0)=0,
    $$

    $$
    a(x-x_0)+b(y-y_0)=0,
    $$

    $$
    \boxed{ax+by=c},\qquad c=ax_0+by_0.
    $$

The general linear equation is not a second definition. It records the same line by specifying a direction that no displacement along the line may contain.

### Slope form as a special coordinate description

!!! derivation "Eliminating the parameter"
    If $u\neq0$, then $t=(x-x_0)/u$. Substitution gives

    $$
    y-y_0=\frac vu(x-x_0),\qquad \boxed{m=\frac vu},
    $$

    and therefore $y=mx+b$ after collecting constants.

!!! note "Vertical case"
    If $u=0$, the line is vertical and is described by $x=x_0$. Parametric and normal forms need no exception; only slope notation fails.

!!! summary "Three forms, three questions"
    | Form | What it reveals |
    |---|---|
    | $P_0+t\mathbf v$ | how to move along the line |
    | $\mathbf n\cdot(P-P_0)=0$ | which displacements are allowed |
    | $y=mx+b$ | how vertical position depends on horizontal position |

    No representation is the line itself. The line is the geometric set identified by all of them.