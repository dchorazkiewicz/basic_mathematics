<section id="distance" class="section">
  <h2>The coordinate formula for distance</h2>
  <p>For points $P=(x_1,y_1)$ and $Q=(x_2,y_2)$, introduce the auxiliary point $R=(x_2,y_1)$. Then $PR$ is horizontal, $RQ$ is vertical, and $PQR$ is a right triangle.</p>

  <figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
    <div class="figure-toolbar">
      <div>
        <span class="figure-title">Distance as a right triangle</span>
        <span class="figure-step-title">Decomposition into horizontal and vertical components</span>
      </div>
      <button class="icon-button" type="button" data-fullscreen aria-label="Open distance figure in full screen">⛶</button>
    </div>
    <div class="figure-stage jsx-stage">
      <div id="distance-board" class="jxgbox" data-distance-geometry aria-label="Interactive geometric derivation of the Euclidean distance formula"></div>
    </div>
    <figcaption class="figure-caption">Move $P$ or $Q$. The horizontal difference, vertical difference and Euclidean distance update together.</figcaption>
  </figure>

  <p>The two legs have lengths $|x_2-x_1|$ and $|y_2-y_1|$. Applying the Pythagorean theorem to this visible triangle gives the coordinate formula.</p>
  <div class="math-block">
    $$
    \begin{aligned}
    d_E(P,Q)^2 &= (x_2-x_1)^2+(y_2-y_1)^2,\\
    d_E(P,Q) &= \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
    \end{aligned}
    $$
  </div>
  <div class="statement theorem">
    <div class="statement-label">Interpretation</div>
    <p>The formula does not invent distance. It translates the already existing Euclidean length of the segment $PQ$ into arithmetic performed on coordinates.</p>
  </div>
</section>
