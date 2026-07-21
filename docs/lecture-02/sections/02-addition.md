## Addition, opposite vectors, and subtraction {#addition}

### Why an operation of addition is needed

Suppose that we begin at a point $P$, move to a point $Q$, and then move from $Q$ to a point $R$. These are two consecutive geometric changes:

$$
P\longrightarrow Q\longrightarrow R.
$$

The first change is represented by the anchored vector $\overrightarrow{PQ}$ and the second by $\overrightarrow{QR}$. But the same journey also produces one direct change from the initial point $P$ to the final point $R$, represented by $\overrightarrow{PR}$.

!!! problem "The problem"
    Given the two free vectors represented by $\overrightarrow{PQ}$ and $\overrightarrow{QR}$, construct one free vector that represents their combined effect. This geometric problem leads to the definition of vector addition.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two consecutive changes and one direct change</span>
      <span class="figure-step-title">Move $P$, $Q$, or $R$ and compare the route $P\to Q\to R$ with the direct change $P\to R$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open point-chain addition figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-chain-board" class="jxgbox" data-vector-chain></div></div>
  <div class="relation-readout" data-vector-chain-readout></div>
  <figcaption class="figure-caption">The two-step motion and the direct motion have the same initial and final points. The direct anchored vector is therefore the natural candidate for the combined free vector.</figcaption>
</figure>

### From two successive displacements to vector addition

Let the free vector represented by $\overrightarrow{PQ}$ have coordinates

$$
\mathbf a=[a_1,a_2],
$$

and let the free vector represented by $\overrightarrow{QR}$ have coordinates

$$
\mathbf b=[b_1,b_2].
$$

Because $\overrightarrow{PQ}$ has coordinate change $(a_1,a_2)$,

$$
Q=P+(a_1,a_2).
$$

Because $\overrightarrow{QR}$ has coordinate change $(b_1,b_2)$,

$$
R=Q+(b_1,b_2).
$$

Now substitute the expression for the point $Q$ into the formula for the point $R$:

$$
\begin{aligned}
R
  &=Q+(b_1,b_2)\\
  &=\bigl(P+(a_1,a_2)\bigr)+(b_1,b_2).
\end{aligned}
$$

At this point we are still using the coordinatewise addition of Cartesian points introduced earlier. By associativity,

$$
R=P+\bigl((a_1,a_2)+(b_1,b_2)\bigr).
$$

Adding the two ordered pairs coordinatewise gives

$$
(a_1,a_2)+(b_1,b_2)=(a_1+b_1,\,a_2+b_2),
$$

and therefore

$$
\boxed{R=P+(a_1+b_1,\,a_2+b_2).}
$$

Hence the direct anchored vector $\overrightarrow{PR}$ has coordinates

$$
[\overrightarrow{PR}]=[a_1+b_1,\,a_2+b_2].
$$

These coordinates depend only on the two free vectors $\mathbf a$ and $\mathbf b$, not on the particular starting point $P$. We therefore define

$$
\boxed{\mathbf a+\mathbf b=[\overrightarrow{PR}]=[a_1+b_1,\,a_2+b_2].}
$$

### The parallelogram rule and commutativity

The same sum can be constructed in the opposite order. Placing a representative of $\mathbf b$ first and then one of $\mathbf a$ gives the same endpoint. Hence

$$
\boxed{\mathbf a+\mathbf b=\mathbf b+\mathbf a.}
$$

### Opposite vectors

For every vector $\mathbf a=[a_1,a_2]$ there is an opposite vector

$$
\boxed{-\mathbf a=[-a_1,-a_2]},
$$

characterised by

$$
\mathbf a+(-\mathbf a)=\mathbf0.
$$

Geometrically it has the same length and lies on the same direction line as $\mathbf a$, but its orientation is reversed.

### Subtraction as addition of the opposite vector

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Opposite vector and subtraction</span>
      <span class="figure-step-title">First reverse $\mathbf b$, then add $-\mathbf b$ to $\mathbf a$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open opposite vector and subtraction figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a subtraction construction step">
    <button class="curve-mode is-active" type="button" data-subtraction-step="opposite">Construct $-\mathbf b$</button>
    <button class="curve-mode" type="button" data-subtraction-step="add">Add $\mathbf a+(-\mathbf b)$</button>
    <button class="curve-mode" type="button" data-subtraction-step="check">Check the missing vector</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-subtraction-board" class="jxgbox" data-vector-subtraction></div></div>
  <div class="relation-readout" data-vector-subtraction-readout></div>
  <figcaption class="figure-caption">The opposite vector reverses orientation without changing length. Subtraction is then ordinary vector addition with this reversed vector.</figcaption>
</figure>

Subtraction is defined by adding the opposite vector:

$$
\boxed{\mathbf a-\mathbf b=\mathbf a+(-\mathbf b)=[a_1-b_1,\,a_2-b_2].}
$$

It is the missing vector in the equation

$$
(\mathbf a-\mathbf b)+\mathbf b=\mathbf a.
$$

!!! note "Points and vectors"
    For any two points $P$ and $Q$,

    $$
    [\overrightarrow{PQ}]=[Q-P].
    $$

    The subtraction is performed on their coordinate descriptions and the result is interpreted as the free vector represented by the arrow from $P$ to $Q$.
