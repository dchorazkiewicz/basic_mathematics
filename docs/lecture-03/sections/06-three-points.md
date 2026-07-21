## A plane through three points {#three-points}

!!! derivation "Extracting two independent directions"
    Let $P,Q,R$ be three noncollinear points. Then

    $$
    \mathbf u=Q-P,
    \qquad
    \mathbf v=R-P
    $$

    are nonparallel and provide the two directions required to generate a plane. Their cross product

    $$
    \mathbf n=(Q-P)\times(R-P)
    $$

    is nonzero and perpendicular to the plane.

!!! theorem "Unique plane through three noncollinear points"
    $$
    \boxed{\Pi=\{P+s(Q-P)+t(R-P):s,t\in\mathbb R\}},
    $$

    $$
    \boxed{\mathbf n=(Q-P)\times(R-P)}.
    $$

!!! example "Example"
    For $P=(1,0,0)$, $Q=(0,1,0)$, and $R=(0,0,1)$,

    $$
    Q-P=[-1,1,0],
    \qquad
    R-P=[-1,0,1],
    $$

    $$
    (Q-P)\times(R-P)=[1,1,1].
    $$

    Using $P$ in the normal equation gives

    $$
    (1,1,1)\cdot((x,y,z)-(1,0,0))=0,
    $$

    $$
    \boxed{x+y+z=1}.
    $$

Noncollinearity is essential. If $P,Q,R$ are collinear, then $Q-P$ and $R-P$ are parallel and their cross product is zero, so they do not supply two independent directions.
