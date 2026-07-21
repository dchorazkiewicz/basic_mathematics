## Why curves of second degree appear {#why-conics}

The previous chapter used first-degree equations to describe lines and planes. A new phenomenon appears when the defining condition contains Euclidean distance: squares enter automatically.

!!! question "The question of this chapter"
    Can one choose coordinates so that the geometry of circles, ellipses, parabolas, and hyperbolas becomes visible rather than hidden inside algebra?

We begin with the familiar Cartesian pictures. They provide a reference point, not the final language. The real goal is to place the origin at a focus and ask for the distance to the curve in each direction.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">Four classical conics</span><span class="figure-step-title">Circle, ellipse, parabola, and the complete two-branch hyperbola.</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open conic overview in full screen">⛶</button></div>
  <div class="curve-switcher" role="group" aria-label="Choose a conic"><button class="curve-mode is-active" type="button" data-classical-mode="circle">Circle</button><button class="curve-mode" type="button" data-classical-mode="ellipse">Ellipse</button><button class="curve-mode" type="button" data-classical-mode="parabola">Parabola</button><button class="curve-mode" type="button" data-classical-mode="hyperbola">Hyperbola</button></div>
  <div class="figure-stage jsx-stage"><div id="classical-conics-board" class="jxgbox" data-classical-conics></div></div>
  <figcaption class="figure-caption">The Cartesian pictures are the starting point. Later the pole will be moved to a focus.</figcaption>
</figure>

!!! summary "A map of the argument"
    First identify the four shapes in Cartesian coordinates. Then construct polar coordinates. Finally one focus–directrix condition produces one polar formula whose parameter decides which conic appears.
