## The classical conics before polar coordinates {#classical-conics}

### Circle and ellipse: from one scale to two

A circle centred at the origin is described by

$$
\boxed{x^2+y^2=R^2}.
$$

Its equation treats every direction equally. The parameterisation

$$
\boxed{x=R\cos t,\qquad y=R\sin t}
$$

makes this symmetry visible: one angle determines one point on the circle.

An ellipse introduces two perpendicular scales:

$$
\boxed{\frac{x^2}{a^2}+\frac{y^2}{b^2}=1},\qquad a\ge b>0.
$$

It is parameterised by

$$
\boxed{x=a\cos t,\qquad y=b\sin t}.
$$

The same circular parameter is stretched by different factors in the two coordinate directions.

Define $c=\sqrt{a^2-b^2}$. The foci are $F_1=(-c,0)$ and $F_2=(c,0)$, and every point $P$ on the ellipse satisfies

$$
\boxed{d(P,F_1)+d(P,F_2)=2a}.
$$

!!! note "Two useful descriptions"
    The centre-based equation exposes symmetry and semiaxes. The focal description exposes distances from the points that later become natural locations of a central force source.

### Parabola: equal distance from a focus and a line

Fix a focus $F=(p,0)$ and a directrix $D:x=-p$, where $p>0$. The parabola is the set of points $P=(x,y)$ satisfying

$$
\boxed{d(P,F)=d(P,D)}.
$$

!!! derivation "Deriving the Cartesian equation"
    Since

    $$
    d(P,F)=\sqrt{(x-p)^2+y^2},
    \qquad
    d(P,D)=x+p,
    $$

    squaring gives

    $$
    (x-p)^2+y^2=(x+p)^2,
    $$

    and therefore

    $$
    \boxed{y^2=4px}.
    $$

A convenient parameterisation is

$$
\boxed{x=pt^2,\qquad y=2pt}.
$$

Substitution gives $y^2=4p^2t^2=4px$, so every parameter value produces a point on the curve.

!!! interpretation "Why the parabola is the boundary case"
    The parabola is neither closed like an ellipse nor split into two branches like a hyperbola. It will later appear exactly at the transition between bounded and unbounded focal motion.

### Hyperbola: two complete branches and two asymptotes

For $a>0$ and $b>0$, the standard hyperbola is

$$
\boxed{\frac{x^2}{a^2}-\frac{y^2}{b^2}=1}.
$$

Define $c=\sqrt{a^2+b^2}$. The foci are $F_1=(-c,0)$ and $F_2=(c,0)$, and the geometric condition is

$$
\boxed{|d(P,F_1)-d(P,F_2)|=2a}.
$$

The absolute value is essential: one sign describes the right branch and the opposite sign describes the left branch.

The asymptotes

$$
\boxed{y=\pm\frac ba x}
$$

are not parts of the hyperbola. They record the directions approached by both branches far from the centre.

!!! warning "Do not confuse a branch with the whole hyperbola"
    A focus-centred polar equation naturally describes the branch visible from the chosen focus and directrix. The Cartesian equation remains the cleanest single picture of the complete two-branch curve.

### Four familiar shapes, one geometric problem

| Curve | Distinguished data | Large-scale behaviour |
|---|---|---|
| circle | one centre and one radius | closed |
| ellipse | two foci, fixed sum | closed |
| parabola | one focus and one directrix | one open branch |
| hyperbola | two foci, fixed difference | two open branches |

!!! principle "The need for a new coordinate system"
    From a focus, a point on a conic is determined by two questions: in which direction do we look, and how far must we travel in that direction before reaching the curve? These are exactly the questions answered by polar coordinates.
