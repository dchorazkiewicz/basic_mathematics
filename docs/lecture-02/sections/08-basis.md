## One vector in a different basis {#basis}

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