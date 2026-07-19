# Euclidean Reference for Self-Study

This material preserves the geometric background behind the Cartesian construction. It makes the chapter self-contained, but it is not intended to occupy the same lecture time as coordinates, graphs and intersections.

## Three different levels must not be confused

!!! abstract "The logical hierarchy"

    1. **Euclid's postulates** describe the geometric world being assumed.
    2. **Straightedge-and-compass rules** describe which elementary drawings and intersections may be used.
    3. **Derived constructions** must be built from those elementary operations and justified by proof.

## Euclid's five postulates

1. A straight segment can be drawn from any point to any other point.
2. A finite straight segment can be extended continuously in the same straight line.
3. A circle can be drawn with any chosen centre and any chosen radius.
4. All right angles are congruent.
5. If a transversal meets two lines and the interior angles on one side sum to less than two right angles, then the two lines meet on that side when extended.

!!! note "Modern working form of the fifth postulate"

    Through a point outside a given line there passes exactly one parallel to that line.

## Elementary rules for straightedge-and-compass work

1. Through two already constructed distinct points, draw the straight line.
2. With an already constructed point as centre and an already constructed segment as radius, draw a circle.
3. Retain intersection points of two constructed lines, a line and a circle, or two circles whenever they exist.

## The perpendicular bisector and midpoint

Let $A$ and $B$ be distinct points. Draw two circles of equal radius, one centred at $A$ and one centred at $B$, with radius greater than half of $|AB|$. Let their intersections be $P$ and $Q$.

Because $P$ and $Q$ lie on both circles,

$$
|PA|=|PB|,
\qquad
|QA|=|QB|.
$$

<div class="math-figure"><svg viewBox="0 0 700 430" role="img" aria-label="Perpendicular bisector construction"><circle cx="220" cy="215" r="190" class="fig-helper"/><circle cx="480" cy="215" r="190" class="fig-helper"/><line x1="220" y1="215" x2="480" y2="215" class="fig-axis"/><line x1="350" y1="35" x2="350" y2="395" class="fig-main"/><circle cx="220" cy="215" r="5" class="fig-dot"/><circle cx="480" cy="215" r="5" class="fig-dot"/><circle cx="350" cy="75" r="5" class="fig-dot"/><circle cx="350" cy="355" r="5" class="fig-dot"/><text x="205" y="245" class="fig-label">A</text><text x="490" y="245" class="fig-label">B</text><text x="360" y="65" class="fig-label">P</text><text x="360" y="382" class="fig-label">Q</text></svg></div>

!!! theorem "Perpendicular-bisector construction"

    The line $PQ$ is the perpendicular bisector of $AB$. Its intersection with $AB$ is the midpoint of $AB$.

## Perpendiculars and parallels

A perpendicular through a point on a line is obtained by first marking two points equidistant from the prescribed point and then constructing their perpendicular bisector. A perpendicular through an external point is obtained by intersecting the line with a circle centred at that point and again constructing a perpendicular bisector.

A parallel through an external point is constructed by drawing a perpendicular to the original line and then a second perpendicular through the prescribed point.

## Parallel lines and proportional segments

Let $D$ lie on $AB$ and $E$ lie on $AC$ in triangle $ABC$. If $DE\parallel BC$, then

!!! theorem "Thales' theorem"

    $$
    \boxed{\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}}.
    $$

Two triangles are **similar** when corresponding angles are equal. Their corresponding side lengths are proportional.

## Sine and cosine before coordinates

Take a right triangle containing an acute angle $\alpha$. Let $h$ be the hypotenuse, $a$ the adjacent leg and $b$ the opposite leg.

!!! definition "Trigonometric ratios"

    $$
    \boxed{\cos\alpha=\frac{a}{h},\qquad \sin\alpha=\frac{b}{h}}.
    $$

All right triangles containing the same acute angle are similar, so these ratios depend on the angle, not on the size of the triangle.

From $a^2+b^2=h^2$, division by $h^2$ gives

!!! theorem "Fundamental identity"

    $$
    \boxed{\cos^2\alpha+\sin^2\alpha=1}.
    $$

## Angles and their numerical measure

An angle exists geometrically before it is assigned a number. We may compare, copy, add and bisect angles without degrees or radians.

!!! definition "Radian measure"

    If an arc of length $s$ is cut from a circle of radius $r$ by the rays of an angle $\alpha$, then

    $$
    \boxed{m_{\mathrm{rad}}(\alpha)=\frac{s}{r}}.
    $$

Because every circle has circumference $2\pi r$, a full turn has measure $2\pi$, a half-turn has measure $\pi$ and a right angle has measure $\pi/2$.

Degrees provide another scale:

$$
2\pi\text{ radians}=360^\circ,
\qquad
m_{\deg}(\alpha)=\frac{180^\circ}{\pi}m_{\mathrm{rad}}(\alpha).
$$

## The Euclidean law of cosines

If $\alpha=\angle AOB$, then

!!! theorem "Law of cosines"

    $$
    \boxed{|AB|^2=|OA|^2+|OB|^2-2|OA|\,|OB|\cos\alpha}.
    $$

Solving for the angle measure gives

$$
m_{\mathrm{rad}}(\alpha)=
\arccos\left(
\frac{|OA|^2+|OB|^2-|AB|^2}{2|OA|\,|OB|}
\right).
$$

At this point no vector has been introduced. We have only Euclidean objects, constructions, similarity, trigonometric ratios, numerical angle measure and the law of cosines.
