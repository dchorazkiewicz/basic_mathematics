## From Cartesian points to free vectors {#from-points}

A Cartesian point is an ordered pair of real numbers. Let

$$
P=(p_1,p_2),\qquad Q=(q_1,q_2).
$$

The notation is deliberately type-sensitive:

- $(p_1,p_2)$ denotes a **point**;
- $(P,Q)$ denotes an **ordered pair of points**;
- $\overrightarrow{PQ}$ denotes the **anchored vector** determined by that ordered pair;
- $[v_1,v_2]$ denotes a **free vector**, independent of its starting point;
- $[Q-P]$ denotes the free vector extracted from the ordinary coordinate difference of two points;
- $P\oplus\mathbf v$ denotes the point obtained by applying the free vector $\mathbf v$ at $P$.

Round and square brackets therefore carry different type information. Round brackets describe points. Square brackets describe free vectors.

### Arithmetic on Cartesian point coordinates

Because Cartesian points are represented by ordered pairs of numbers, their coordinate descriptions admit the usual coordinatewise arithmetic. Write

$$
O=(0,0).
$$

Then

$$
\begin{aligned}
P+Q&=(p_1+q_1,\,p_2+q_2),\\
-P&=(-p_1,-p_2),\\
Q-P&=(q_1-p_1,\,q_2-p_2),\\
\lambda P&=(\lambda p_1,\lambda p_2).
\end{aligned}
$$

These are operations on point coordinates, and their results are again written with round brackets. In particular,

$$
Q-P=(q_1-p_1,q_2-p_2)
$$

is an ordinary coordinate pair. It records the two numerical changes needed to move from $P$ to $Q$, but it has not yet been turned into a free vector.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Arithmetic on Cartesian points</span>
      <span class="figure-step-title">Compare coordinate arithmetic with the separate operation of translating a point by a vector.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open point arithmetic figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a point operation">
    <button class="curve-mode is-active" type="button" data-point-operation="sum">Point addition</button>
    <button class="curve-mode" type="button" data-point-operation="opposite">Opposite point</button>
    <button class="curve-mode" type="button" data-point-operation="difference">Point subtraction</button>
    <button class="curve-mode" type="button" data-point-operation="scalar">Scale point coordinates</button>
    <button class="curve-mode" type="button" data-point-operation="translate">Point $\oplus$ vector</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="point-arithmetic-board" class="jxgbox" data-point-arithmetic></div></div>
  <div class="parameter-controls" data-point-lambda-control hidden>
    <label class="parameter-control">
      <span>$\lambda$ = <output data-point-lambda-output>1.5</output></span>
      <input type="range" min="-3" max="3" step="0.25" value="1.5" data-point-lambda-slider>
    </label>
  </div>
  <div class="relation-readout"><span data-point-operation-readout></span></div>
  <figcaption class="figure-caption">The ordinary operations use round coordinate pairs. Translation uses a square-bracketed free vector and the separate symbol $\oplus$.</figcaption>
</figure>

### An ordered pair of points determines an anchored vector

The ordered pair

$$
(P,Q)
$$

determines a directed motion beginning at $P$ and ending at $Q$. We represent it geometrically by

$$
\overrightarrow{PQ}
$$

and call it an **anchored vector**. Its initial point is part of the object: changing either endpoint produces a different anchored vector.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">An anchored vector</span>
      <span class="figure-step-title">Move $P$ and $Q$ to see the directed arrow determined by $(P,Q)$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open anchored vector figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="anchored-vector-board" class="jxgbox" data-anchored-vector></div></div>
  <div class="relation-readout"><span data-anchored-vector-readout></span></div>
  <figcaption class="figure-caption">The anchored vector remembers both its initial point and its endpoint. Reversing the ordered pair reverses the motion.</figcaption>
</figure>

The coordinate change encoded by $\overrightarrow{PQ}$ is the ordinary point difference

$$
\Delta(P,Q):=Q-P=(q_1-p_1,\,q_2-p_2).
$$

Its entries answer two questions:

- how much must the horizontal coordinate change?
- how much must the vertical coordinate change?

The anchored vector contains more information than $\Delta(P,Q)$: it records **where the motion begins and ends**, while the difference records only the two coordinate changes.

Its length is the distance between its endpoints:

$$
\boxed{|\overrightarrow{PQ}|=d_E(P,Q)}.
$$

Reversing the order negates the coordinate change:

$$
\Delta(Q,P)=P-Q=-(Q-P).
$$

### Different anchored vectors can encode the same displacement

Consider

$$
\overrightarrow{PQ}\qquad\text{and}\qquad\overrightarrow{P'Q'}.
$$

They are different anchored vectors when $(P,Q)\neq(P',Q')$. They nevertheless encode the same displacement precisely when

$$
\Delta(P,Q)=\Delta(P',Q'),
$$

or equivalently

$$
Q-P=Q'-P'.
$$

We therefore define

$$
\boxed{
\overrightarrow{PQ}\sim\overrightarrow{P'Q'}
\quad\Longleftrightarrow\quad
\Delta(P,Q)=\Delta(P',Q').
}
$$

The relation $\sim$ does not identify the endpoint pairs. It says only that the arrows encode the same coordinate change.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Different anchored vectors with the same displacement</span>
      <span class="figure-step-title">The endpoint pairs differ, but the ordinary coordinate differences and resulting free vectors agree.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector equivalence figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-equivalence-board" class="jxgbox" data-vector-equivalence></div></div>
  <figcaption class="figure-caption">Both arrows change the horizontal coordinate by $3$ and the vertical coordinate by $2$.</figcaption>
</figure>

### Free vectors: retaining only the displacement

Often we want an instruction that can be applied at any point:

> change the horizontal coordinate by $v_1$ and the vertical coordinate by $v_2$.

!!! definition "Free vector"
    A **free vector** is the collection of all anchored vectors encoding one fixed coordinate change. If $\overrightarrow{PQ}$ is one representative, then

    $$
    [\overrightarrow{PQ}]
      :=\{\overrightarrow{AB}:\Delta(A,B)=\Delta(P,Q)\}.
    $$

    Every member of this collection is a **representative** of the free vector.

If

$$
Q-P=(v_1,v_2),
$$

then

$$
\boxed{\mathbf v=[\overrightarrow{PQ}]=[v_1,v_2].}
$$

The round pair $(v_1,v_2)$ is the ordinary coordinate difference. The square pair $[v_1,v_2]$ is the free vector carrying that displacement.

- $\overrightarrow{PQ}$ says: “start at this particular point $P$ and finish at $Q$”;
- $\mathbf v=[v_1,v_2]$ says: “wherever you start, make this coordinate change”.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One free vector, many anchored representatives</span>
      <span class="figure-step-title">Move the endpoint $X$ of the representative beginning at $O=(0,0)$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open free vector representative figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="free-vector-representatives-board" class="jxgbox" data-free-vector-representatives></div></div>
  <div class="relation-readout"><span data-free-vector-readout></span></div>
  <figcaption class="figure-caption">Every displayed arrow is a different anchored vector, but all are representatives of the same free vector.</figcaption>
</figure>

### Turning a point difference into a free vector

Square brackets now perform the required change of type.

!!! definition "Free vector determined by two points"
    For points $P$ and $Q$, define

    $$
    \boxed{
    [Q-P]
      :=[\overrightarrow{PQ}]
      =[q_1-p_1,\,q_2-p_2].
    }
    $$

The expression $Q-P$ is an ordinary point-coordinate difference. The expression $[Q-P]$ is a free vector. In particular,

$$
[Q-P]=-[P-Q].
$$

This makes expressions such as

$$
\mathbf n\cdot[P-P_0]
$$

type-correct: both factors are free vectors, so the result is a real number.

### Applying a free vector to a point

A free vector can be anchored at any point. We use a separate operation for this action.

!!! definition "Point translated by a vector"
    For

    $$
    P=(p_1,p_2),\qquad \mathbf v=[v_1,v_2],
    $$

    define

    $$
    \boxed{
    P\oplus\mathbf v
      :=(p_1+v_1,\,p_2+v_2).
    }
    $$

    The result is a point.

Equivalently,

$$
\boxed{
Q=P\oplus\mathbf v
\quad\Longleftrightarrow\quad
[Q-P]=\mathbf v.
}
$$

Hence

$$
\boxed{P\oplus[Q-P]=Q},
\qquad
\boxed{[(P\oplus\mathbf v)-P]=\mathbf v}.
$$

The order matters. The expression $P\oplus\mathbf v$ is defined, while $\mathbf v\oplus P$ is not. This is an action of a displacement on a point, not a commutative addition of two objects of the same type.

### The operations and their output types

Let $\mathcal P$ denote the set of Cartesian points and let $V$ denote the set of free vectors. The operations used from now on have the following types:

$$
\begin{aligned}
\mathcal P\times\mathcal P&\longrightarrow\mathcal P,
& (P,Q)&\longmapsto P+Q,\\
\mathcal P\times\mathcal P&\longrightarrow\mathcal P,
& (Q,P)&\longmapsto Q-P,\\
\mathbb R\times\mathcal P&\longrightarrow\mathcal P,
& (\lambda,P)&\longmapsto\lambda P,\\[2mm]
\mathcal P\times\mathcal P&\longrightarrow V,
& (Q,P)&\longmapsto[Q-P],\\
\mathcal P\times V&\longrightarrow\mathcal P,
& (P,\mathbf v)&\longmapsto P\oplus\mathbf v,\\[2mm]
V\times V&\longrightarrow V,
& (\mathbf u,\mathbf v)&\longmapsto\mathbf u+\mathbf v,\\
\mathbb R\times V&\longrightarrow V,
& (t,\mathbf v)&\longmapsto t\mathbf v,\\
V\times V&\longrightarrow\mathbb R,
& (\mathbf u,\mathbf v)&\longmapsto\mathbf u\cdot\mathbf v.
\end{aligned}
$$

The vector sum, scalar multiplication and dot product are developed in the following sections. The bridge operations

$$
[Q-P]\in V,
\qquad
P\oplus\mathbf v\in\mathcal P
$$

make the later parametric and normal equations of lines and planes unambiguous.

### The length of a free vector

All representatives of one free vector have the same coordinate changes, hence the same length.

!!! definition "Euclidean norm"
    Let

    $$
    \mathbf v=[\overrightarrow{PQ}]=[Q-P]=[v_1,v_2].
    $$

    The **norm** of $\mathbf v$ is the length of any anchored representative:

    $$
    \boxed{
    \|\mathbf v\|
      :=|\overrightarrow{PQ}|
      =d_E(P,Q)
      =\sqrt{(q_1-p_1)^2+(q_2-p_2)^2}
      =\sqrt{v_1^2+v_2^2}.
    }
    $$

This definition is independent of the representative because equivalent anchored vectors have the same coordinate change.

In particular,

$$
\|\mathbf0\|=0,
\qquad
\mathbf v\neq\mathbf0\implies\|\mathbf v\|>0.
$$

For points $A$ and $B$,

$$
\boxed{d_E(A,B)=\|[B-A]\|}.
$$

### Similar coordinates, different objects

Let

$$
O=(0,0),\qquad X=(v_1,v_2).
$$

Then

$$
\begin{aligned}
X&=(v_1,v_2) &&\text{is a point},\\
\overrightarrow{OX}& &&\text{is an anchored vector},\\
[X-O]&=[\overrightarrow{OX}]=\mathbf v=[v_1,v_2] &&\text{is a free vector}.
\end{aligned}
$$

The point $X$ is not identified with the free vector. It merely determines the representative beginning at the origin.

!!! principle "What the abstraction buys us"
    The operator $[Q-P]$ extracts a reusable displacement from two points, while $P\oplus\mathbf v$ applies such a displacement at a chosen point.