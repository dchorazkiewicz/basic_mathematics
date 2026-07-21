## Curves described by one parameter {#parametric-curves}

A parametric curve uses one number $t$ to produce both coordinates at once:

$$
t\longmapsto (x(t),y(t)).
$$

As $t$ changes, the point moves. The complete path traced by that moving point is the curve. A circle is therefore still one-dimensional: one parameter is enough to move around it.

<figure class="figure-panel jsx-panel parametric-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One parameter, one moving point</span>
      <span class="equation-general" data-parametric-form>$x(t)=3\cos t,\ y(t)=3\sin t$</span>
      <span class="figure-step-title" data-parametric-point>$t=0$, point $(3,0)$</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open parametric curve in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a parametric curve">
    <button class="curve-mode is-active" type="button" data-parametric-mode="circle">Circle</button>
    <button class="curve-mode" type="button" data-parametric-mode="ellipse">Ellipse</button>
    <button class="curve-mode" type="button" data-parametric-mode="parabola">Parabola</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="parametric-board" class="jxgbox" data-parametric-curves aria-label="Interactive parametric curves with a moving point"></div>
  </div>
  <label class="parameter-control single-parameter">
    <span>parameter $t$ = <output data-parametric-value>0.00</output></span>
    <input type="range" data-parametric-slider min="0" max="6.283" step="0.01" value="0" aria-label="Parameter t">
  </label>
  <figcaption class="figure-caption">Move $t$. The point changes both coordinates simultaneously and travels along the curve.</figcaption>
</figure>
