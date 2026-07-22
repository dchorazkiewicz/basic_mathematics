## The cosine of a difference of angles {#cosine-difference}

This final argument shows how a mathematical proof is built. We begin with a complete geometric situation, decide which quantity will be calculated, and then describe that same quantity in two different ways.

The quantity we shall calculate is the length of the chord $AB$.

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two points on the unit circle</span>
      <span class="figure-step-title">The diagram introduces every object used in the proof.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-unit-circle.svg" alt="Points A and B on the unit circle with angles alpha and beta, angle difference delta, radii OA and OB, and chord AB." loading="lazy">
  </div>
  <figcaption class="figure-caption">The same chord $AB$ will be calculated first from the coordinates of its endpoints and then from the angle $\delta=\alpha-eta$ between the two radii.</figcaption>
</figure>

Let the radii $OA$ and $OB$ make angles $\alpha$ and $eta$ with the positive horizontal axis. For the displayed configuration assume

$$
0\leqeta\leq\alpha\leqrac{\pi}{2}.
$$

Because the circle has radius $1$,

$$
OA=OB=1.
$$

From the unit-circle definitions of sine and cosine, the endpoints of the two radii are

$$
A=(\cos\alpha,\sin\alpha),
\qquad
B=(\coseta,\sineta).
$$

The angle between the radii is the difference of their angles from the horizontal axis. We therefore write

$$
\delta=\alpha-eta.
$$

The proof now has a precise plan:

1. calculate $AB^2$ from the coordinates of $A$ and $B$;
2. calculate the same $AB^2$ using only the angle $\delta$ and elementary right triangles;
3. equate the two answers.

### First calculation: use the coordinates of $A$ and $B$

The horizontal difference between $A$ and $B$ is

$$
\cos\alpha-\coseta,
$$

and the vertical difference is

$$
\sin\alpha-\sineta.
$$

The coordinate formula for distance therefore gives

$$
AB^2
=(\cos\alpha-\coseta)^2
 +(\sin\alpha-\sineta)^2.
$$

We expand both squares without omitting any term:

$$
\begin{aligned}
AB^2
&=\cos^2\alpha-2\cos\alpha\cos\beta+\cos^2\beta\\
&\quad+\sin^2\alpha-2\sin\alpha\sin\beta+\sin^2\beta.
\end{aligned}
$$

Now group together the terms belonging to the same angle:

$$
\begin{aligned}
AB^2
&=(\cos^2\alpha+\sin^2\alpha)
 +(\cos^2\beta+\sin^2\beta)\\
&\quad-2\cos\alpha\cos\beta
      -2\sin\alpha\sin\beta.
\end{aligned}
$$

Since

$$
\cos^2\theta+\sin^2\theta=1,
$$

we may use this identity once for $	heta=\alpha$ and once for $	heta=eta$. Hence

$$
AB^2
=2-2\bigl(\cos\alpha\cos\beta
           +\sin\alpha\sin\beta\bigr).
\tag{1}
$$

This is the first expression for the squared length of the chord.

### Now forget the circle and keep only what is needed

For the second calculation the whole coordinate system and the whole circle are no longer needed. We retain only the triangle $OAB$, the unit lengths $OA=OB=1$, and the angle

$$
\angle AOB=\delta.
$$

From $A$, construct the perpendicular to the line $OB$. Let $H$ be its intersection with $OB$. This single construction divides the original triangle into the two right triangles $OAH$ and $AHB$.

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The reduced geometric picture</span>
      <span class="figure-step-title">The circle has disappeared; only the lengths needed for the second calculation remain.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-projection.svg" alt="Triangle OAB with perpendicular AH to OB at H, angle delta, and the lengths OH, AH, and HB labelled." loading="lazy">
  </div>
  <figcaption class="figure-caption">The point $H$ is the foot of the perpendicular from $A$ to $OB$. The two right triangles make the lengths $OH$, $AH$, and $HB$ directly accessible.</figcaption>
</figure>

### Second calculation: use the angle $\delta$

Start with the right triangle $OAH$.

Its hypotenuse is $OA=1$, and the angle at $O$ is $\delta$. By the elementary definitions of cosine and sine,

$$
\cos\delta=\frac{OH}{OA}=OH,
$$

and

$$
\sin\delta=\frac{AH}{OA}=AH.
$$

Thus

$$
OH=\cos\delta,
\qquad
AH=\sin\delta.
$$

The whole segment $OB$ has length $1$. Since $H$ lies between $O$ and $B$ in the displayed configuration,

$$
OB=OH+HB.
$$

Therefore

$$
HB=OB-OH=1-\cos\delta.
$$

We now use the second right triangle, $AHB$. Its hypotenuse is precisely the chord $AB$ that was calculated earlier. The Pythagorean theorem gives

$$
AB^2=AH^2+HB^2.
$$

Substitute the two lengths read from the preceding construction:

$$
AB^2
=\sin^2\delta+(1-\cos\delta)^2.
$$

Expand the square:

$$
AB^2
=\sin^2\delta+1-2\cos\delta+\cos^2\delta.
$$

Group the sine and cosine squares:

$$
AB^2
=(\sin^2\delta+\cos^2\delta)+1-2\cos\delta.
$$

Using

$$
\sin^2\delta+\cos^2\delta=1,
$$

we obtain

$$
AB^2=2-2\cos\delta.
\tag{2}
$$

Since $\delta=\alpha-eta$,

$$
AB^2=2-2\cos(\alpha-\beta).
\tag{3}
$$

This is the second expression for the same squared chord length.

### Compare the two calculations

Equation (1) and equation (3) both describe $AB^2$. Therefore

$$
2-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr)
=
2-2\cos(\alpha-\beta).
$$

Subtract $2$ from both sides:

$$
-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr)
=
-2\cos(\alpha-\beta).
$$

Finally, divide both sides by $-2$:

!!! theorem "Cosine of a difference"
    $$
    \boxed{\cos(\alpha-\beta)
    =\cos\alpha\cos\beta+\sin\alpha\sin\beta.}
    $$

!!! interpretation "How the proof was constructed"
    The proof did not begin with the desired formula. It began with one geometric quantity, the chord $AB$. The coordinate description of the endpoints produced one expression for $AB^2$. The angle between the radii, together with one perpendicular construction, produced another. The identity follows because both calculations describe exactly the same length.