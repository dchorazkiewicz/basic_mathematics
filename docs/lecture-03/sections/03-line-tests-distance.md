## Vector tests behind the slope rules {#line-tests-distance}

!!! theorem "Direction-vector criteria"
    $$
    \boxed{\mathbf v_1\parallel\mathbf v_2\iff \mathbf v_2=\lambda\mathbf v_1\text{ for some }\lambda\neq0},
    $$

    $$
    \boxed{\mathbf v_1\perp\mathbf v_2\iff \mathbf v_1\cdot\mathbf v_2=0}.
    $$

These criteria include vertical directions without a special convention. For nonvertical lines take $\mathbf v_1=[1,m_1]$ and $\mathbf v_2=[1,m_2]$.

!!! derivation "Recovering the familiar slope rule"
    $$
    \mathbf v_1\cdot\mathbf v_2=1+m_1m_2,
    $$

    so

    $$
    \boxed{L_1\perp L_2\iff m_1m_2=-1}.
    $$

    This is the slope form of the dot-product criterion, not an independent rule.

## The nearest point on a line

Let

$$
L=\{P_0\oplus t\mathbf v:t\in\mathbb R\},
\qquad \mathbf v\neq\mathbf0,
$$

and let $P$ be any point. The square-bracketed difference

$$
[P-P_0]
$$

is the free displacement from $P_0$ to $P$.

!!! derivation "Projecting onto the allowed direction"
    Decompose $[P-P_0]$ into a component parallel to $\mathbf v$ and a perpendicular component:

    $$
    \operatorname{proj}_{\mathbf v}[P-P_0]
      =\frac{[P-P_0]\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\,\mathbf v.
    $$

    The projection is a free vector. Applying it at $P_0$ reaches the foot $Q$:

    $$
    \boxed{
    Q=P_0\oplus\operatorname{proj}_{\mathbf v}[P-P_0].
    }
    $$

<figure class="figure-panel jsx-panel" data-fullscreen-panel>
  <div class="figure-toolbar"><div><span class="figure-title">Nearest point and distance to a line</span><span class="figure-step-title">Move $P$, $P_0$, and the line direction.</span></div><button class="icon-button" type="button" data-fullscreen>⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="line-distance-board" class="jxgbox" data-line-distance></div></div>
  <div class="relation-readout"><span data-foot-readout></span><span data-distance-readout></span></div>
  <figcaption class="figure-caption">The free remainder $[P-Q]$ is perpendicular to the permitted direction of the line.</figcaption>
</figure>

The perpendicular remainder is

$$
[P-P_0]-\operatorname{proj}_{\mathbf v}[P-P_0].
$$

!!! theorem "Distance in parametric form"
    $$
    \boxed{
    d(P,L)
      =\left\|[P-P_0]-\operatorname{proj}_{\mathbf v}[P-P_0]\right\|.
    }
    $$

Every other route from $P$ to the line contains the same perpendicular component plus an additional component along the line. The perpendicular component alone is shortest.

### Distance from the normal equation

Suppose $L:ax+by=c$ with normal $\mathbf n=[a,b]$. Let $P=(x_P,y_P)$ and let $P_0=(x_0,y_0)$ be any point on the line.

!!! derivation "Reading the normal component"
    The displacement from $P_0$ to $P$ is

    $$
    [P-P_0]=[x_P-x_0,\,y_P-y_0].
    $$

    Therefore

    $$
    \begin{aligned}
    \mathbf n\cdot[P-P_0]
      &=a(x_P-x_0)+b(y_P-y_0)\\
      &=ax_P+by_P-c.
    \end{aligned}
    $$

    The signed scalar component along the unit normal is

    $$
    \frac{ax_P+by_P-c}{\sqrt{a^2+b^2}}.
    $$

    Distance is its absolute value.

!!! theorem "Point-to-line distance"
    $$
    \boxed{d(P,L)=\frac{|ax_P+by_P-c|}{\sqrt{a^2+b^2}}}.
    $$

    The numerator measures signed displacement in the normal direction; the denominator normalises the normal vector.