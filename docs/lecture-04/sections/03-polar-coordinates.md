## Polar coordinates as coordinates adapted to a focus {#polar-coordinates}

### A point described by direction and distance

Choose a point $O$, called the pole, and a directed ray from $O$, called the polar axis. A point $P$ is described by

$$
\boxed{(r,\theta)},
$$

where $r$ is the distance from $O$ to $P$ and $\theta$ is the directed angle from the polar axis to the ray $OP$.

For this chapter we use $r\ge0$ and $0\le\theta<2\pi$. The pole is represented by $r=0$; its angle is geometrically irrelevant.

!!! interpretation "Why this is adapted to a focus"
    If the pole is placed at a focus, then the first coordinate $r$ is already the focal distance. No square root is needed to recover it from $x$ and $y$.

The coordinate curves also change character. The equation $\theta=\text{constant}$ is a ray, while $r=\text{constant}$ is a circle centred at the pole.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">Direction and distance</span><span class="figure-step-title" data-polar-readout>Move the point to compare $(r,\theta)$ with $(x,y)$.</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open polar coordinate figure in full screen">⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="polar-coordinate-board" class="jxgbox" data-polar-coordinate></div></div>
  <div class="relation-readout"><span data-polar-r></span><span data-polar-theta></span><span data-polar-xy></span></div>
  <figcaption class="figure-caption">The same point is described either by horizontal and vertical displacement or by direction and distance from the pole.</figcaption>
</figure>

### Converting between Cartesian and polar descriptions

The right triangle formed by the ray $OP$ gives

$$
\boxed{x=r\cos\theta,\qquad y=r\sin\theta}.
$$

Conversely,

$$
\boxed{r=\sqrt{x^2+y^2}}.
$$

The angle is determined by the direction of $(x,y)$; in computation this is the role of the two-argument function $\operatorname{atan2}(y,x)$.

!!! example "Example"
    For $(r,\theta)=(4,\pi/3)$,

    $$
    x=4\cos\frac\pi3=2,
    \qquad
    y=4\sin\frac\pi3=2\sqrt3.
    $$

    Thus the same point has Cartesian coordinates $(2,2\sqrt3)$.

!!! principle "Coordinates are descriptions, not objects"
    Changing from $(x,y)$ to $(r,\theta)$ does not move the point. Cartesian coordinates expose horizontal and vertical displacement; polar coordinates expose direction and distance from a chosen point.
