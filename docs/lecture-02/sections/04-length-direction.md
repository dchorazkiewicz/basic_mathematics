## How much motion and in which direction? {#length-direction}

The coordinate pair of a vector records two changes, but it does not immediately answer two geometric questions:

!!! question "Two questions carried by every nonzero vector"
    1. How long is the displacement?
    2. In which direction does it point?

Let $\mathbf v=[v_1,v_2]$ be drawn from the origin. Its endpoint, together with its horizontal and vertical coordinate changes, forms a right triangle. The legs have lengths $|v_1|$ and $|v_2|$, while the vector itself is the hypotenuse.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">A vector as a right triangle</span><span class="figure-step-title" data-direction-readout>$\mathbf v=[4,3]$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open vector direction figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-direction-board" class="jxgbox" data-vector-direction></div></div>
  <figcaption class="figure-caption">The vector, its two coordinate changes, and its inclination are displayed simultaneously.</figcaption>
</figure>

??? derivation "Length from the Pythagorean theorem"
    $$
    \|\mathbf v\|^2=v_1^2+v_2^2.
    $$

    The length is nonnegative, so

    $$
    \boxed{\|\mathbf v\|=\sqrt{v_1^2+v_2^2}}.
    $$

!!! definition "Euclidean norm"
    The Euclidean length, or norm, of $\mathbf v=[v_1,v_2]$ is

    $$
    \boxed{\|\mathbf v\|=\sqrt{v_1^2+v_2^2}}.
    $$

    The double bars distinguish the vector from the number measuring its length.

!!! consequence "Basic consequences"
    $$
    \boxed{\|\mathbf0\|=0},
    \qquad
    \boxed{\mathbf v\neq\mathbf0\implies\|\mathbf v\|>0}.
    $$

    For points $A$ and $B$,

    $$
    \boxed{d_E(A,B)=\|B-A\|}.
    $$

The vector $B-A$ records how to move from $A$ to $B$, while its norm records the Euclidean distance travelled. The same object therefore carries both directional and metric information.

### Separating magnitude from direction

Assume $\mathbf v\neq\mathbf0$ and let $\alpha$ be its angle of inclination measured from the positive $x$-axis.

??? derivation "Recovering the coordinates"
    The right triangle gives

    $$
    \cos\alpha=\frac{v_1}{\|\mathbf v\|},
    \qquad
    \sin\alpha=\frac{v_2}{\|\mathbf v\|}.
    $$

    Therefore

    $$
    v_1=\|\mathbf v\|\cos\alpha,
    \qquad
    v_2=\|\mathbf v\|\sin\alpha.
    $$

!!! theorem "Magnitude-direction decomposition"
    Every nonzero vector admits the decomposition

    $$
    \boxed{\mathbf v=\|\mathbf v\|[\cos\alpha,\sin\alpha]}.
    $$

    The vector $[\cos\alpha,\sin\alpha]$ has length one.

!!! interpretation "The two pieces of a vector"
    - $\|\mathbf v\|$ says how much displacement occurs;
    - $[\cos\alpha,\sin\alpha]$ says in which direction it occurs.

    Thus every nonzero vector is a positive magnitude multiplied by a unit direction.
