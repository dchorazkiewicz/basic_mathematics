## Addition, opposite vectors, and subtraction {#addition}

### Why free vectors should be addable

A free vector is an instruction for changing position, independent of the point at which the motion begins. Once such instructions exist, the next natural problem is to compose them.

Suppose that a first displacement changes a position by

$$
\mathbf a=[a_1,a_2],
$$

and a second displacement changes the new position by

$$
\mathbf b=[b_1,b_2].
$$

Starting at an arbitrary point $P$, choose an anchored representative $\overrightarrow{PQ}$ of $\mathbf a$, and then an anchored representative $\overrightarrow{QR}$ of $\mathbf b$:

$$
P\longrightarrow Q\longrightarrow R.
$$

The two-stage journey has one initial point and one final point, so it also determines the direct anchored vector $\overrightarrow{PR}$.

!!! problem "The composition problem"
    Can the total change from $P$ to $R$ be described by one free vector that depends only on $\mathbf a$ and $\mathbf b$, and not on the chosen starting point $P$?

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two successive changes and one total change</span>
      <span class="figure-step-title">Move $P$, $Q$, or $R$ and compare the route $P\to Q\to R$ with the direct change $P\to R$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open point-chain addition figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-chain-board" class="jxgbox" data-vector-chain></div></div>
  <div class="relation-readout" data-vector-chain-readout></div>
  <figcaption class="figure-caption">The two anchored vectors describe the two stages of the journey. The direct anchored vector records their total effect.</figcaption>
</figure>

### The total displacement is independent of the starting point

Because $\overrightarrow{PQ}$ represents $\mathbf a=[a_1,a_2]$, the point $Q$ is obtained from $P$ by the coordinate change $(a_1,a_2)$:

$$
Q=P+(a_1,a_2).
$$

Because $\overrightarrow{QR}$ represents $\mathbf b=[b_1,b_2]$,

$$
R=Q+(b_1,b_2).
$$

Substituting the first equation into the second gives

$$
\begin{aligned}
R
  &=Q+(b_1,b_2)\\
  &=\bigl(P+(a_1,a_2)\bigr)+(b_1,b_2)\\
  &=P+(a_1+b_1,\,a_2+b_2).
\end{aligned}
$$

Therefore

$$
R-P=(a_1+b_1,\,a_2+b_2).
$$

The starting point $P$ has disappeared from the final coordinate change. No matter where the journey begins, performing the displacement $\mathbf a$ and then the displacement $\mathbf b$ produces the same total displacement.

This proves that the direct anchored vector $\overrightarrow{PR}$ is a representative of a free vector determined only by $\mathbf a$ and $\mathbf b$.

!!! definition "Addition of free vectors"
    The sum $\mathbf a+\mathbf b$ is the free vector that represents the total effect of first applying $\mathbf a$ and then applying $\mathbf b$:

    $$
    \boxed{
    \mathbf a+\mathbf b
      :=[\overrightarrow{PR}]
      =[a_1+b_1,\,a_2+b_2].
    }
    $$

The definition does not identify the anchored vectors $\overrightarrow{PQ}$, $\overrightarrow{QR}$, and $\overrightarrow{PR}$. They are three different ordered pairs of points. The free vector $\mathbf a+\mathbf b$ abstracts only the total change encoded by $\overrightarrow{PR}$.

### The order of two displacements

The coordinate calculation gives

$$
[a_1+b_1,\,a_2+b_2]
  =[b_1+a_1,\,b_2+a_2].
$$

Hence the total displacement is the same whether we apply $\mathbf a$ and then $\mathbf b$, or $\mathbf b$ and then $\mathbf a$:

$$
\boxed{\mathbf a+\mathbf b=\mathbf b+\mathbf a.}
$$

Geometrically, the two possible orders trace adjacent sides of a parallelogram and lead to the same final point.

### Opposite displacement

For a free vector

$$
\mathbf a=[a_1,a_2],
$$

the opposite free vector is the instruction that undoes its change of position:

$$
\boxed{-\mathbf a=[-a_1,-a_2].}
$$

Applying $\mathbf a$ and then $-\mathbf a$ returns to the initial position, so

$$
\mathbf a+(-\mathbf a)=\mathbf0,
\qquad
\mathbf0=[0,0].
$$

The opposite free vector has representatives with the same length as representatives of $\mathbf a$, but with reversed orientation.

### Subtraction

Once the opposite vector has been defined, subtraction is simply addition of that opposite vector.

!!! definition "Subtraction of free vectors"
    For $\mathbf a=[a_1,a_2]$ and $\mathbf b=[b_1,b_2]$,

    $$
    \boxed{
    \mathbf a-\mathbf b
      :=\mathbf a+(-\mathbf b)
      =[a_1-b_1,\,a_2-b_2].
    }
    $$

    Consequently,

    $$
    (\mathbf a-\mathbf b)+\mathbf b=\mathbf a.
    $$

!!! note "From two points to a displacement"
    For points $P$ and $Q$, the anchored vector $\overrightarrow{PQ}$ is the ordered pair of endpoints. Its associated free vector is

    $$
    [\overrightarrow{PQ}]=[q_1-p_1,\,q_2-p_2].
    $$

    The subtraction $Q-P$ is performed on point coordinates; square brackets then indicate that we retain only the resulting change of position.
