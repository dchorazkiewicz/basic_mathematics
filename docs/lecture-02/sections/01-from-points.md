## From Cartesian points to free vectors {#from-points}

A Cartesian point is an ordered pair of real numbers. Let

$$
P=(p_1,p_2),\qquad Q=(q_1,q_2).
$$

The notation is deceptively similar throughout this lecture, so we will keep the types of objects explicit:

- $(p_1,p_2)$ denotes a **point**;
- $(P,Q)$ denotes an **ordered pair of points**;
- $\overrightarrow{PQ}$ denotes the **anchored vector** determined by that ordered pair;
- $[v_1,v_2]$ denotes a **free vector**, an abstract displacement independent of its starting point.

### Arithmetic on Cartesian point coordinates

Because points are represented by ordered pairs of numbers, we may perform coordinatewise calculations on their descriptions. Write

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

At this stage these are operations on coordinate descriptions of points. They do not yet define free vectors. The expression that will matter geometrically is the difference

$$
Q-P=(q_1-p_1,\,q_2-p_2),
$$

because it records how the coordinates must change in order to move from $P$ to $Q$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Arithmetic on Cartesian points</span>
      <span class="figure-step-title">Move $P$ and $Q$, then compare the four coordinatewise operations.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open point arithmetic figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a point operation">
    <button class="curve-mode is-active" type="button" data-point-operation="sum">Addition</button>
    <button class="curve-mode" type="button" data-point-operation="opposite">Opposite point</button>
    <button class="curve-mode" type="button" data-point-operation="difference">Subtraction</button>
    <button class="curve-mode" type="button" data-point-operation="scalar">Scalar multiplication</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="point-arithmetic-board" class="jxgbox" data-point-arithmetic></div></div>
  <div class="parameter-controls" data-point-lambda-control hidden>
    <label class="parameter-control">
      <span>$\lambda$ = <output data-point-lambda-output>1.5</output></span>
      <input type="range" min="-3" max="3" step="0.25" value="1.5" data-point-lambda-slider>
    </label>
  </div>
  <div class="relation-readout"><span data-point-operation-readout></span></div>
  <figcaption class="figure-caption">These are calculations on ordered pairs representing points. The difference $Q-P$ will shortly be interpreted as a change of position.</figcaption>
</figure>

### An ordered pair of points determines an anchored vector

The ordered pair of points

$$
(P,Q)
$$

determines a directed motion beginning at $P$ and ending at $Q$. We represent this ordered pair geometrically by the arrow

$$
\overrightarrow{PQ}
$$

and call it an **anchored vector**. Its initial point is part of the object: changing $P$ or $Q$ produces a different anchored vector.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">An anchored vector</span>
      <span class="figure-step-title">Move $P$ and $Q$ to see the directed arrow determined by the ordered pair $(P,Q)$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open anchored vector figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="anchored-vector-board" class="jxgbox" data-anchored-vector></div></div>
  <div class="relation-readout"><span data-anchored-vector-readout></span></div>
  <figcaption class="figure-caption">The anchored vector remembers both its initial point and its endpoint. Reversing the ordered pair reverses the motion.</figcaption>
</figure>

The coordinate change encoded by $\overrightarrow{PQ}$ is

$$
\Delta(P,Q):=Q-P=(q_1-p_1,\,q_2-p_2).
$$

Its two entries answer a concrete question:

- how much must the horizontal coordinate change?
- how much must the vertical coordinate change?

Thus the anchored vector contains more information than the pair of numbers $Q-P$: it records **where the motion begins and ends**, while $Q-P$ records only **how the position changes**.

Its length is the distance between its endpoints:

$$
\boxed{|\overrightarrow{PQ}|=d_E(P,Q)}.
$$

Reversing the order produces a different anchored vector and negates the coordinate change:

$$
\Delta(Q,P)=P-Q=-(Q-P).
$$

### Different anchored vectors can encode the same displacement

Now consider two anchored vectors

$$
\overrightarrow{PQ}\qquad\text{and}\qquad\overrightarrow{P'Q'}.
$$

If $(P,Q)\neq(P',Q')$, then they are different anchored vectors. Nevertheless, they may carry the same information about how a position changes. This happens precisely when

$$
Q-P=Q'-P'.
$$

We therefore introduce the relation

$$
\boxed{
\overrightarrow{PQ}\sim\overrightarrow{P'Q'}
\quad\Longleftrightarrow\quad
Q-P=Q'-P'.
}
$$

The symbol $\sim$ does **not** say that the anchored vectors are literally the same ordered pair of points. It says that they encode the same displacement.

Geometrically, the condition is equivalent to

$$
\frac12(P+Q')=\frac12(Q+P'),
$$

so the diagonals $PQ'$ and $QP'$ have the same midpoint. The four points form a parallelogram, and the two anchored vectors occur as opposite directed sides.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Different anchored vectors with the same displacement</span>
      <span class="figure-step-title">The ordered pairs of endpoints differ, but both arrows encode the same coordinate change.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector equivalence figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-equivalence-board" class="jxgbox" data-vector-equivalence></div></div>
  <figcaption class="figure-caption">The midpoint $M$ of both diagonals verifies the parallelogram relation. The anchored vectors remain different, but they satisfy $\overrightarrow{PQ}\sim\overrightarrow{P'Q'}$.</figcaption>
</figure>

### Free vectors: extracting only the change of position

Often we do not care where a motion begins. We want an instruction that can be applied at any point:

> change the horizontal coordinate by $v_1$ and the vertical coordinate by $v_2$.

To isolate exactly this information, we form a new abstract object.

!!! definition "Free vector"
    A **free vector** is the collection of all anchored vectors that encode one fixed coordinate change. If $\overrightarrow{PQ}$ is one representative, then

    $$
    [\overrightarrow{PQ}]
      :=\{\overrightarrow{AB}:B-A=Q-P\}.
    $$

    Every member of this collection is called a **representative** of the free vector.

The square brackets mean that we have deliberately forgotten the initial and terminal points and retained only the common displacement. If

$$
Q-P=(v_1,v_2),
$$

then we write the resulting free vector as

$$
\boxed{\mathbf v=[\overrightarrow{PQ}]=[v_1,v_2].}
$$

This is the central abstraction:

- $\overrightarrow{PQ}$ says: “start at this particular point $P$ and finish at this particular point $Q$”;
- $\mathbf v=[v_1,v_2]$ says: “wherever you start, change your position by $v_1$ horizontally and $v_2$ vertically”.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One free vector, many anchored representatives</span>
      <span class="figure-step-title">Move the endpoint $V$ of the representative beginning at $O=(0,0)$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open free vector representative figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="free-vector-representatives-board" class="jxgbox" data-free-vector-representatives></div></div>
  <div class="relation-readout"><span data-free-vector-readout></span></div>
  <figcaption class="figure-caption">Every displayed arrow is a different anchored vector, but all are representatives of the same free vector because every arrow encodes the same coordinate change.</figcaption>
</figure>

### Similar notation, different objects

This distinction must remain explicit:

$$
\begin{aligned}
V&=(v_1,v_2) &&\text{is a point},\\
\overrightarrow{OV}& &&\text{is an anchored vector},\\
[\overrightarrow{OV}]&=\mathbf v=[v_1,v_2] &&\text{is a free vector}.
\end{aligned}
$$

The expressions use the same numbers, but they do not denote the same kind of object.

A representative beginning at the origin is especially convenient. If

$$
O=(0,0),\qquad V=(v_1,v_2),
$$

then

$$
\boxed{\mathbf v=[\overrightarrow{OV}]=[v_1,v_2].}
$$

The point $V$ is not identified with the free vector. It merely determines a canonical anchored representative from the origin.

!!! principle "What the abstraction buys us"
    A free vector is a reusable instruction for changing position. Because it no longer depends on a particular starting point, we can apply the same displacement anywhere and, in the next section, compose several displacements into one.