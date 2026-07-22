## Scaling vectors {#scaling}

### Multiplication by a real number

A free vector is an instruction for changing position. Multiplying it by a real number changes the size of that displacement and, when the number is negative, reverses its orientation.

!!! definition "Scalar multiplication"
    For $\mathbf a=[a_1,a_2]$ and $t\in\mathbb R$,

    $$
    \boxed{t\mathbf a=[ta_1,ta_2]}.
    $$

If $t>0$, the displacement keeps its orientation and its length is multiplied by $t$:

$$
\|t\mathbf a\|=t\|\mathbf a\|.
$$

If $t<0$, the displacement points in the opposite orientation and

$$
\|t\mathbf a\|=|t|\,\|\mathbf a\|.
$$

For $t=0$, every vector is sent to the zero vector $\mathbf0=[0,0]$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div><span class="figure-title">Scaling one vector</span><span class="figure-step-title" data-scaling-readout>$2\mathbf u$</span></div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open scaling figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="vector-scaling-board" class="jxgbox" data-vector-scaling></div></div>
  <div class="parameter-controls" style="--parameter-count:1">
    <label class="parameter-control"><span>$t$ = <output data-scale-t>2</output></span><input type="range" min="-3" max="3" step="0.25" value="2" data-scale-t-slider></label>
  </div>
  <figcaption class="figure-caption">The dashed arrow is $\mathbf u$; the solid arrow is $t\mathbf u$.</figcaption>
</figure>

Scalar multiplication is compatible with addition:

$$
\boxed{t(\mathbf a+\mathbf b)=t\mathbf a+t\mathbf b},
\qquad
\boxed{(s+t)\mathbf a=s\mathbf a+t\mathbf a}.
$$

These identities follow directly from coordinatewise arithmetic.