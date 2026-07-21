<section id="scaling" class="section">
  <h2>Parallel vectors, multiplication by a number, and linear combinations</h2>

  <p>Before multiplying a vector by a number, we first identify the geometric relation that this operation is meant to preserve.</p>

  <div class="statement">
    <div class="statement-label">Parallel vectors from length equalities</div>
    <p>Two nonzero free vectors $\mathbf a$ and $\mathbf b$ have the same direction and the same orientation when placing them successively produces no shortening:</p>
    <div class="display-math">$$|\mathbf a+\mathbf b|=|\mathbf a|+|\mathbf b|.$$</div>
    <p>They have the same direction and opposite orientations when</p>
    <div class="display-math">$$|\mathbf a-\mathbf b|=|\mathbf a|+|\mathbf b|.$$</div>
    <p>In both cases the vectors are called parallel.</p>
  </div>

  <p>For $\mathbf a=[a_1,a_2]$ and $\mathbf b=[b_1,b_2]$, equality in the triangle inequality gives the coordinate criterion</p>
  <div class="display-math">$$\boxed{\mathbf a\parallel\mathbf b\iff \lambda\mathbf a=\mu\mathbf b}$$</div>
  <p>for some real numbers $\lambda$ and $\mu$ that are not both zero. In the plane this may also be written as</p>
  <div class="display-math">$$\boxed{a_1b_2-a_2b_1=0.}$$</div>
  <p>If $\lambda$ and $\mu$ have the same sign, the orientations agree; if their signs are opposite, the orientations are opposite.</p>

  <h3>Multiplication by a real number</h3>
  <p>If $t&gt;0$, then $t\mathbf a$ is parallel to $\mathbf a$, has the same orientation, and</p>
  <div class="display-math">$$|t\mathbf a|=t|\mathbf a|.$$</div>
  <p>If $t&lt;0$, the orientation is reversed and</p>
  <div class="display-math">$$|t\mathbf a|=|t|\,|\mathbf a|.$$</div>
  <p>For $t=0$, the result is the zero vector. In coordinates,</p>
  <div class="display-math">$$\boxed{t[a_1,a_2]=[ta_1,ta_2].}$$</div>

  <figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar">
      <div><span class="figure-title">Scaling and combining vectors</span><span class="figure-step-title" data-scaling-readout>$2\mathbf u-\mathbf v$</span></div>
      <button class="icon-button" type="button" data-fullscreen aria-label="Open scaling figure in full screen">⛶</button>
    </div>
    <div class="figure-stage jsx-stage"><div id="vector-scaling-board" class="jxgbox" data-vector-scaling></div></div>
    <div class="parameter-controls" style="--parameter-count:2">
      <label class="parameter-control"><span>$a$ = <output data-scale-a>2</output></span><input type="range" min="-3" max="3" step="0.25" value="2" data-scale-a-slider></label>
      <label class="parameter-control"><span>$b$ = <output data-scale-b>-1</output></span><input type="range" min="-3" max="3" step="0.25" value="-1" data-scale-b-slider></label>
    </div>
    <figcaption class="figure-caption">The two scaled displacements are added head to tail to form $a\mathbf u+b\mathbf v$.</figcaption>
  </figure>

  <p>Scalar multiplication is compatible with addition:</p>
  <div class="display-math">$$\boxed{t(\mathbf a+\mathbf b)=t\mathbf a+t\mathbf b},\qquad \boxed{(s+t)\mathbf a=s\mathbf a+t\mathbf a}. $$</div>
  <p>These identities follow from coordinatewise arithmetic, while geometrically they say that scaling commutes with combining directed changes.</p>

  <h3>Linear combinations: what addition and scaling can build</h3>
  <div class="statement">
    <div class="statement-label">Definition</div>
    <p>Given vectors $\mathbf u,\mathbf v$ and real numbers $a,b$, the vector</p>
    <div class="display-math">$$\boxed{a\mathbf u+b\mathbf v}$$</div>
    <p>is called a linear combination of $\mathbf u$ and $\mathbf v$.</p>
  </div>

  <p>First scale $\mathbf u$ by $a$ and $\mathbf v$ by $b$, then add the resulting displacements. A linear combination is therefore not a new operation.</p>

  <div class="statement">
    <div class="statement-label">One direction versus two directions</div>
    <p>A single nonzero vector generates only the line</p>
    <div class="display-math">$$\{\lambda\mathbf v:\lambda\in\mathbb R\}.$$</div>
    <p>Two parallel vectors still generate one line. Two nonparallel vectors provide two independent directions and can generate the whole plane.</p>
  </div>

  <div class="derivation">
    <h3>Why nonparallel directions reach the plane</h3>
    <p>If $\mathbf u$ and $\mathbf v$ are parallel, every multiple of either vector lies on the same line, so every sum $a\mathbf u+b\mathbf v$ remains on that line. If they are not parallel, the parallelogram construction decomposes any target displacement into one component along each direction. The two coefficients record those two signed motions.</p>
  </div>

  <div class="statement">
    <div class="statement-label">Theorem</div>
    <p>Two nonparallel vectors $\mathbf u$ and $\mathbf v$ determine every vector in the plane uniquely in the form</p>
    <div class="display-math">$$\boxed{\mathbf w=a\mathbf u+b\mathbf v}. $$</div>
    <p>A basis is precisely such a pair of independent directions, and basis coordinates are the coefficients in this reconstruction.</p>
  </div>
</section>