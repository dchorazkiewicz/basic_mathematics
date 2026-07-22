## Linear combinations and change of basis {#basis}

### Linear combinations of two vectors

Choose two vectors $\mathbf u$ and $\mathbf v$. We want to describe the displacements obtained by assigning an independent coefficient to each direction and then adding the two resulting motions.

!!! definition "Linear combination"
    Given vectors $\mathbf u,\mathbf v$ and real numbers $a,b$, the vector

    $$
    \boxed{a\mathbf u+b\mathbf v}
    $$

    is called a linear combination of $\mathbf u$ and $\mathbf v$.

The coefficient $a$ controls the contribution of $\mathbf u$, while $b$ controls the contribution of $\mathbf v$.

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

### One vector in a different basis

A vector does not change when we describe it in another basis. Only the numbers used to reconstruct it from the chosen basis vectors change. One numerical example is enough to see the mechanism.

Let

$$
\mathbf b_1=[1,1],\qquad \mathbf b_2=[1,-1]
$$

and consider

$$
\mathbf v=[4,2].
$$

We seek numbers $\alpha$ and $\beta$ such that

$$
\mathbf v=\alpha\mathbf b_1+\beta\mathbf b_2.
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">The same vector, two numerical descriptions</span><span class="figure-step-title" data-basis-readout>$\mathbf v=3\mathbf b_1+\mathbf b_2$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open change of basis figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-basis-board" class="jxgbox" data-vector-basis></div></div>
  <div class="parameter-controls" style="--parameter-count:2">
    <label class="parameter-control"><span>$\alpha$ = <output data-basis-alpha>3</output></span><input type="range" min="-3" max="4" step="0.25" value="3" data-basis-alpha-slider></label>
    <label class="parameter-control"><span>$\beta$ = <output data-basis-beta>1</output></span><input type="range" min="-3" max="4" step="0.25" value="1" data-basis-beta-slider></label>
  </div>
  <figcaption class="figure-caption">The sliders show how the same vector is reconstructed from the two chosen basis directions.</figcaption>
</figure>

!!! derivation "Solving for the basis coordinates"
    Using the Cartesian coordinates of the basis vectors gives

    $$
    \begin{aligned}
    [4,2]
      &=\alpha[1,1]+\beta[1,-1]\\
      &=[\alpha+\beta,\alpha-\beta].
    \end{aligned}
    $$

    Therefore

    $$
    \alpha+\beta=4,
    \qquad
    \alpha-\beta=2.
    $$

    Solving this small system gives

    $$
    \alpha=3,
    \qquad
    \beta=1.
    $$

Hence

$$
\boxed{\mathbf v=3\mathbf b_1+\mathbf b_2}
$$

and the coordinates of the same vector in the basis $B=(\mathbf b_1,\mathbf b_2)$ are

$$
\boxed{[\mathbf v]_B=[3,1]}.
$$

!!! interpretation "What changes and what does not"
    The Cartesian coordinates $[4,2]$ and the basis coordinates $[3,1]_B$ are two numerical descriptions of the same geometric vector. Changing the basis means solving for the coefficients in one concrete linear combination; no additional general machinery is introduced here.