## Addition, opposite vectors, and subtraction {#addition}

### Why free vectors should be addable

A free vector is an instruction for changing position, independent of the point at which the motion begins. Once such instructions exist, the next natural problem is to compose them.

Suppose that a first displacement is

$$
\mathbf a=[a_1,a_2],
$$

and a second displacement is

$$
\mathbf b=[b_1,b_2].
$$

Starting at an arbitrary point $P$, apply $\mathbf a$ and then $\mathbf b$. Using the point--vector operation introduced above, define

$$
Q=P\oplus\mathbf a,
\qquad
R=Q\oplus\mathbf b.
$$

Equivalently,

$$
[Q-P]=\mathbf a,
\qquad
[R-Q]=\mathbf b.
$$

The two-stage journey is

$$
P\longrightarrow Q\longrightarrow R,
$$

and the direct displacement from its initial point to its final point is the free vector

$$
[R-P].
$$

!!! problem "The composition problem"
    Does $[R-P]$ depend only on $\mathbf a$ and $\mathbf b$, or does it also depend on the chosen starting point $P$?

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two successive changes and one total change</span>
      <span class="figure-step-title">Move $P$, $Q$, or $R$ and compare $[Q-P]$, $[R-Q]$, and $[R-P]$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open point-chain addition figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-chain-board" class="jxgbox" data-vector-chain></div></div>
  <div class="relation-readout" data-vector-chain-readout></div>
  <figcaption class="figure-caption">The anchored arrows are different objects. Their square-bracketed point differences are the corresponding free vectors.</figcaption>
</figure>

### The total displacement is independent of the starting point

Write

$$
P=(p_1,p_2).
$$

Since $Q=P\oplus\mathbf a$,

$$
Q=(p_1+a_1,\,p_2+a_2).
$$

Applying $\mathbf b$ at $Q$ gives

$$
\begin{aligned}
R
  &=Q\oplus\mathbf b\\
  &=(p_1+a_1+b_1,\,p_2+a_2+b_2).
\end{aligned}
$$

The ordinary point difference is therefore

$$
R-P=(a_1+b_1,\,a_2+b_2),
$$

and the associated free vector is

$$
[R-P]=[a_1+b_1,\,a_2+b_2].
$$

The coordinates of $P$ have disappeared. Hence the total displacement depends only on $\mathbf a$ and $\mathbf b$.

!!! definition "Addition of free vectors"
    The sum $\mathbf a+\mathbf b$ is the free vector representing the total effect of first applying $\mathbf a$ and then applying $\mathbf b$:

    $$
    \boxed{
    \mathbf a+\mathbf b
      :=[R-P]
      =[a_1+b_1,\,a_2+b_2].
    }
    $$

The definition is compatible with the action of vectors on points:

$$
\boxed{
(P\oplus\mathbf a)\oplus\mathbf b
  =P\oplus(\mathbf a+\mathbf b).
}
$$

For three points $P,Q,R$, this same compatibility can be written as the chain rule for displacements:

$$
\boxed{
[R-P]=[Q-P]+[R-Q].
}
$$

### The order of two displacements

Coordinatewise addition gives

$$
[a_1+b_1,\,a_2+b_2]
  =[b_1+a_1,\,b_2+a_2].
$$

Hence

$$
\boxed{\mathbf a+\mathbf b=\mathbf b+\mathbf a.}
$$

This commutativity concerns two free vectors. It does not turn $P\oplus\mathbf v$ into a commutative operation: the expression $\mathbf v\oplus P$ remains undefined.

Geometrically, the two possible orders trace adjacent sides of a parallelogram and lead to the same final point:

$$
(P\oplus\mathbf a)\oplus\mathbf b
=
(P\oplus\mathbf b)\oplus\mathbf a.
$$

### Opposite displacement

For

$$
\mathbf a=[a_1,a_2],
$$

the opposite free vector is the instruction that undoes its change of position:

$$
\boxed{-\mathbf a=[-a_1,-a_2].}
$$

Applying $\mathbf a$ and then $-\mathbf a$ returns to the initial point:

$$
(P\oplus\mathbf a)\oplus(-\mathbf a)=P.
$$

Therefore

$$
\mathbf a+(-\mathbf a)=\mathbf0,
\qquad
\mathbf0=[0,0].
$$

The opposite vector has the same norm as $\mathbf a$ but the reverse orientation.

### Subtraction of free vectors

Once the opposite vector has been defined, subtraction is addition of the opposite.

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

!!! note "Do not confuse the two subtractions"
    The ordinary point difference

    $$
    Q-P=(q_1-p_1,\,q_2-p_2)
    $$

    is a round coordinate pair. The free vector from $P$ to $Q$ is

    $$
    \boxed{[Q-P]=[\overrightarrow{PQ}]=[q_1-p_1,\,q_2-p_2].}
    $$

    Vector subtraction $\mathbf a-\mathbf b$ is a separate operation on two free vectors.