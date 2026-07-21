<section id="intersections-regions" class="section">
  <h2>Intersections and regions defined by conditions</h2>
  <p>Two equations impose two conditions. Points satisfying both equations are their intersection points. Replacing equations by inequalities selects whole regions of the plane.</p>

  <figure class="figure-panel jsx-panel regions-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar">
      <div>
        <span class="figure-title">Several conditions at once</span>
        <span class="equation-general" data-region-conditions>\(y\ge x^2-2\) and \(y\le x+2\)</span>
        <span class="figure-step-title" data-region-description>The shaded points lie above the parabola and below the line.</span>
      </div>
      <button class="icon-button" type="button" data-fullscreen aria-label="Open intersections and regions in full screen">⛶</button>
    </div>

    <div class="curve-switcher" role="group" aria-label="Choose an intersection or region example">
      <button class="curve-mode is-active" type="button" data-region-mode="parabola-line">Parabola and line</button>
      <button class="curve-mode" type="button" data-region-mode="absolute-lines">Three linear boundaries</button>
      <button class="curve-mode" type="button" data-region-mode="semidisk">Disk and half-plane</button>
    </div>

    <div class="figure-stage jsx-stage">
      <div id="regions-board" class="jxgbox" data-intersections-regions aria-label="Intersections of curves and regions satisfying inequalities"></div>
    </div>

    <figcaption class="figure-caption">Highlighted boundary points satisfy two equations simultaneously. Every shaded point satisfies all displayed inequalities.</figcaption>
  </figure>
</section>