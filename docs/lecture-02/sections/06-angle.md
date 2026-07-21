## The angle between two vectors {#angle}

!!! note "Directed turn versus ordinary angle"
    The difference of inclination angles $\beta-\alpha$ is a directed turn modulo a full turn. The ordinary angle between two nonzero vectors is the smaller, unoriented separation between their directions.

!!! definition "Angle between vectors"
    For nonzero vectors $\mathbf u$ and $\mathbf v$, their angle is the unique number $\theta\in[0,\pi]$ satisfying

    $$
    \boxed{\cos\theta=\frac{\mathbf u\cdot\mathbf v}{\|\mathbf u\|\,\|\mathbf v\|}}.
    $$

The interval $[0,\pi]$ chooses the smaller unoriented angle. Directions with inclinations $10^\circ$ and $350^\circ$ are separated by $20^\circ$, not $340^\circ$.

!!! consequence "Principal relative positions"
    $$
    \theta=0\iff\text{same direction},
    \qquad
    \theta=\frac\pi2\iff\text{perpendicular},
    \qquad
    \theta=\pi\iff\text{opposite directions}.
    $$

The Cauchy--Schwarz inequality guarantees that

$$
-1\leq\frac{\mathbf u\cdot\mathbf v}{\|\mathbf u\|\,\|\mathbf v\|}\leq1,
$$

so the angle is well defined. Its proof will emerge from orthogonal projection later in the lecture.

### Why the dot product can be expanded

Before using the dot product in longer calculations, we verify its behaviour under addition and scalar multiplication.

??? derivation "Algebraic properties of the dot product"
    Let $\mathbf u=[u_1,u_2]$, $\mathbf v=[v_1,v_2]$, and $\mathbf w=[w_1,w_2]$. Then

    $$
    \begin{aligned}
    (\mathbf u+\mathbf w)\cdot\mathbf v
      &=(u_1+w_1)v_1+(u_2+w_2)v_2\\
      &=(u_1v_1+u_2v_2)+(w_1v_1+w_2v_2)\\
      &=\mathbf u\cdot\mathbf v+\mathbf w\cdot\mathbf v.
    \end{aligned}
    $$

    Similarly,

    $$
    (\lambda\mathbf u)\cdot\mathbf v=\lambda(\mathbf u\cdot\mathbf v).
    $$

    Symmetry of multiplication of real numbers gives

    $$
    \mathbf u\cdot\mathbf v=\mathbf v\cdot\mathbf u,
    $$

    and finally

    $$
    \mathbf u\cdot\mathbf u=u_1^2+u_2^2=\|\mathbf u\|^2.
    $$

!!! theorem "Dot-product properties"
    $$
    \begin{aligned}
    (\mathbf u+\mathbf w)\cdot\mathbf v&=\mathbf u\cdot\mathbf v+\mathbf w\cdot\mathbf v,\\
    (\lambda\mathbf u)\cdot\mathbf v&=\lambda(\mathbf u\cdot\mathbf v),\\
    \mathbf u\cdot\mathbf v&=\mathbf v\cdot\mathbf u.
    \end{aligned}
    $$

    $$
    \boxed{\mathbf u\cdot\mathbf u=\|\mathbf u\|^2}.
    $$

    These properties justify every later expansion involving expressions such as $(\mathbf u-\mathbf v)\cdot(\mathbf u-\mathbf v)$.

### The cosine theorem emerges immediately

Draw $\mathbf u$ and $\mathbf v$ from a common point. The displacement from the endpoint of $\mathbf v$ to the endpoint of $\mathbf u$ is $\mathbf u-\mathbf v$. Thus the three vectors determine a triangle with side lengths $\|\mathbf u\|$, $\|\mathbf v\|$, and $\|\mathbf u-\mathbf v\|$.

??? derivation "Expanding the third side"
    $$
    \begin{aligned}
    \|\mathbf u-\mathbf v\|^2
      &=(\mathbf u-\mathbf v)\cdot(\mathbf u-\mathbf v)\\
      &=\mathbf u\cdot\mathbf u-\mathbf u\cdot\mathbf v-\mathbf v\cdot\mathbf u+\mathbf v\cdot\mathbf v\\
      &=\|\mathbf u\|^2+\|\mathbf v\|^2-2\mathbf u\cdot\mathbf v\\
      &=\|\mathbf u\|^2+\|\mathbf v\|^2-2\|\mathbf u\|\,\|\mathbf v\|\cos\theta.
    \end{aligned}
    $$

!!! theorem "Cosine theorem"
    If $a=\|\mathbf u\|$, $b=\|\mathbf v\|$, and $c=\|\mathbf u-\mathbf v\|$, then

    $$
    \boxed{c^2=a^2+b^2-2ab\cos\theta}.
    $$

The cosine theorem is not inserted as an external formula. It is the expansion of the squared displacement between the endpoints of two arbitrary vectors. The triangle law is encoded in vector subtraction and the dot product.
