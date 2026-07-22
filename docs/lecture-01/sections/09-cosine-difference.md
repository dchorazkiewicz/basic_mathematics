## The cosine of a difference of angles {#cosine-difference}

We derive the formula by computing one and the same length in two different ways. No vectors and no dot product are used.

Choose two points $A$ and $B$ on the unit circle centred at $O$. Let

$$
A=(\cos\alpha,\sin\alpha),
\qquad
B=(\cos\beta,\sin\beta).
$$

The angle between the radii $OA$ and $OB$ is

$$
\delta=\alpha-\beta.
$$

For the diagram we assume $0\leq\delta\leq\frac{\pi}{2}$. The general identity follows from the usual symmetry and periodicity properties of sine and cosine.

### First calculation: use the coordinates of $A$ and $B$

By the distance formula,

$$
AB^2
=(\cos\alpha-\cos\beta)^2
 +(\sin\alpha-\sin\beta)^2.
$$

Expanding and using $\cos^2\theta+\sin^2\theta=1$ twice gives

$$
\begin{aligned}
AB^2
&=\cos^2\alpha+\sin^2\alpha
  +\cos^2\beta+\sin^2\beta \\
&\quad-2\cos\alpha\cos\beta
      -2\sin\alpha\sin\beta \\
&=2-2\bigl(\cos\alpha\cos\beta
             +\sin\alpha\sin\beta\bigr).
\end{aligned}
\tag{1}
$$

### Second calculation: use only the angle $\delta$

Drop the perpendicular from $A$ to the line $OB$, and call its foot $H$.

Because $OA=1$ and the angle $AOH$ equals $\delta$, the right triangle $OAH$ gives

$$
OH=\cos\delta,
\qquad
AH=\sin\delta.
$$

Since $OB=1$,

$$
HB=OB-OH=1-\cos\delta.
$$

<figure class="figure-panel">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One chord, one perpendicular</span>
      <span class="figure-step-title">The perpendicular from $A$ to $OB$ converts the angle $\delta$ into ordinary lengths.</span>
    </div>
  </div>
  <div class="figure-stage">
    <img src="../assets/images/lecture-01/cosine-difference-unit-circle.svg" alt="Triangle OAB with OA and OB of unit length and a perpendicular AH to OB." loading="lazy">
  </div>
  <figcaption class="figure-caption">The construction gives $OH=\cos\delta$, $AH=\sin\delta$ and $HB=1-\cos\delta$.</figcaption>
</figure>

Now apply the Pythagorean theorem in the right triangle $AHB$:

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

Since $\delta=\alpha-\beta$,

$$
AB^2=2-2\cos(\alpha-\beta).
$$

### Compare the two results

Equations (1) and (2) are two expressions for the same number $AB^2$. Therefore

$$
2-2\bigl(\cos\alpha\cos\beta+\sin\alpha\sin\beta\bigr)
=
2-2\cos(\alpha-\beta).
$$

After cancelling the common terms,

!!! theorem "Cosine of a difference"
    $$
    \boxed{\cos(\alpha-\beta)
    =\cos\alpha\cos\beta+\sin\alpha\sin\beta.}
    $$

!!! interpretation "What was actually proved"
    The proof uses one geometric object: the chord $AB$ of the unit circle. Its length is calculated once from the Cartesian coordinates of its endpoints and once from a perpendicular projection. Equating the two calculations produces the identity.