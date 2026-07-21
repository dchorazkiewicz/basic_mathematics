## From Cartesian points to free vectors {#from-points}

A point of the Cartesian plane is an ordered pair of real numbers. Let

$$
P=(p_1,p_2),\qquad Q=(q_1,q_2).
$$

Before vectors are introduced, we first define several arithmetic operations on such points. These definitions are possible because a point of the Cartesian plane is represented by an ordered pair of numbers.

### Arithmetic operations on Cartesian points

The point

$$
O=(0,0)
$$

plays the role of zero.

Addition of points is defined coordinatewise:

$$
\boxed{P+Q=(p_1+q_1,\,p_2+q_2)}.
$$

The point opposite to $P$ is

$$
\boxed{-P=(-p_1,-p_2)},
$$

so that

$$
P+(-P)=O.
$$

Subtraction of points is defined by adding the opposite point:

$$
\boxed{Q-P=Q+(-P)=(q_1-p_1,\,q_2-p_2)}.
$$

For a real number $\lambda$, multiplication of a point by a number is also defined coordinatewise:

$$
\boxed{\lambda P=(\lambda p_1,\,\lambda p_2)}.
$$

At this stage these are arithmetic operations on ordered pairs. They are useful computational rules, but their geometric meaning has not yet been established. The first expression to acquire such a meaning will be the difference $Q-P$.

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
  <figcaption class="figure-caption">The figure visualises arithmetic on ordered pairs. The interpretation of $Q-P$ as a directed displacement is introduced immediately afterwards.</figcaption>
</figure>

### An ordered pair of points determines an anchored vector

The ordered pair $(P,Q)$ determines an arrow beginning at $P$ and ending at $Q$. We denote it by

$$
\overrightarrow{PQ}
$$

and call it an *anchored vector*. The order matters: $P$ is its initial point and $Q$ is its endpoint.

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
  <figcaption class="figure-caption">The first point is the initial point and the second point is the endpoint. Reversing their order reverses the arrow.</figcaption>
</figure>

The point difference is

$$
Q-P=(q_1-p_1,\,q_2-p_2).
$$

The two numbers $q_1-p_1$ and $q_2-p_2$ are, by definition, the coordinates of the anchored vector $\overrightarrow{PQ}$. Round brackets remain reserved for Cartesian points.

Its length is the distance between the two points:

$$
\boxed{|\overrightarrow{PQ}|=d_E(P,Q)}.
$$

Reversing the order reverses the arrow and changes the signs of both coordinates. The vector $\overrightarrow{QP}$ therefore has coordinates

$$
p_1-q_1,\qquad p_2-q_2.
$$

### When do arrows drawn in different places represent the same vector?

We first define equality geometrically. Consider two anchored vectors

$$
\overrightarrow{PQ}\qquad\text{and}\qquad\overrightarrow{P'Q'}.
$$

They are called equal when the midpoint of the pair $P,Q'$ is also the midpoint of the pair $Q,P'$. Equivalently, the four points form a parallelogram in which the two arrows are opposite directed sides.

The midpoint condition is

$$
\frac12(P+Q')=\frac12(Q+P').
$$

Rearranging this equality gives

$$
Q-P=Q'-P'.
$$

We have therefore obtained the coordinate criterion for the geometric relation:

$$
\boxed{\overrightarrow{PQ}=\overrightarrow{P'Q'}\quad\Longleftrightarrow\quad Q-P=Q'-P'}.
$$

Thus two anchored vectors are equal precisely when their corresponding coordinates are equal. Their initial points may be different.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Equal anchored vectors in different positions</span>
      <span class="figure-step-title">Both arrows have the same coordinate change, although their initial points differ.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector equivalence figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-equivalence-board" class="jxgbox" data-vector-equivalence></div></div>
  <figcaption class="figure-caption">The dashed segments display the parallelogram relation behind the equality $Q-P=Q'-P'$.</figcaption>
</figure>

### Free vectors

Equality divides all anchored vectors into disjoint classes. Each class contains all arrows representing one and the same directed change. Such a class is called a *free vector*.

If $\overrightarrow{PQ}$ is one representative of a free vector $\mathbf v$, we write

$$
\boxed{\mathbf v=[\overrightarrow{PQ}]}.
$$

Here the square brackets denote the equivalence class of all anchored vectors equal to $\overrightarrow{PQ}$.

If the common coordinates of these representatives are $v_1,v_2$, then the same free vector is written

$$
\boxed{\mathbf v=[v_1,v_2]}.
$$

Thus round brackets distinguish points from vectors:

$$
V=(v_1,v_2)\qquad\text{is a point, whereas}\qquad \mathbf v=[v_1,v_2]\qquad\text{is a free vector}.
$$

Since

$$
Q-P=(q_1-p_1,\,q_2-p_2)
$$

is a Cartesian point, placing square brackets around this point means the free vector with the same coordinate entries:

$$
\boxed{[\overrightarrow{PQ}]=[Q-P]=[q_1-p_1,\,q_2-p_2]}.
$$

The outer square brackets change the type of object: $(q_1-p_1,q_2-p_2)$ is a point, while $[q_1-p_1,q_2-p_2]$ is a free vector.

A particularly convenient representative begins at the origin. If

$$
O=(0,0),\qquad V=(v_1,v_2),
$$

then

$$
\mathbf v=[\overrightarrow{OV}]=[V]=[v_1,v_2].
$$

This does not identify the point $V$ with the vector $\mathbf v$; it gives a canonical representative of the free vector.

!!! principle "Order of construction"
    Only now, after free vectors have been constructed, do we define operations on them. Each operation will first be described using representatives and then written in coordinates.
