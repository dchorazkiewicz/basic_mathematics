## The cosine of a difference of angles {#cosine-difference}

The coordinate construction gives us points, distances and orthogonal projection. These are enough to derive the formula for the cosine of a difference of angles; vectors and the dot product are not needed.

Choose two points $A$ and $B$ on the unit circle centred at $O$. Let the angles of the radii $OA$ and $OB$ from the positive horizontal axis be $\alpha$ and $\beta$. Then

$$
A=(\cos\alpha,\sin\alpha),
\qquad
B=(\cos\beta,\sin\beta),
$$

and

$$
OA=OB=1.
$$

For the diagram assume $0\leq\beta\leq\alpha\leq\pi$ and put

$$
\delta=\alpha-\beta.
$$

The same identity for arbitrary directed angles follows by periodicity and by the fact that cosine is even.

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two points on the unit circle</span>
      <span class="figure-step-title">The angle between $OA$ and $OB$ is $\delta=\alpha-\beta$.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-unit-circle.svg" alt="Two points A and B on a unit circle, with central angle alpha minus beta and chord AB." loading="lazy">
  </div>
  <figcaption class="figure-caption">We compute the same length $AB$ in two ways: first from the coordinates of $A$ and $B$, and then from an elementary right-triangle construction.</figcaption>
</figure>

### The chord length from coordinates

The coordinate formula for distance gives

$$
AB^2
=(\cos\alpha-\cos\beta)^2
 +(\sin\alpha-\sin\beta)^2.
$$

Expanding the squares,

$$
\begin{aligned}
AB^2
&=\cos^2\alpha-2\cos\alpha\cos\beta+\cos^2\beta\\
&\quad+\sin^2\alpha-2\sin\alpha\sin\beta+\sin^2\beta.
\end{aligned}
$$

Using

$$
\cos^2\theta+\sin^2\theta=1,
$$

once for $\theta=\alpha$ and once for $\theta=\beta$, we obtain

$$
AB^2
=2-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr).
\tag{1}
$$

### The same chord length from projection

Drop the perpendicular from $A$ to the straight line $OB$, and denote its foot by $H$. The triangle $OAH$ is right-angled at $H$, its hypotenuse has length $OA=1$, and its angle at $O$ is $\delta$.

Therefore, by the elementary definitions of sine and cosine,

$$
OH=\cos\delta,
\qquad
AH=\sin\delta.
$$

Because $OB=1$,

$$
BH=OB-OH=1-\cos\delta.
$$

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The chord divided by an orthogonal projection</span>
      <span class="figure-step-title">The perpendicular $AH$ produces two lengths determined by $\delta$.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-projection.svg" alt="Point A projected perpendicularly to the line OB at H, with OH equal to cosine delta and AH equal to sine delta." loading="lazy">
  </div>
  <figcaption class="figure-caption">The projection gives $OH=\cos\delta$ and hence $BH=1-\cos\delta$. The segment $AH$ has length $\sin\delta$.</figcaption>
</figure>

The triangle $AHB$ is also right-angled at $H$. Hence the Pythagorean theorem gives

$$
\begin{aligned}
AB^2
&=AH^2+BH^2\\
&=\sin^2\delta+(1-\cos\delta)^2\\
&=\sin^2\delta+1-2\cos\delta+\cos^2\delta\\
&=2-2\cos\delta.
\end{aligned}
$$

Since $\delta=\alpha-\beta$,

$$
AB^2=2-2\cos(\alpha-\beta).
\tag{2}
$$

### Comparing the two descriptions

Equations (1) and (2) describe the same squared length $AB^2$. Therefore

$$
2-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr)
=
2-2\cos(\alpha-\beta).
$$

After subtracting $2$ and dividing by $-2$, we obtain

!!! theorem "Cosine of a difference"
    $$
    \boxed{\cos(\alpha-\beta)
    =\cos\alpha\cos\beta+\sin\alpha\sin\beta.}
    $$

!!! interpretation "Why the formula appears"
    Both sides arise from the same geometric object: the chord joining two points of the unit circle. The right-hand side appears when its length is calculated from Cartesian coordinates; the left-hand side appears when the same length is calculated from the angle between the two radii.