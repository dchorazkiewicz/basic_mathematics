## A plane through three points {#three-points}

!!! derivation "Extracting two independent directions"
    Let $P,Q,R$ be three noncollinear points. Their ordinary coordinate differences are points, while the corresponding free direction vectors are

    $$
    \mathbf u=[Q-P],
    \qquad
    \mathbf v=[R-P].
    $$

    Noncollinearity means that these two free vectors are nonparallel. Their cross product

    $$
    \mathbf n=[Q-P]\times[R-P]
    $$

    is nonzero and perpendicular to the plane.

!!! theorem "Unique plane through three noncollinear points"
    $$
    \boxed{
    \Pi=
    \left\{
    P\oplus\bigl(s[Q-P]+t[R-P]\bigr):s,t\in\mathbb R
    \right\}.
    }
    $$

    $$
    \boxed{\mathbf n=[Q-P]\times[R-P].}
    $$

    The two expressions have the correct types: the quantity inside the parentheses is a free vector, and applying it at $P$ produces a point of the plane.

!!! example "Example"
    For

    $$
    P=(1,0,0),\qquad Q=(0,1,0),\qquad R=(0,0,1),
    $$

    the ordinary point differences are

    $$
    Q-P=(-1,1,0),
    \qquad
    R-P=(-1,0,1),
    $$

    and the corresponding free vectors are

    $$
    [Q-P]=[-1,1,0],
    \qquad
    [R-P]=[-1,0,1].
    $$

    Therefore

    $$
    [Q-P]\times[R-P]=[1,1,1].
    $$

    Let $X=(x,y,z)$ be a variable point. Since

    $$
    [X-P]=[x-1,\,y,\,z],
    $$

    the normal equation is

    $$
    [1,1,1]\cdot[X-P]=0,
    $$

    so

    $$
    \boxed{x+y+z=1}.
    $$

Noncollinearity is essential. If $P,Q,R$ are collinear, then $[Q-P]$ and $[R-P]$ are parallel and their cross product is zero, so they do not supply two independent directions.