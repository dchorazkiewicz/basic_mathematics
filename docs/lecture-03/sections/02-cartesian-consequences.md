## What the familiar Cartesian forms let us read {#cartesian-consequences}

!!! principle "Choose the representation adapted to the question"
    The parametric, normal and slope forms are not competing definitions. They expose different information about the same geometric line.

<figure class="figure-panel jsx-panel" data-fullscreen-panel>
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One line, three descriptions</span>
      <span class="figure-step-title">Move the point and direction vector and compare the three coordinate descriptions.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open line descriptions figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="line-descriptions-board" class="jxgbox" data-line-descriptions></div></div>
  <div class="relation-readout"><span data-line-parametric></span><span data-line-normal></span><span data-line-slope></span></div>
  <figcaption class="figure-caption">The geometric line remains unchanged while the parametric, normal and slope descriptions expose different information about it.</figcaption>
</figure>

### Intersections with the coordinate axes

!!! derivation "Impose both defining conditions"
    For $y=mx+b$, setting $x=0$ imposes the $y$-axis condition and gives $(0,b)$. If $m\neq0$, setting $y=0$ gives $x=-b/m$.

    $$
    \boxed{L\cap\{x=0\}=\{(0,b)\}},
    \qquad
    \boxed{L\cap\{y=0\}=\left\{\left(-\frac bm,0\right)\right\}}.
    $$

To find an intersection of two sets, impose both defining conditions at once. Axis intercepts are the simplest example.

!!! example "Example"
    For $y=-\tfrac12x+3$, the $y$-intercept is $(0,3)$ and the $x$-intercept is $(6,0)$.

### The line through two points

Let

$$
P=(x_1,y_1),\qquad Q=(x_2,y_2)
$$

be distinct points. Their ordinary coordinate difference is

$$
Q-P=(x_2-x_1,\,y_2-y_1),
$$

while the corresponding free direction vector is

$$
\boxed{[Q-P]=[x_2-x_1,\,y_2-y_1]\neq\mathbf0.}
$$

Starting at $P$, scalar multiples of this free vector generate the required line.

!!! theorem "Unique line through two points"
    $$
    \boxed{
    L=\{P\oplus t[Q-P]:t\in\mathbb R\}.
    }
    $$

    At $t=0$ the point is $P$. At $t=1$,

    $$
    P\oplus[Q-P]=Q.
    $$

    This handles vertical and nonvertical lines uniformly.

!!! derivation "Recovering slope notation"
    If $x_1\neq x_2$,

    $$
    \boxed{m=\frac{y_2-y_1}{x_2-x_1}},
    \qquad
    \boxed{y-y_1=m(x-x_1)}.
    $$

    If $x_1=x_2$, the line is vertical:

    $$
    \boxed{x=x_1}.
    $$

### Parallel lines in slope notation

!!! derivation "Why equal slopes mean equal directions"
    The lines $y=m_1x+b_1$ and $y=m_2x+b_2$ have free direction vectors $[1,m_1]$ and $[1,m_2]$. These are parallel exactly when $m_1=m_2$.

!!! theorem "Parallel nonvertical lines"
    $$
    \boxed{L_1\parallel L_2\iff m_1=m_2\text{ and }b_1\neq b_2.}
    $$

    If also $b_1=b_2$, the equations describe the same line.

Slope formulas are efficient consequences of the vector construction, but the parametric and normal descriptions are more general and extend directly to space.