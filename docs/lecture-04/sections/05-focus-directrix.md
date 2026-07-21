<section id="focus-directrix" class="section">
  <h2>One geometric rule and one shape parameter</h2>
  <p>Fix a focus $F$ and a directrix $D$. A point $P$ belongs to the conic when</p><div class="display-math">$$\boxed{d(P,F)=e\,d(P,D)},$$</div><p>where $e>0$ is the eccentricity.</p>
  <div class="display-math">$$\begin{array}{c|c}0<e<1&\text{ellipse},\\e=1&\text{parabola},\\e>1&\text{hyperbola}.\end{array}$$</div>
  <div class="statement"><div class="statement-label">Why eccentricity measures shape</div><p>Small $e$ keeps the focal distance relatively short compared with the distance to the directrix, producing a closed curve. At $e=1$ the two distances balance. For $e>1$ the focal distance may dominate, producing an open hyperbolic branch.</p></div>

  <h3>Deriving the common polar equation</h3>
  <p>Place the pole at the focus $F=(0,0)$ and choose the directrix</p><div class="display-math">$$D:x=d,\qquad d>0.$$</div>
  <p>For a point $P=(r,\theta)$, $x=r\cos\theta$. Its distance from the directrix is therefore</p><div class="display-math">$$d(P,D)=d-r\cos\theta$$</div><p>for the branch lying to the left of the directrix.</p>
  <div class="derivation"><h3>Collecting the radial terms</h3><p>The focus–directrix condition becomes</p><div class="display-math">$$r=e(d-r\cos\theta).$$</div><p>Hence</p><div class="display-math">$$r(1+e\cos\theta)=ed.$$</div><p>Define the focal parameter</p><div class="display-math">$$\boxed{p=ed}.$$</div><p>Then</p><div class="display-math">$$\boxed{r(\theta)=\frac{p}{1+e\cos\theta}}.$$</div></div>
  <div class="statement"><div class="statement-label">The central idea</div><p>The formula is not an algebraic trick. The denominator records how the distance to the directrix changes when the viewing ray turns. Changing $e$ changes the balance between the two distances and therefore changes the type of conic.</p></div>
</section>