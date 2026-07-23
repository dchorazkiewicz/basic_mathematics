## What the familiar Cartesian forms let us read {#cartesian-consequences}

!!! principle "Choose the representation adapted to the question"
    The parametric, normal and slope forms are not competing definitions. They expose different information about the same geometric line.

### Intersections with the coordinate axes

Two sets intersect at those points which belong to both sets at the same time. Thus a point belongs to

$$
L\cap M
$$

precisely when it satisfies the defining condition of $L$ and the defining condition of $M$.

For the coordinate axes these conditions are especially simple:

$$
\text{$y$-axis: }x=0,
\qquad
\text{$x$-axis: }y=0.
$$

Let the line be

$$
L:\quad y=mx+b.
$$

!!! derivation "Intersection with the $y$-axis"
    A point on the $y$-axis has first coordinate equal to zero. We therefore impose both conditions

    $$
    y=mx+b,
    \qquad
    x=0.
    $$

    Substituting $x=0$ into the equation of the line gives

    $$
    y=m\cdot0+b=b.
    $$

    Hence the line meets the $y$-axis at

    $$
    \boxed{(0,b)}.
    $$

    In set notation,

    $$
    \boxed{L\cap\{x=0\}=\{(0,b)\}}.
    $$

!!! derivation "Intersection with the $x$-axis"
    A point on the $x$-axis has second coordinate equal to zero. We therefore impose

    $$
    y=mx+b,
    \qquad
    y=0.
    $$

    This gives

    $$
    0=mx+b.
    $$

    If $m\neq0$, then

    $$
    x=-\frac{b}{m}.
    $$

    Hence the line meets the $x$-axis at

    $$
    \boxed{\left(-\frac{b}{m},0\right)}.
    $$

    In set notation,

    $$
    \boxed{L\cap\{y=0\}=\left\{\left(-\frac bm,0\right)\right\}}.
    $$

The procedure is always the same: write the defining conditions of both sets and solve them simultaneously. For an axis, one of the coordinates is simply fixed to zero.

!!! example "Example"
    Consider

    $$
    y=-\frac12x+3.
    $$

    For the $y$-axis set $x=0$:

    $$
    y=-\frac12\cdot0+3=3,
    $$

    so the intersection point is

    $$
    (0,3).
    $$

    For the $x$-axis set $y=0$:

    $$
    0=-\frac12x+3,
    $$

    hence $x=6$, so the second intersection point is

    $$
    (6,0).
    $$

### The line through two points

Let

$$
P=(x_1,y_1),\qquad Q=(x_2,y_2)
$$

be distinct points. Their ordinary coordinate difference is

$$
Q-P=(x_2-x_1,\,y_2-y_1),
$$

while the corresponding free direction vector is

$$
\boxed{[Q-P]=[x_2-x_1,\,y_2-y_1]\neq\mathbf0.}
$$

Starting at $P$, scalar multiples of this free vector generate the required line.

!!! theorem "Unique line through two points"
    $$
    \boxed{
    L=\{P\oplus t[Q-P]:t\in\mathbb R\}.
    }
    $$

    At $t=0$ the point is $P$. At $t=1$,

    $$
    P\oplus[Q-P]=Q.
    $$

    This handles vertical and nonvertical lines uniformly.

!!! derivation "Recovering slope notation"
    If $x_1\neq x_2$,

    $$
    \boxed{m=\frac{y_2-y_1}{x_2-x_1}},
    \qquad
    \boxed{y-y_1=m(x-x_1)}.
    $$

    If $x_1=x_2$, the line is vertical:

    $$
    \boxed{x=x_1}.
    $$

### Parallel lines in slope notation

!!! derivation "Why equal slopes mean equal directions"
    The lines $y=m_1x+b_1$ and $y=m_2x+b_2$ have free direction vectors $[1,m_1]$ and $[1,m_2]$. These are parallel exactly when $m_1=m_2$.

!!! theorem "Parallel nonvertical lines"
    $$
    \boxed{L_1\parallel L_2\iff m_1=m_2\text{ and }b_1\neq b_2.}
    $$

    If also $b_1=b_2$, the equations describe the same line.

Slope formulas are efficient consequences of the vector construction, but the parametric and normal descriptions are more general and extend directly to space.