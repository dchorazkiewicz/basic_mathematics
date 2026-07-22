## Constructing the Cartesian system {#construction}

The sequence below distinguishes permanent objects from temporary construction aids. Compass circles and bisectors disappear after they have produced the required mark. Open the figure full screen during a lecture and move through the construction one step at a time.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Construction sequence · Cartesian plane</span>
      <span class="figure-step-title" data-step-title>Euclidean plane</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="cartesian-board" class="jxgbox" data-cartesian-construction aria-label="Interactive construction of a Cartesian coordinate system"></div>
  </div>
  <div class="sequence-controls">
    <button class="control-button" type="button" data-previous>Previous</button>
    <button class="control-button" type="button" data-next>Next</button>
    <button class="control-button" type="button" data-play>Play</button>
    <button class="control-button" type="button" data-reset>Reset</button>
    <span class="sequence-status" data-status></span>
  </div>
  <figcaption class="figure-caption">Temporary construction objects are removed after each operation. The final coordinate system retains only the axes, origin, orientations and scale.</figcaption>
</figure>

!!! principle "Construction principle"
    The scale is not drawn at once. A fixed compass opening is transferred successively along each axis. The interval is then refined by geometric bisection before coordinates are assigned by orthogonal projection.

??? note "Construction steps"
    - Begin with the Euclidean plane.
    - Choose two points.
    - Construct the first straight line through them.
    - Choose the origin $O$ on the line.
    - Construct the perpendicular axis through $O$.
    - Choose the positive directions.
    - Choose the unit segment $OU$.
    - Set the compass to $OU$ and draw the circle centred at $O$.
    - Keep only the four marks $\pm 1$.
    - Use the mark $+1$ as the next compass centre.
    - Keep the newly constructed mark $+2$.
    - Repeat from $+2$.
    - Keep the newly constructed mark $+3$.
    - Repeat from $-1$ in the negative direction.
    - Keep the newly constructed mark $-2$.
    - Repeat from $+1$ on the vertical axis.
    - Keep the newly constructed vertical mark $+2$.
    - Repeat from $-1$ on the vertical axis.
    - Keep the newly constructed vertical mark $-2$.
    - Focus on the unit interval $[0,1]$.
    - Construct the midpoint.
    - Remove the helpers and keep $1/2$.
    - Bisect both half-intervals.
    - Remove the helpers and keep the quarter marks.
    - Repeat once more to obtain eighth marks.
    - Continue the same process to obtain arbitrarily fine dyadic marks.
    - Return to the completed coordinate axes.
    - Choose an arbitrary point $P$.
    - Project $P$ orthogonally onto both axes.
    - Reveal a light auxiliary grid.
    - Read the ordered pair $(x,y)$.
