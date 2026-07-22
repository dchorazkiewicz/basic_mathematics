## The cosine of a difference of angles {#cosine-difference}

We derive the formula by calculating the same length $AB$ in two different ways. The whole argument is organised around the following diagram.

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The complete geometric setup</span>
      <span class="figure-step-title">All points, angles and lengths used in the proof are defined here.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-unit-circle.svg" alt="Points A and B on the unit circle, with angles alpha and beta, the chord AB, and the perpendicular from A to OB meeting it at H." loading="lazy">
  </div>
  <figcaption class="figure-caption">The points $A$ and $B$ lie on the unit circle centred at $O$. The perpendicular from $A$ to $OB$ meets $OB$ at $H$.</figcaption>
</figure>

Read the notation directly from the figure:

- $OA=OB=1$ because $A$ and $B$ lie on the unit circle;
- the angles of $OA$ and $OB$ from the positive horizontal axis are $\alpha$ and $eta$;
- therefore the angle between $OA$ and $OB$ is
  $$
  \delta=\alpha-\beta;
  $$
- the point $H$ is the foot of the perpendicular from $A$ to the line $OB$;
- hence the triangles $OAH$ and $AHB$ are right-angled at $H$.

For the displayed configuration assume

$$
0\leq\beta\leq\alpha\leq\frac{\pi}{2}.
$$

The identity obtained below extends to arbitrary angles by the usual symmetry and periodicity properties of sine and cosine.

### First calculation: use the coordinates of $A$ and $B$

From the unit-circle definition of sine and cosine,

$$
A=(\cos\alpha,\sin\alpha),
\qquad
B=(\cos\beta,\sin\beta).
$$

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
&=\cos^2\alpha+\sin^2\alpha
  +\cos^2\beta+\sin^2\beta \\
&\quad-2\cos\alpha\cos\beta
      -2\sin\alpha\sin\beta.
\end{aligned}
$$

Using $\cos^2\theta+\sin^2\theta=1$ for both angles,

$$
AB^2
=2-2\bigl(\cos\alpha\cos\beta
           +\sin\alpha\sin\beta\bigr).
\tag{1}
$$

### Second calculation: read the lengths from the right triangles

In the right triangle $OAH$, the hypotenuse is $OA=1$ and the angle at $O$ is $\delta$. Therefore

$$
OH=\cos\delta,
\qquad
AH=\sin\delta.
$$

Since $OB=1$ and $H$ lies between $O$ and $B$ in the displayed configuration,

$$
HB=OB-OH=1-\cos\delta.
$$

Now use the right triangle $AHB$. By the Pythagorean theorem,

$$
\begin{aligned}
AB^2
&=AH^2+HB^2 \\
&=\sin^2\delta+(1-\cos\delta)^2 \\
&=\sin^2\delta+\cos^2\delta+1-2\cos\delta \\
&=2-2\cos\delta.
\end{aligned}
\tag{2}
$$

Because $\delta=\alpha-\beta$,

$$
AB^2=2-2\cos(\alpha-\beta).
$$

### Compare the two calculations

Equations (1) and (2) describe the same squared length $AB^2$. Hence

$$
2-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr)
=
2-2\cos(\alpha-\beta).
$$

Cancelling the common terms gives

!!! theorem "Cosine of a difference"
    $$
    \boxed{\cos(\alpha-\beta)
    =\cos\alpha\cos\beta+\sin\alpha\sin\beta.}
    $$

!!! interpretation "Structure of the proof"
    The diagram supplies one chord $AB$. Its squared length is calculated first from the coordinates of its endpoints and then from the two right triangles created by the perpendicular $AH$. Equating the two calculations produces the identity.