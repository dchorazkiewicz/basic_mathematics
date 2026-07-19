# Constructing and Using Cartesian Coordinates

The preceding section established the Euclidean objects and constructions available before coordinates. We now make the additional choices that turn that plane into a Cartesian coordinate plane: axes, an origin, directions and a common numerical scale.

## The plane before coordinates

We begin with an ordinary Euclidean plane: a set of points in which we may construct lines and circles.

<div class="math-figure"><svg viewBox="0 0 760 330" role="img" aria-label="A Euclidean plane with points"><rect x="55" y="35" width="650" height="230" rx="12" fill="currentColor" opacity=".035"/><g class="fig-dot"><circle cx="130" cy="100" r="4"/><circle cx="220" cy="205" r="4"/><circle cx="335" cy="82" r="4"/><circle cx="455" cy="215" r="4"/><circle cx="565" cy="105" r="4"/><circle cx="650" cy="190" r="4"/></g><text x="380" y="305" text-anchor="middle" class="fig-caption">a Euclidean plane</text></svg></div>

## First construction: a straight line

!!! note "First choice"

    Choose two distinct points of the plane and construct the unique straight line through them.

!!! abstract "What has and has not been created"

    At this stage we have only a chosen Euclidean line. It is not yet a coordinate axis: there is no second line, no origin, no positive direction and no numerical scale.

<div class="math-figure"><svg viewBox="0 0 760 330" role="img" aria-label="A straight line through two points"><rect x="55" y="35" width="650" height="230" rx="12" fill="currentColor" opacity=".035"/><line x1="105" y1="220" x2="665" y2="90" class="fig-main"/><circle cx="190" cy="200" r="5" class="fig-dot"/><circle cx="590" cy="107" r="5" class="fig-dot"/><text x="170" y="228" class="fig-label">A</text><text x="604" y="95" class="fig-label">B</text><text x="380" y="305" text-anchor="middle" class="fig-caption">the first constructed line</text></svg></div>

## Second construction: a point on the line

!!! note "Second choice"

    Choose an arbitrary point $O$ on the constructed line.

The point $O$ will later become the common zero of both coordinate axes, but it becomes an origin only after the second axis, orientations and numerical scale have been constructed.

## Third construction: the perpendicular line

!!! note "Third construction"

    Through $O$, construct the unique line perpendicular to the first line. The two constructed lines now intersect at a right angle.

!!! definition "Definition"

    We call the first line the $x$-axis, the perpendicular line the $y$-axis and their intersection $O$ the origin.

<div class="math-figure"><svg viewBox="0 0 700 390" role="img" aria-label="Perpendicular coordinate axes"><line x1="80" y1="210" x2="620" y2="210" class="fig-axis"/><line x1="350" y1="360" x2="350" y2="60" class="fig-axis"/><circle cx="350" cy="210" r="5" class="fig-dot"/><text x="625" y="200" class="fig-label">x</text><text x="365" y="68" class="fig-label">y</text><text x="325" y="238" class="fig-label">O</text><path d="M365 210v-18h18" class="fig-helper"/></svg></div>

## Choosing positive and negative directions

Each axis is divided by $O$ into two opposite rays. Choose one ray on the $x$-axis as positive and one ray on the $y$-axis as positive. The opposite rays are then called negative.

!!! abstract "Orientation is a choice"

    The Euclidean plane does not force which ray should be positive. Reversing one orientation produces a different coordinate system on the same geometric plane.

## Constructing a common unit length

Place the point of the compass at the origin $O$ and draw a circle with any chosen radius. This radius becomes the unit length. The circle meets each axis in two points. On the positive parts of the axes these points are labelled $1$, and on the negative parts they are labelled $-1$.

Keeping the same compass opening transfers the unit repeatedly and constructs the integer marks on both axes.

## Refining the scale by bisection

Bisecting each unit segment constructs halves. Bisecting again constructs quarters, then eighths and so on. Repeating this process gives all dyadic marks

$$
\boxed{\frac{k}{2^n}},\qquad k\in\mathbb Z,\quad n\in\mathbb N.
$$

!!! theorem "Density of dyadic marks"

    Every nonempty interval contains a number of the form $k/2^n$. Dyadic marks therefore provide arbitrarily fine numerical approximations to positions on the line.

!!! definition "Continuity assumption"

    Once an origin, a positive direction and a unit length are fixed on a Euclidean line, every point of the line corresponds to exactly one real number, and every real number corresponds to exactly one point of the line.

## Assigning coordinates by orthogonal projection

Let $P$ be any point of the plane. Through $P$, construct the line perpendicular to the $x$-axis; it meets that axis at a unique point $P_x$. Through $P$, construct the line perpendicular to the $y$-axis; it meets that axis at a unique point $P_y$.

<div class="math-figure"><svg viewBox="0 0 700 410" role="img" aria-label="Orthogonal projection of a point onto the axes"><line x1="70" y1="330" x2="620" y2="330" class="fig-axis"/><line x1="120" y1="380" x2="120" y2="60" class="fig-axis"/><line x1="440" y1="120" x2="440" y2="330" class="fig-helper"/><line x1="440" y1="120" x2="120" y2="120" class="fig-helper"/><circle cx="440" cy="120" r="5" class="fig-dot"/><circle cx="440" cy="330" r="4" class="fig-dot"/><circle cx="120" cy="120" r="4" class="fig-dot"/><text x="452" y="106" class="fig-label">P</text><text x="426" y="360" class="fig-label">Pₓ</text><text x="78" y="126" class="fig-label">Pᵧ</text></svg></div>

!!! definition "Coordinates"

    If the signed real labels of $P_x$ and $P_y$ are $x$ and $y$, respectively, the coordinates of $P$ are the ordered pair

    $$
    \boxed{P\longleftrightarrow(x,y)}.
    $$

??? proof "Why the correspondence is one-to-one"

    The perpendicular through a given point to a given line is unique. Conversely, given real numbers $x$ and $y$, locate the corresponding points on the axes and construct through them lines perpendicular to the respective axes. The two lines meet in exactly one point.

!!! theorem "Cartesian correspondence"

    Once the two perpendicular axes, their positive directions and a common unit are fixed, orthogonal projection gives a one-to-one correspondence

    $$
    \boxed{\text{points of the Euclidean plane}\longleftrightarrow\text{pairs }(x,y)\in\mathbb R^2}.
    $$

## The coordinate formula for Euclidean distance

For points

$$
P=(x_1,y_1),\qquad Q=(x_2,y_2),
$$

the horizontal and vertical separations have lengths $|x_2-x_1|$ and $|y_2-y_1|$. Together with the segment $PQ$, they form a right triangle.

<div class="math-figure"><svg viewBox="0 0 700 420" role="img" aria-label="Right triangle used to derive the distance formula"><line x1="70" y1="335" x2="630" y2="335" class="fig-axis"/><line x1="100" y1="390" x2="100" y2="60" class="fig-axis"/><line x1="220" y1="275" x2="500" y2="105" class="fig-main"/><line x1="220" y1="275" x2="500" y2="275" class="fig-helper"/><line x1="500" y1="275" x2="500" y2="105" class="fig-helper"/><circle cx="220" cy="275" r="5" class="fig-dot"/><circle cx="500" cy="105" r="5" class="fig-dot"/><text x="198" y="300" class="fig-label">P</text><text x="512" y="92" class="fig-label">Q</text><text x="345" y="304" class="fig-caption">|x₂−x₁|</text><text x="515" y="195" class="fig-caption">|y₂−y₁|</text></svg></div>

By the Pythagorean theorem,

$$
d_E(P,Q)^2=(x_2-x_1)^2+(y_2-y_1)^2.
$$

Distance is nonnegative, so

!!! theorem "Euclidean distance in Cartesian coordinates"

    $$
    \boxed{d_E(P,Q)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}}.
    $$

The formula does not create a new notion of distance. It is the coordinate expression of the Euclidean segment length already present in the plane.
