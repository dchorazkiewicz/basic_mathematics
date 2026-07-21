## Scaling vectors and forming linear combinations {#scaling}

### Multiplication by a real number

A free vector is an instruction for changing position. Multiplying it by a real number changes the size of that displacement and, when the number is negative, reverses its orientation.

!!! definition "Scalar multiplication"
    For $\mathbf a=[a_1,a_2]$ and $t\in\mathbb R$,

    $$
    \boxed{t\mathbf a=[ta_1,ta_2]}.
    $$

If $t>0$, the displacement keeps its orientation and its length is multiplied by $t$:

$$
\|t\mathbf a\|=t\|\mathbf a\|.
$$

If $t<0$, the displacement points in the opposite orientation and

$$
\|t\mathbf a\|=|t|\,\|\mathbf a\|.
$$

For $t=0$, every vector is sent to the zero vector $\mathbf0=[0,0]$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Scaling one vector</span><span class="figure-step-title" data-scaling-readout>$2\mathbf u$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open scaling figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-scaling-board" class="jxgbox" data-vector-scaling></div></div>
  <div class="parameter-controls" style="--parameter-count:1">
    <label class="parameter-control"><span>$t$ = <output data-scale-t>2</output></span><input type="range" min="-3" max="3" step="0.25" value="2" data-scale-t-slider></label>
  </div>
  <figcaption class="figure-caption">The dashed arrow is $\mathbf u$; the solid arrow is $t\mathbf u$.</figcaption>
</figure>

Scalar multiplication is compatible with addition:

$$
\boxed{t(\mathbf a+\mathbf b)=t\mathbf a+t\mathbf b},
\qquad
\boxed{(s+t)\mathbf a=s\mathbf a+t\mathbf a}.
$$

These identities follow directly from coordinatewise arithmetic.

### Linear combinations of two vectors

Now choose two vectors $\mathbf u$ and $\mathbf v$. We want to describe the displacements obtained by assigning an independent coefficient to each direction and then adding the two resulting motions.

!!! definition "Linear combination"
    Given vectors $\mathbf u,\mathbf v$ and real numbers $a,b$, the vector

    $$
    \boxed{a\mathbf u+b\mathbf v}
    $$

    is called a linear combination of $\mathbf u$ and $\mathbf v$.

This is a separate two-vector construction: the coefficient $a$ controls the contribution of $\mathbf u$, while $b$ controls the contribution of $\mathbf v$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">A linear combination of two vectors</span><span class="figure-step-title" data-linear-combination-readout>$2\mathbf u-\mathbf v$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open linear combination figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="linear-combination-board" class="jxgbox" data-linear-combination></div></div>
  <div class="parameter-controls" style="--parameter-count:2">
    <label class="parameter-control"><span>$a$ = <output data-linear-a>2</output></span><input type="range" min="-3" max="3" step="0.25" value="2" data-linear-a-slider></label>
    <label class="parameter-control"><span>$b$ = <output data-linear-b>-1</output></span><input type="range" min="-3" max="3" step="0.25" value="-1" data-linear-b-slider></label>
  </div>
  <figcaption class="figure-caption">The two contributions $a\mathbf u$ and $b\mathbf v$ are placed head to tail; the dark arrow is their sum.</figcaption>
</figure>

!!! note "One direction versus two directions"
    A single nonzero vector generates only the line

    $$
    \{\lambda\mathbf v:\lambda\in\mathbb R\}.
    $$

    Two vectors lying on the same line still generate only that line. Two vectors with different directions provide two independent motions and can generate the whole plane.

!!! derivation "Why two independent directions reach the plane"
    If $\mathbf u$ and $\mathbf v$ lie on one line, every sum $a\mathbf u+b\mathbf v$ remains on that line. If their directions differ, the parallelogram construction decomposes any target displacement into one component along each direction. The coefficients record those two signed motions.

!!! theorem "Basis theorem in the plane"
    Two vectors with different directions determine every vector in the plane uniquely in the form

    $$
    \boxed{\mathbf w=a\mathbf u+b\mathbf v}.
    $$

    A basis is precisely such a pair of independent directions, and basis coordinates are the coefficients in this reconstruction.
