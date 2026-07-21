<section id="classical-conics" class="section">
  <h2>The classical conics before polar coordinates</h2>
  <h3>Circle and ellipse: from one scale to two</h3>
  <p>A circle centred at the origin is described by</p><div class="display-math">$$\boxed{x^2+y^2=R^2}.$$</div>
  <p>Its equation treats every direction equally. The parameterisation</p><div class="display-math">$$\boxed{x=R\cos t,\qquad y=R\sin t}$$</div><p>makes this symmetry visible: one angle determines one point on the circle.</p>
  <p>An ellipse introduces two perpendicular scales:</p><div class="display-math">$$\boxed{\frac{x^2}{a^2}+\frac{y^2}{b^2}=1},\qquad a\ge b>0.$$</div>
  <p>It is parameterised by</p><div class="display-math">$$\boxed{x=a\cos t,\qquad y=b\sin t}.$$</div><p>The same circular parameter is stretched by different factors in the two coordinate directions.</p>
  <p>Define $c=\sqrt{a^2-b^2}$. The foci are $F_1=(-c,0)$ and $F_2=(c,0)$, and every point $P$ on the ellipse satisfies</p><div class="display-math">$$\boxed{d(P,F_1)+d(P,F_2)=2a}.$$</div>
  <div class="statement"><div class="statement-label">Two useful descriptions</div><p>The centre-based equation exposes symmetry and semiaxes. The focal description exposes distances from the points that later become natural locations of a central force source.</p></div>

  <h3>Parabola: equal distance from a focus and a line</h3>
  <p>Fix a focus $F=(p,0)$ and a directrix $D:x=-p$, where $p>0$. The parabola is the set of points $P=(x,y)$ satisfying</p><div class="display-math">$$\boxed{d(P,F)=d(P,D)}.$$</div>
  <div class="derivation"><h3>Deriving the Cartesian equation</h3><p>Since</p><div class="display-math">$$d(P,F)=\sqrt{(x-p)^2+y^2},\qquad d(P,D)=x+p,$$</div><p>squaring gives</p><div class="display-math">$$(x-p)^2+y^2=(x+p)^2,$$</div><p>and therefore</p><div class="display-math">$$\boxed{y^2=4px}.$$</div></div>
  <p>A convenient parameterisation is</p><div class="display-math">$$\boxed{x=pt^2,\qquad y=2pt}.$$</div><p>Substitution gives $y^2=4p^2t^2=4px$, so every parameter value produces a point on the curve.</p>
  <div class="statement"><div class="statement-label">Why the parabola is the boundary case</div><p>The parabola is neither closed like an ellipse nor split into two branches like a hyperbola. It will later appear exactly at the transition between bounded and unbounded focal motion.</p></div>

  <h3>Hyperbola: two complete branches and two asymptotes</h3>
  <p>For $a>0$ and $b>0$, the standard hyperbola is</p><div class="display-math">$$\boxed{\frac{x^2}{a^2}-\frac{y^2}{b^2}=1}.$$</div>
  <p>Define $c=\sqrt{a^2+b^2}$. The foci are $F_1=(-c,0)$ and $F_2=(c,0)$, and the geometric condition is</p><div class="display-math">$$\boxed{|d(P,F_1)-d(P,F_2)|=2a}.$$</div><p>The absolute value is essential: one sign describes the right branch and the opposite sign describes the left branch.</p>
  <p>The asymptotes</p><div class="display-math">$$\boxed{y=\pm\frac ba x}$$</div><p>are not parts of the hyperbola. They record the directions approached by both branches far from the centre.</p>
  <div class="statement"><div class="statement-label">Do not confuse a branch with the whole hyperbola</div><p>A focus-centred polar equation naturally describes the branch visible from the chosen focus and directrix. The Cartesian equation remains the cleanest single picture of the complete two-branch curve.</p></div>

  <h3>Four familiar shapes, one geometric problem</h3>
  <div class="display-math">$$\begin{array}{c|c|c}\text{curve}&\text{distinguished data}&\text{large-scale behaviour}\\\hline\text{circle}&\text{one centre and one radius}&\text{closed}\\\text{ellipse}&\text{two foci, fixed sum}&\text{closed}\\\text{parabola}&\text{one focus and one directrix}&\text{one open branch}\\\text{hyperbola}&\text{two foci, fixed difference}&\text{two open branches}\end{array}$$</div>
  <div class="statement"><div class="statement-label">The need for a new coordinate system</div><p>From a focus, a point on a conic is determined by two questions: in which direction do we look, and how far must we travel in that direction before reaching the curve? These are exactly the questions answered by polar coordinates.</p></div>
</section>