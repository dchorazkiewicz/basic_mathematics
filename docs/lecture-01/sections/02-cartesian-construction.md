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
    1. **Begin with the Euclidean plane.**  
       At this stage there are no coordinates, axes or numbers. We have only the geometric plane and the constructions available in Euclidean geometry.

    2. **Choose two distinct points.**  
       Two distinct points determine a unique straight line. They provide the initial data from which the first axis will be constructed.

    3. **Construct the first straight line through them.**  
       This line will become the horizontal axis. For the moment it has no origin, orientation or numerical scale.

    4. **Choose the origin $O$ on the line.**  
       The origin separates the line into two half-lines and gives the reference point to which the coordinate $0$ will be assigned.

    5. **Construct the perpendicular axis through $O$.**  
       The perpendicular line supplies a second independent direction. The two axes now meet at a right angle and determine the basic Cartesian frame.

    6. **Choose the positive directions.**  
       Each axis has two possible orientations. Selecting one positive direction on each axis makes signed coordinates possible and distinguishes positive numbers from negative ones.

    7. **Choose the unit segment $OU$.**  
       The length of $OU$ is declared to be one unit. This is the common scale used on both axes, so the same geometric length represents the number $1$ horizontally and vertically.

    8. **Set the compass to $OU$ and draw the circle centred at $O$.**  
       The circle transfers the chosen unit length in every direction from the origin. Its intersections with the axes locate the four points at distance one from $O$.

    9. **Keep only the four marks $\pm1$.**  
       The circle is only a construction aid and may now be removed. The remaining marks establish the first positive and negative unit positions on both axes.

    10. **Use the mark $+1$ as the next compass centre.**  
        Keeping the same compass opening transfers one further unit along the positive horizontal direction. No new length is chosen: the original unit is being repeated.

    11. **Keep the newly constructed mark $+2$.**  
        The new intersection lies two unit lengths from the origin. After the auxiliary circle is removed, the mark records the number $2$ on the horizontal axis.

    12. **Repeat from $+2$.**  
        The same fixed compass opening is transferred once more. This shows that the integer scale is constructed by repeated addition of the unit length.

    13. **Keep the newly constructed mark $+3$.**  
        The new point is three unit lengths from $O$. The positive integer marks are therefore generated successively rather than placed arbitrarily.

    14. **Repeat from $-1$ in the negative direction.**  
        The unit length is now transferred to the opposite side of the origin. Orientation determines that these positions receive negative rather than positive labels.

    15. **Keep the newly constructed mark $-2$.**  
        This point lies two unit lengths from $O$ in the negative horizontal direction. The scale is symmetric in distance, but its signs depend on the chosen orientation.

    16. **Repeat from $+1$ on the vertical axis.**  
        The same unit is transferred along the positive vertical direction. Using one common unit makes horizontal and vertical measurements directly comparable.

    17. **Keep the newly constructed vertical mark $+2$.**  
        The point is two units above the origin according to the selected orientation. The vertical axis now carries the same numerical scale as the horizontal axis.

    18. **Repeat from $-1$ on the vertical axis.**  
        The construction is mirrored below the origin. Again, the distance is positive as a length, while the coordinate is negative because of orientation.

    19. **Keep the newly constructed vertical mark $-2$.**  
        We now have integer marks in both directions on both axes. Further integers can be obtained by continuing exactly the same transfer process.

    20. **Focus on the unit interval $[0,1]$.**  
        Integer marks alone do not yet provide a sufficiently fine scale. We isolate one unit interval because subdivisions constructed there can be reproduced throughout the axes.

    21. **Construct the midpoint.**  
        The perpendicular bisector of the unit segment identifies the point equidistant from $0$ and $1$. This point divides the unit interval into two equal parts.

    22. **Remove the helpers and keep $1/2$.**  
        The circles and bisector used in the construction are temporary. The surviving mark represents the number $\tfrac12$ because it lies halfway between $0$ and $1$.

    23. **Bisect both half-intervals.**  
        Applying the same midpoint construction to $[0,\tfrac12]$ and $[\tfrac12,1]$ divides the unit into four equal parts.

    24. **Remove the helpers and keep the quarter marks.**  
        The permanent marks are $\tfrac14$, $\tfrac12$ and $\tfrac34$. They show how rational positions arise from repeated geometric subdivision.

    25. **Repeat once more to obtain eighth marks.**  
        Bisecting each quarter produces intervals of length $\tfrac18$. The scale becomes finer without changing either the origin or the original unit.

    26. **Continue the same process to obtain arbitrarily fine dyadic marks.**  
        Repeated bisection produces numbers of the form $k/2^n$. These marks illustrate how the numerical scale can be refined as closely as needed.

    27. **Return to the completed coordinate axes.**  
        The axes now have an origin, positive directions and a common subdivided scale. These choices turn each axis into a copy of the real number line.

    28. **Choose an arbitrary point $P$ in the plane.**  
        The point need not lie on either axis. Our next task is to describe its position using the numerical structures already constructed on the axes.

    29. **Project $P$ orthogonally onto both axes.**  
        The perpendicular projections identify one number on the horizontal axis and one number on the vertical axis. These numbers measure the signed horizontal and vertical positions of $P$.

    30. **Reveal a light auxiliary grid.**  
        The grid is not needed to define the coordinates and is not part of the construction itself. It is added only as a visual guide: it helps the eye follow the horizontal and vertical projections back to the axes and makes a quick estimate of the point's position easier before the exact coordinate values are read.

    31. **Read the ordered pair $(x,y)$.**  
        The horizontal projection gives the first coordinate $x$, and the vertical projection gives the second coordinate $y$. Thus the completed construction assigns to $P$ the ordered pair $(x,y)$.
