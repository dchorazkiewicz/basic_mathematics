---
title: From Cartesian points to free vectors
---

# From Cartesian points to free vectors

A point of the Cartesian plane is an ordered pair of real numbers. Let

$$
P=(p_1,p_2),\qquad Q=(q_1,q_2).
$$

Before vectors are introduced, define several arithmetic operations on Cartesian points. These definitions are possible because a point is represented by an ordered pair of numbers.

## Arithmetic operations on Cartesian points

The point

$$
O=(0,0)
$$

plays the role of zero. Addition is coordinatewise:

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

Subtraction is defined by adding the opposite point:

$$
\boxed{Q-P=Q+(-P)=(q_1-p_1,\,q_2-p_2)}.
$$

For a real number $\lambda$, scalar multiplication is also coordinatewise:

$$
\boxed{\lambda P=(\lambda p_1,\,\lambda p_2)}.
$$

At this stage these are arithmetic operations on ordered pairs. Their geometric meaning has not yet been established. The first expression to acquire such a meaning will be $Q-P$.

<figure class="figure-panel" data-fullscreen-panel tabindex="0">
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
  <div class="figure-stage"><div id="point-arithmetic-board" class="jxgbox" data-point-arithmetic></div></div>
  <div class="parameter-controls" data-point-lambda-control hidden>
    <label>$\lambda$ = <output data-point-lambda-output>1.5</output>
      <input type="range" min="-3" max="3" step="0.25" value="1.5" data-point-lambda-slider>
    </label>
  </div>
  <div class="relation-readout"><span data-point-operation-readout></span></div>
  <figcaption class="figure-caption">The figure visualises arithmetic on ordered pairs. The interpretation of $Q-P$ as a directed displacement is introduced next.</figcaption>
</figure>

## An ordered pair of points determines an anchored vector

The ordered pair $(P,Q)$ determines an arrow beginning at $P$ and ending at $Q$. We denote it by

$$
\overrightarrow{PQ}
$$

and call it an **anchored vector**. The order matters: $P$ is its initial point and $Q$ is its endpoint.

<figure class="figure-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">An anchored vector and its coordinate changes</span>
      <span class="figure-step-title">The horizontal and vertical changes are $q_1-p_1$ and $q_2-p_2$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector equivalence figure in full screen">⛶</button>
  </div>
  <div class="figure-stage"><div id="vector-equivalence-board" class="jxgbox" data-vector-equivalence></div></div>
  <figcaption class="figure-caption">The arrow begins at $P$ and ends at $Q$; its coordinates record the two coordinate changes.</figcaption>
</figure>

The point difference is

$$
Q-P=(q_1-p_1,\,q_2-p_2).
$$

The numbers $q_1-p_1$ and $q_2-p_2$ are, by definition, the coordinates of the anchored vector $\overrightarrow{PQ}$. Round brackets remain reserved for Cartesian points.

Its length is the distance between the points:

$$
\boxed{|\overrightarrow{PQ}|=d_E(P,Q)}.
$$

Reversing the order reverses the arrow and changes both signs. Thus $\overrightarrow{QP}$ has coordinates

$$
p_1-q_1,\qquad p_2-q_2.
$$

## Equality of anchored vectors

Consider

$$
\overrightarrow{PQ}\qquad\text{and}\qquad\overrightarrow{P'Q'}.
$$

They are called equal when the midpoint of $P,Q'$ is also the midpoint of $Q,P'$. Equivalently, the four points form a parallelogram in which the arrows are opposite directed sides.

The midpoint condition is

$$
\frac12(P+Q')=\frac12(Q+P').
$$

Rearranging gives

$$
Q-P=Q'-P'.
$$

Therefore

$$
\boxed{\overrightarrow{PQ}=\overrightarrow{P'Q'}\quad\Longleftrightarrow\quad Q-P=Q'-P'}.
$$

Two anchored vectors are equal precisely when corresponding coordinates are equal; their initial points may differ.

## Free vectors

Equality divides anchored vectors into disjoint classes. Each class contains all arrows representing one directed change and is called a **free vector**.

If $\overrightarrow{PQ}$ represents a free vector $\mathbf v$, write

$$
\boxed{\mathbf v=[\overrightarrow{PQ}]}.
$$

If the common coordinates are $v_1,v_2$, write

$$
\boxed{\mathbf v=[v_1,v_2]}.
$$

Round brackets distinguish points from vectors:

$$
V=(v_1,v_2)\quad\text{is a point, whereas}\quad \mathbf v=[v_1,v_2]\quad\text{is a free vector}.
$$

Since

$$
Q-P=(q_1-p_1,\,q_2-p_2),
$$

placing square brackets around the coordinate difference denotes the corresponding free vector:

$$
\boxed{[\overrightarrow{PQ}]=[Q-P]=[q_1-p_1,\,q_2-p_2]}.
$$

A convenient representative begins at the origin. If

$$
O=(0,0),\qquad V=(v_1,v_2),
$$

then

$$
\mathbf v=[\overrightarrow{OV}]=[V]=[v_1,v_2].
$$

This does not identify the point $V$ with the vector $\mathbf v$; it gives a canonical representative.

<div class="statement">
  <span class="statement-label">Order of construction</span>
  Only after free vectors have been constructed do we define operations on them. Each operation is first described using representatives and then written in coordinates.
</div>
