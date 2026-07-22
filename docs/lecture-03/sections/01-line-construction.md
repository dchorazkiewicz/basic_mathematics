## Lines in the Cartesian plane {#line-construction}

A line should not first appear as a formula to be recognised. We already have all the ingredients needed to construct it geometrically: a point tells us where to begin, and a nonzero free vector tells us in which direction motion is allowed.

The two bridge operations from Lecture 2 will be used throughout this chapter:

$$
[Q-P]\in V
$$

is the free vector determined by two points, while

$$
P\oplus\mathbf v\in\mathcal P
$$

is the point obtained by applying the free vector $\mathbf v$ at $P$. Thus scalar multiples and sums are formed inside the vector space first, and only then applied to a point by $\oplus$.

> **Guiding question.** Which points can be reached from one fixed point by moving only in one fixed direction?

!!! definition "Data that determine a line"
    A line in the Cartesian plane is determined by one point $P_0$ on the line and one nonzero direction vector $\mathbf v$. Every point of the line is reached by applying a scalar multiple of $\mathbf v$ at $P_0$.

Let $P_0=(x_0,y_0)$ be fixed and let $\mathbf v=[u,v]\neq\mathbf0$. Every permitted displacement is the free vector $t\mathbf v$, so the corresponding point is

$$
\boxed{P=P_0\oplus t\mathbf v},
\qquad t\in\mathbb R.
$$

The types are explicit:

$$
t\mathbf v\in V,
\qquad
P_0\oplus t\mathbf v\in\mathcal P.
$$

!!! definition "Parametric definition"
    $$
    \boxed{L=\{P_0\oplus t\mathbf v:t\in\mathbb R\}}.
    $$

    In coordinates,

    $$
    \boxed{x=x_0+tu,\qquad y=y_0+tv.}
    $$

<figure class="figure-panel jsx-panel" data-fullscreen-panel>
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Generating a line from one point and one direction</span>
      <span class="figure-step-title">Move $P_0$ and $P_0\oplus\mathbf v$, then vary $t$ to generate points of the line.</span>
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
  <figcaption class="figure-caption">The vector $t\mathbf v$ is formed first. Applying it to $P_0$ by $\oplus$ produces the point $P(t)=P_0\oplus t\mathbf v$.</figcaption>
</figure>

At $t=0$ we obtain

$$
P_0\oplus\mathbf0=P_0.
$$

Positive and negative values move in the two opposite orientations. Replacing $\mathbf v$ by a nonzero scalar multiple changes only the parametrisation, not the geometric line.

### The same line described by a perpendicular direction

Choose a nonzero normal vector $\mathbf n=[a,b]$ perpendicular to $\mathbf v$. For a variable point $P=(x,y)$, the expression

$$
[P-P_0]
$$

is the free displacement from $P_0$ to $P$. The point $P$ lies on the line precisely when that displacement is perpendicular to $\mathbf n$.

!!! derivation "From direction to normal form"
    Since both factors are free vectors,

    $$
    \mathbf n\cdot[P-P_0]=0
    $$

    is a scalar equation. In coordinates,

    $$
    [P-P_0]=[x-x_0,\,y-y_0],
    $$

    so

    $$
    a(x-x_0)+b(y-y_0)=0,
    $$

    and therefore

    $$
    \boxed{ax+by=c},\qquad c=ax_0+by_0.
    $$

The general linear equation is not a second definition. It records the same line by requiring the normal component of the displacement $[P-P_0]$ to vanish.

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
    | $P_0\oplus t\mathbf v$ | how a permitted vector displacement produces a point of the line |
    | $\mathbf n\cdot[P-P_0]=0$ | which point displacements are allowed |
    | $y=mx+b$ | how vertical position depends on horizontal position |

    No representation is the line itself. The line is the geometric set identified by all three.