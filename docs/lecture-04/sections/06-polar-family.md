## Ellipse, parabola, and hyperbola from one formula {#polar-family}

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">One radial law, three conic regimes</span><span class="figure-step-title" data-conic-family-readout>$r=p/(1+e\cos\theta)$</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open polar conic family in full screen">⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="polar-conic-family-board" class="jxgbox" data-polar-conic-family></div></div>
  <div class="parameter-controls" style="--parameter-count:2"><label class="parameter-control"><span>$p$ = <output data-conic-p>2.4</output></span><input type="range" min="0.5" max="4" step="0.1" value="2.4" data-conic-p-slider></label><label class="parameter-control"><span>$e$ = <output data-conic-e>0.6</output></span><input type="range" min="0" max="2" step="0.02" value="0.6" data-conic-e-slider></label></div>
  <figcaption class="figure-caption">The focal scale $p$ changes size. The eccentricity $e$ changes the type and shape.</figcaption>
</figure>

### Ellipse from the polar formula

Assume $0<e<1$. Then

$$
1-e\le1+e\cos\theta\le1+e,
$$

so the denominator is positive for every angle. The radius is finite in every direction and the curve closes around the focus.

The nearest and farthest points occur at $\theta=0$ and $\theta=\pi$:

$$
\boxed{r_{\min}=\frac{p}{1+e}},
\qquad
\boxed{r_{\max}=\frac{p}{1-e}}.
$$

Thus increasing $e$ makes the two extreme focal distances more unequal.

For a Cartesian ellipse with semimajor axis $a$ and semiminor axis $b$,

$$
e=\sqrt{1-\frac{b^2}{a^2}},
\qquad
p=a(1-e^2)=\frac{b^2}{a}.
$$

Therefore

$$
\boxed{r(\theta)=\frac{a(1-e^2)}{1+e\cos\theta}}.
$$

!!! interpretation "Why the focus-centred form matters"
    The Cartesian equation displays the centre and semiaxes. The polar equation displays the distance from a focus as the direction changes.

### Parabola from the polar formula

Set $e=1$. Then

$$
\boxed{r(\theta)=\frac{p}{1+\cos\theta}}.
$$

For directions near $\theta=\pi$, the denominator approaches zero and the radius grows without bound. This is the geometric reason the curve is open.

Using $1+\cos\theta=2\cos^2(\theta/2)$,

$$
r=\frac{p}{2\cos^2(\theta/2)}.
$$

The vertex lies on the positive polar axis at

$$
\boxed{r=\frac p2}.
$$

!!! interpretation "The exact transition"
    For an ellipse, the denominator stays away from zero. At $e=1$ it reaches zero in one limiting direction. The closed orbit has opened into a parabola.

### Hyperbola from the polar formula

Assume $e>1$. The denominator $1+e\cos\theta$ vanishes at two angles satisfying

$$
\cos\theta=-\frac1e.
$$

These limiting directions are the asymptotic directions of the branch described from the chosen focus.

For $r\ge0$,

$$
\boxed{r=\frac{p}{1+e\cos\theta}}
$$

traces the branch lying on the same side of the directrix as the chosen focus. It does not silently represent the entire two-branch hyperbola.

To recover the complete hyperbola, return to the two-focus geometry or use

$$
\boxed{\frac{x^2}{a^2}-\frac{y^2}{b^2}=1},
$$

which displays both branches at once.

!!! interpretation "Why the polar and Cartesian pictures differ"
    The polar equation is adapted to one chosen focus and one directrix. The Cartesian equation is adapted to the centre and displays both branches symmetrically. Neither description is incomplete when its viewpoint is stated correctly.
