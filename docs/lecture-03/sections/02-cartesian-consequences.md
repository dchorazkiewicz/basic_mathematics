<section id="cartesian-consequences" class="section">
  <h2>What the familiar Cartesian forms let us read</h2>
  <div class="statement"><div class="statement-label">Choose the representation adapted to the question</div><p>The parametric, normal and slope forms are not competing definitions. They expose different information about the same geometric line.</p></div>
  <h3>Intersections with the coordinate axes</h3>
  <div class="derivation"><h3>Impose both defining conditions</h3><p>For $y=mx+b$, setting $x=0$ imposes the $y$-axis condition and gives $(0,b)$. If $m\neq0$, setting $y=0$ gives $x=-b/m$.</p><div class="display-math">$$\boxed{L\cap\{x=0\}=\{(0,b)\}},\qquad \boxed{L\cap\{y=0\}=\left\{\left(-\frac bm,0\right)\right\}}.$$</div></div>
  <p>To find an intersection of two sets, impose both defining conditions at once. Axis intercepts are the simplest example.</p>
  <div class="statement"><div class="statement-label">Example</div><p>For $y=-\tfrac12x+3$, the $y$-intercept is $(0,3)$ and the $x$-intercept is $(6,0)$.</p></div>
  <h3>The line through two points</h3>
  <p>Let $P=(x_1,y_1)$ and $Q=(x_2,y_2)$ be distinct. The displacement $Q-P=[x_2-x_1,y_2-y_1]$ is nonzero and therefore provides a direction.</p>
  <div class="statement"><div class="statement-label">Unique line through two points</div><div class="display-math">$$\boxed{L=\{P+t(Q-P):t\in\mathbb R\}}.$$</div><p>This handles vertical and nonvertical lines uniformly.</p></div>
  <div class="derivation"><h3>Recovering slope notation</h3><p>If $x_1\neq x_2$,</p><div class="display-math">$$\boxed{m=\frac{y_2-y_1}{x_2-x_1}},\qquad \boxed{y-y_1=m(x-x_1)}.$$</div><p>If $x_1=x_2$, the line is vertical: $\boxed{x=x_1}$.</p></div>
  <h3>Parallel lines in slope notation</h3>
  <div class="derivation"><h3>Why equal slopes mean equal directions</h3><p>The lines $y=m_1x+b_1$ and $y=m_2x+b_2$ have direction vectors $[1,m_1]$ and $[1,m_2]$. These are parallel exactly when $m_1=m_2$.</p></div>
  <div class="statement"><div class="statement-label">Parallel nonvertical lines</div><div class="display-math">$$\boxed{L_1\parallel L_2\iff m_1=m_2\text{ and }b_1\neq b_2.}$$</div><p>If also $b_1=b_2$, the equations describe the same line.</p></div>
  <p>Slope formulas are efficient consequences of the vector construction, but the parametric and normal descriptions are more general and extend directly to space.</p>
</section>