<section id="basis" class="section">
  <h2>One vector in a different basis</h2>

  <p>A vector does not change when we describe it in another basis. Only the numbers used to reconstruct it from the chosen basis vectors change. One numerical example is enough to see the mechanism.</p>

  <p>Let</p>
  <div class="display-math">$$\mathbf b_1=[1,1],\qquad \mathbf b_2=[1,-1]$$</div>
  <p>and consider</p>
  <div class="display-math">$$\mathbf v=[4,2].$$</div>
  <p>We seek numbers $\alpha$ and $\beta$ such that</p>
  <div class="display-math">$$\mathbf v=\alpha\mathbf b_1+\beta\mathbf b_2.$$</div>

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

  <div class="derivation">
    <p>Using the Cartesian coordinates of the basis vectors gives</p>
    <div class="display-math">$$\begin{aligned}[4,2]&=\alpha[1,1]+\beta[1,-1]\\&=[\alpha+\beta,\alpha-\beta].\end{aligned}$$</div>
    <p>Therefore</p>
    <div class="display-math">$$\alpha+\beta=4,\qquad \alpha-\beta=2.$$</div>
    <p>Solving this small system gives</p>
    <div class="display-math">$$\alpha=3,\qquad \beta=1.$$</div>
  </div>

  <p>Hence</p>
  <div class="display-math">$$\boxed{\mathbf v=3\mathbf b_1+\mathbf b_2}$$</div>
  <p>and the coordinates of the same vector in the basis $B=(\mathbf b_1,\mathbf b_2)$ are</p>
  <div class="display-math">$$\boxed{[\mathbf v]_B=[3,1]}. $$</div>

  <div class="statement">
    <div class="statement-label">What changes and what does not</div>
    <p>The Cartesian coordinates $[4,2]$ and the basis coordinates $[3,1]_B$ are two numerical descriptions of the same geometric vector. Changing the basis means solving for the coefficients in one concrete linear combination; no additional general machinery is introduced here.</p>
  </div>
</section>