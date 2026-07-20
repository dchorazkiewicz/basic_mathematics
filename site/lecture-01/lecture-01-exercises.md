# Lecture 1 — Cartesian Geometry and Coordinates

## A. Technical and computational practice

1. Plot the points
   \[
   A=(-3,2),\quad B=(4,-1),\quad C=(0,5),\quad D=(-2,-4).
   \]
   State the quadrant of each point that does not lie on an axis.

2. For
   \[
   P=(-2,3),\qquad Q=(4,-5),
   \]
   compute the horizontal difference, the vertical difference and the Euclidean distance \(d_E(P,Q)\).

3. For the function
   \[
   y=2x+1,
   \]
   calculate \(y\) for \(x=-3,-1,0,2,4\), and write the five corresponding points of its graph.

4. For the inverse proportionality
   \[
   y=\frac{6}{x},
   \]
   calculate the points corresponding to \(x=-6,-3,-1,1,2,6\). Indicate which inputs are not allowed.

5. The circle
   \[
   x^2+y^2=25
   \]
   is intersected by the vertical lines \(x=0\), \(x=3\), \(x=5\) and \(x=6\). For each line, find all real values of \(y\) and state how many intersection points occur.

6. Decide whether each point lies inside, on, or outside the disk
   \[
   x^2+y^2\le 16:
   \]
   \[
   (0,0),\quad (4,0),\quad (2,3),\quad (-1,4),\quad (5,-2).
   \]

7. A circle is parametrized by
   \[
   x(t)=3\cos t,\qquad y(t)=3\sin t.
   \]
   Compute the point for
   \[
   t=0,\quad \frac{\pi}{2},\quad \pi,\quad \frac{3\pi}{2},\quad 2\pi.
   \]

8. For the parametric parabola
   \[
   x(t)=t,\qquad y(t)=t^2-2,
   \]
   compute the points corresponding to \(t=-2,-1,0,1,2\). Verify directly that every computed point satisfies \(y=x^2-2\).

9. Find all intersection points of
   \[
   y=x^2-2
   \]
   and
   \[
   y=x+2.
   \]
   Give exact coordinates and decimal approximations.

10. For each point below, decide whether it belongs to the region
    \[
    y\ge x^2-2,
    \qquad
    y\le x+2:
    \]
    \[
    (0,0),\quad (0,3),\quad (2,3),\quad (-2,0),\quad (1,2).
    \]

## B. Problems requiring explanation and argument

11. A Cartesian coordinate system requires an origin, two perpendicular axes, positive directions and a unit length. Explain what information is lost if any one of these choices is omitted. Give a concrete example in each case.

12. Prove directly from the coordinate formula that
    \[
    d_E(P,Q)=d_E(Q,P).
    \]
    Then show that translating both points by the same vector does not change their distance.

13. The equation
    \[
    x^2+y^2=9
    \]
    does not define \(y\) as a function of \(x\) on the whole circle. Explain why. Find two natural restrictions of the circle that do define functions and write their formulas.

14. Consider
    \[
    y=\frac{4}{x}.
    \]
    Explain, without drawing a complete table of values, why its graph has two branches, why it never meets either coordinate axis, and why it is symmetric with respect to the origin.

15. The parametrization
    \[
    x(t)=3\cos t,\qquad y(t)=3\sin t
    \]
    uses one real parameter to describe a circle. Explain why this shows that the circle is a one-dimensional object even though it lies in a two-dimensional plane. Is the parameter value associated with a point unique? Justify your answer.

16. Let
    \[
    P=(p_1,p_2),\qquad Q=(q_1,q_2).
    \]
    Construct a parametrization of the line segment from \(P\) to \(Q\) using a parameter \(t\in[0,1]\). Explain why the endpoints occur at \(t=0\) and \(t=1\), and why every intermediate value gives a point on the segment.

17. Determine exactly for which values of \(x\) there exist points satisfying both
    \[
    y\ge x^2-2
    \]
    and
    \[
    y\le x+2.
    \]
    Use the boundary intersections to justify your answer, and explain why the resulting region is bounded.

18. For which values of \(m\) and \(b\) does the line
    \[
    y=mx+b
    \]
    meet the parabola
    \[
    y=x^2
    \]
    in exactly one point? Derive a condition on \(m\) and \(b\), and interpret the result geometrically.

19. A circle has centre \((h,k)\) and radius \(r>0\). Starting from the distance formula, derive its equation
    \[
    (x-h)^2+(y-k)^2=r^2.
    \]
    Explain why replacing equality by \(\le\) produces the entire disk.

20. Consider the two regions
    \[
    A=\{(x,y):x^2+y^2\le 9,\ y\ge0\}
    \]
    and
    \[
    B=\{(x,y):y\ge x^2-2,\ y\le x+2\}.
    \]
    For each region, explain which curves form its boundary and which boundary points satisfy two equations simultaneously. Then decide whether the region appears convex and justify your conclusion geometrically or algebraically.
