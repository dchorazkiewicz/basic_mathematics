## The cosine of a difference of angles {#cosine-difference}

This final argument shows how a mathematical proof is built. We begin with a complete geometric situation, decide which quantity will be calculated, and then describe that same quantity in two different ways.

The quantity we shall calculate is the length of the chord $AB$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Two movable points on the unit circle</span>
      <span class="figure-step-title">Drag $A$ and $B$. Their distances from $O$ remain equal to $1$.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the unit-circle diagram in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="cosine-difference-unit-circle-board" class="jxgbox" data-cosine-unit-circle aria-label="Interactive unit circle with movable points A and B, their angles, coordinates, and chord AB"></div>
  </div>
  <figcaption class="figure-caption">Move $A$ and $B$ along the first-quadrant arc. The angles, coordinates and difference $\delta=|\alpha-\beta|$ change, but $OA=OB=1$ at every position.</figcaption>
</figure>

Let the radii $OA$ and $OB$ make angles $\alpha$ and $\beta$ with the positive horizontal axis. For the displayed configuration we work in the first quadrant. When $\alpha\geq\beta$, the angle between the radii is

$$
\delta=\alpha-\beta.
$$

Because the circle has radius $1$,

$$
OA=OB=1.
$$

From the unit-circle definitions of sine and cosine, the endpoints of the two radii are

$$
A=(\cos\alpha,\sin\alpha),
\qquad
B=(\cos\beta,\sin\beta).
$$

The proof now has a precise plan:

1. calculate $AB^2$ from the coordinates of $A$ and $B$;
2. rotate our view so that $OB$ becomes horizontal, and calculate the same $AB^2$ using only the angle $\delta$ and two right triangles;
3. equate the two answers.

### First calculation: use the coordinates of $A$ and $B$

The horizontal difference between $A$ and $B$ is

$$
\cos\alpha-\cos\beta,
$$

and the vertical difference is

$$
\sin\alpha-\sin\beta.
$$

The coordinate formula for distance therefore gives

$$
AB^2
=(\cos\alpha-\cos\beta)^2
 +(\sin\alpha-\sin\beta)^2.
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

we use this identity once for $\theta=\alpha$ and once for $\theta=\beta$. Hence

$$
AB^2
=2-2\bigl(\cos\alpha\cos\beta
           +\sin\alpha\sin\beta\bigr).
\tag{1}
$$

This is the first expression for the squared length of the chord.

### Rotate the picture and keep only the angle difference

For the second calculation, the absolute positions of $OA$ and $OB$ relative to the original coordinate axes are irrelevant. Only their lengths and the angle between them matter.

We therefore rotate the whole configuration until $OB$ lies horizontally. A rotation does not change lengths or angles. After this change of viewpoint,

- $OB$ is the horizontal unit segment;
- $OA$ still has length $1$;
- the angle between $OA$ and $OB$ is still $\delta$;
- the chord $AB$ has exactly the same length as before.

Now drop the perpendicular from $A$ to the horizontal segment $OB$, and call its foot $H$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The rotated geometric picture</span>
      <span class="figure-step-title">Drag $A$ along the faint unit circle. The segment $OB$ stays horizontal and $AH$ stays perpendicular to it.</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the rotated projection diagram in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="cosine-difference-reduced-board" class="jxgbox" data-cosine-reduced aria-label="Interactive rotated triangle with horizontal OB, movable unit point A, perpendicular projection H, and the lengths OH, AH, and HB"></div>
  </div>
  <figcaption class="figure-caption">The faint circle shows that $A$ moves while $OA=1$ remains fixed. Since $OB$ is horizontal, the perpendicular $AH$ is vertical and the right angle at $H$ is immediately visible.</figcaption>
</figure>

### Second calculation: read the lengths from the rotated picture

Start with the right triangle $OAH$.

Its hypotenuse is $OA=1$, and the angle at $O$ is $\delta$. By the elementary definition of cosine,

$$
\cos\delta=\frac{OH}{OA}.
$$

Since $OA=1$,

$$
OH=\cos\delta.
$$

Similarly, by the elementary definition of sine,

$$
\sin\delta=\frac{AH}{OA},
$$

so

$$
AH=\sin\delta.
$$

The whole horizontal segment $OB$ has length $1$. The point $H$ divides it into the two segments $OH$ and $HB$, so

$$
OB=OH+HB.
$$

Therefore

$$
HB=OB-OH=1-\cos\delta.
$$

We now use the second right triangle, $AHB$. Its hypotenuse is precisely the chord $AB$ calculated earlier. The Pythagorean theorem gives

$$
AB^2=AH^2+HB^2.
$$

Substitute the lengths obtained from the first right triangle:

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

Since $\delta=\alpha-\beta$,

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
    The proof did not begin with the desired formula. It began with one geometric quantity, the chord $AB$. The coordinate description of its endpoints produced one expression for $AB^2$. Rotating the picture, projecting $A$ onto the horizontal segment $OB$, and applying the Pythagorean theorem produced another. The identity follows because both calculations describe exactly the same unchanged length.