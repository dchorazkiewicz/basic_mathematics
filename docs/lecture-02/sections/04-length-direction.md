<section id="length-direction" class="section">
  <h2>How much motion and in which direction?</h2>

  <p>The coordinate pair of a vector records two changes, but it does not immediately answer two geometric questions:</p>
  <div class="statement">
    <div class="statement-label">Two questions carried by every nonzero vector</div>
    <ol>
      <li>How long is the displacement?</li>
      <li>In which direction does it point?</li>
    </ol>
  </div>

  <p>Let $\mathbf v=[v_1,v_2]$ be drawn from the origin. Its endpoint, together with its horizontal and vertical coordinate changes, forms a right triangle. The legs have lengths $|v_1|$ and $|v_2|$, while the vector itself is the hypotenuse.</p>

  <figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar">
      <div><span class="figure-title">A vector as a right triangle</span><span class="figure-step-title" data-direction-readout>$\mathbf v=[4,3]$</span></div>
      <button class="icon-button" type="button" data-fullscreen aria-label="Open vector direction figure in full screen">⛶</button>
    </div>
    <div class="figure-stage jsx-stage"><div id="vector-direction-board" class="jxgbox" data-vector-direction></div></div>
    <figcaption class="figure-caption">The vector, its two coordinate changes, and its inclination are displayed simultaneously.</figcaption>
  </figure>

  <div class="derivation">
    <h3>Length from the Pythagorean theorem</h3>
    <div class="display-math">$$\|\mathbf v\|^2=v_1^2+v_2^2.$$</div>
    <p>The length is nonnegative, so</p>
    <div class="display-math">$$\boxed{\|\mathbf v\|=\sqrt{v_1^2+v_2^2}}.$$</div>
  </div>

  <div class="statement">
    <div class="statement-label">Definition</div>
    <p>The Euclidean length, or norm, of $\mathbf v=[v_1,v_2]$ is</p>
    <div class="display-math">$$\boxed{\|\mathbf v\|=\sqrt{v_1^2+v_2^2}}.$$</div>
    <p>The double bars distinguish the vector from the number measuring its length.</p>
  </div>

  <div class="statement">
    <div class="statement-label">Basic consequences</div>
    <div class="display-math">$$\boxed{\|\mathbf0\|=0},\qquad \boxed{\mathbf v\neq\mathbf0\implies\|\mathbf v\|&gt;0}.$$</div>
    <p>For points $A$ and $B$,</p>
    <div class="display-math">$$\boxed{d_E(A,B)=\|B-A\|}. $$</div>
  </div>

  <p>The vector $B-A$ records how to move from $A$ to $B$, while its norm records the Euclidean distance travelled. The same object therefore carries both directional and metric information.</p>

  <h3>Separating magnitude from direction</h3>
  <p>Assume $\mathbf v\neq\mathbf0$ and let $\alpha$ be its angle of inclination measured from the positive $x$-axis.</p>

  <div class="derivation">
    <p>The right triangle gives</p>
    <div class="display-math">$$\cos\alpha=\frac{v_1}{\|\mathbf v\|},\qquad \sin\alpha=\frac{v_2}{\|\mathbf v\|}.$$</div>
    <p>Therefore</p>
    <div class="display-math">$$v_1=\|\mathbf v\|\cos\alpha,\qquad v_2=\|\mathbf v\|\sin\alpha.$$</div>
  </div>

  <div class="statement">
    <div class="statement-label">Theorem</div>
    <p>Every nonzero vector admits the decomposition</p>
    <div class="display-math">$$\boxed{\mathbf v=\|\mathbf v\|[\cos\alpha,\sin\alpha]}. $$</div>
    <p>The vector $[\cos\alpha,\sin\alpha]$ has length one.</p>
  </div>

  <div class="statement">
    <div class="statement-label">The two pieces of a vector</div>
    <ul>
      <li>$\|\mathbf v\|$ says how much displacement occurs;</li>
      <li>$[\cos\alpha,\sin\alpha]$ says in which direction it occurs.</li>
    </ul>
    <p>Thus every nonzero vector is a positive magnitude multiplied by a unit direction.</p>
  </div>
</section>