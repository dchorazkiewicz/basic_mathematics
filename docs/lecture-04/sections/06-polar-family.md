<section id="polar-family" class="section">
  <h2>Ellipse, parabola, and hyperbola from one formula</h2>
  <figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar"><div><span class="figure-title">One radial law, three conic regimes</span><span class="figure-step-title" data-conic-family-readout>$r=p/(1+e\cos\theta)$</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open polar conic family in full screen">⛶</button></div>
    <div class="figure-stage jsx-stage"><div id="polar-conic-family-board" class="jxgbox" data-polar-conic-family></div></div>
    <div class="parameter-controls" style="--parameter-count:2"><label class="parameter-control"><span>$p$ = <output data-conic-p>2.4</output></span><input type="range" min="0.5" max="4" step="0.1" value="2.4" data-conic-p-slider></label><label class="parameter-control"><span>$e$ = <output data-conic-e>0.6</output></span><input type="range" min="0" max="2" step="0.02" value="0.6" data-conic-e-slider></label></div>
    <figcaption class="figure-caption">The focal scale $p$ changes size. The eccentricity $e$ changes the type and shape.</figcaption>
  </figure>

  <h3>Ellipse from the polar formula</h3>
  <p>Assume $0<e<1$. Then</p><div class="display-math">$$1-e\le1+e\cos\theta\le1+e,$$</div><p>so the denominator is positive for every angle. The radius is finite in every direction and the curve closes around the focus.</p>
  <p>The nearest and farthest points occur at $\theta=0$ and $\theta=\pi$:</p><div class="display-math">$$\boxed{r_{\min}=\frac{p}{1+e}},\qquad \boxed{r_{\max}=\frac{p}{1-e}}.$$</div><p>Thus increasing $e$ makes the two extreme focal distances more unequal.</p>
  <p>For a Cartesian ellipse with semimajor axis $a$ and semiminor axis $b$,</p><div class="display-math">$$e=\sqrt{1-\frac{b^2}{a^2}},\qquad p=a(1-e^2)=\frac{b^2}{a}.$$</div><p>Therefore</p><div class="display-math">$$\boxed{r(\theta)=\frac{a(1-e^2)}{1+e\cos\theta}}.$$</div>
  <div class="statement"><div class="statement-label">Why the focus-centred form matters</div><p>The Cartesian equation displays the centre and semiaxes. The polar equation displays the distance from a focus as the direction changes.</p></div>

  <h3>Parabola from the polar formula</h3>
  <p>Set $e=1$. Then</p><div class="display-math">$$\boxed{r(\theta)=\frac{p}{1+\cos\theta}}.$$</div><p>For directions near $\theta=\pi$, the denominator approaches zero and the radius grows without bound. This is the geometric reason the curve is open.</p>
  <p>Using $1+\cos\theta=2\cos^2(\theta/2)$,</p><div class="display-math">$$r=\frac{p}{2\cos^2(\theta/2)}.$$</div><p>The vertex lies on the positive polar axis at</p><div class="display-math">$$\boxed{r=\frac p2}.$$</div>
  <div class="statement"><div class="statement-label">The exact transition</div><p>For an ellipse, the denominator stays away from zero. At $e=1$ it reaches zero in one limiting direction. The closed orbit has opened into a parabola.</p></div>

  <h3>Hyperbola from the polar formula</h3>
  <p>Assume $e>1$. The denominator $1+e\cos\theta$ vanishes at two angles satisfying</p><div class="display-math">$$\cos\theta=-\frac1e.$$</div><p>These limiting directions are the asymptotic directions of the branch described from the chosen focus.</p>
  <p>For $r\ge0$,</p><div class="display-math">$$\boxed{r=\frac{p}{1+e\cos\theta}}$$</div><p>traces the branch lying on the same side of the directrix as the chosen focus. It does not silently represent the entire two-branch hyperbola.</p>
  <p>To recover the complete hyperbola, return to the two-focus geometry or use</p><div class="display-math">$$\boxed{\frac{x^2}{a^2}-\frac{y^2}{b^2}=1},$$</div><p>which displays both branches at once.</p>
  <div class="statement"><div class="statement-label">Why the polar and Cartesian pictures differ</div><p>The polar equation is adapted to one chosen focus and one directrix. The Cartesian equation is adapted to the centre and displays both branches symmetrically. Neither description is incomplete when its viewpoint is stated correctly.</p></div>
</section>