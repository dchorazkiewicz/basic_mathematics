<section id="polar-graphs" class="section">
  <h2>Reading a polar equation as a radial instruction</h2>
  <p>A polar equation $r=f(\theta)$ should be read operationally: choose a direction $\theta$, then travel the prescribed distance $r$ from the pole.</p>
  <p>The simplest example is</p><div class="display-math">$$\boxed{r=R},$$</div><p>which gives the circle of radius $R$ centred at the pole.</p>
  <p>A more revealing example is</p><div class="display-math">$$\boxed{r=2R\cos\theta}.$$</div>
  <div class="derivation"><h3>Converting the radial instruction</h3><p>Using $x=r\cos\theta$ and $r^2=x^2+y^2$,</p><div class="display-math">$$r^2=2Rr\cos\theta\quad\Longrightarrow\quad x^2+y^2=2Rx,$$</div><p>so</p><div class="display-math">$$\boxed{(x-R)^2+y^2=R^2}.$$</div><p>The same curve is therefore a circle centred at $(R,0)$ and passing through the pole.</p></div>
  <figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar"><div><span class="figure-title">A radial law draws a curve</span><span class="figure-step-title" data-polar-graph-readout>$r=2R\cos\theta$</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open polar graph figure in full screen">⛶</button></div>
    <div class="figure-stage jsx-stage"><div id="polar-graph-board" class="jxgbox" data-polar-graph></div></div>
    <label class="parameter-control"><span>$\theta$ = <output data-polar-angle>0.8</output></span><input type="range" min="0" max="6.283" step="0.01" value="0.8" data-polar-angle-slider></label>
    <figcaption class="figure-caption">As the ray turns, the factor $\cos\theta$ changes the permitted radial distance.</figcaption>
  </figure>
  <div class="statement"><div class="statement-label">What the equation is doing</div><p>The factor $\cos\theta$ shortens the permitted radial distance as the ray turns away from the positive axis. At $\theta=\pi/2$ the distance becomes zero, so the curve returns to the pole. A Cartesian equation hides this directional story; the polar equation displays it directly.</p></div>
  <p>This way of reading a formula prepares the conic equation. The next question is whether one radial law can generate ellipse, parabola, and hyperbola by changing only one parameter.</p>
</section>