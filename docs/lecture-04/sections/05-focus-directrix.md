## One geometric rule and one shape parameter {#focus-directrix}

Fix a focus $F$ and a directrix $D$. A point $P$ belongs to the conic when

$$
\boxed{d(P,F)=e\,d(P,D)},
$$

where $e>0$ is the eccentricity.

| Eccentricity | Conic |
|---|---|
| $0<e<1$ | ellipse |
| $e=1$ | parabola |
| $e>1$ | hyperbola |

!!! interpretation "Why eccentricity measures shape"
    Small $e$ keeps the focal distance relatively short compared with the distance to the directrix, producing a closed curve. At $e=1$ the two distances balance. For $e>1$ the focal distance may dominate, producing an open hyperbolic branch.

### Deriving the common polar equation

Place the pole at the focus $F=(0,0)$ and choose the directrix

$$
D:x=d,\qquad d>0.
$$

For a point $P=(r,\theta)$, $x=r\cos\theta$. Its distance from the directrix is therefore

$$
d(P,D)=d-r\cos\theta
$$

for the branch lying to the left of the directrix.

!!! derivation "Collecting the radial terms"
    The focus--directrix condition becomes

    $$
    r=e(d-r\cos\theta).
    $$

    Hence

    $$
    r(1+e\cos\theta)=ed.
    $$

    Define the focal parameter

    $$
    \boxed{p=ed}.
    $$

    Then

    $$
    \boxed{r(\theta)=\frac{p}{1+e\cos\theta}}.
    $$

!!! principle "The central idea"
    The formula is not an algebraic trick. The denominator records how the distance to the directrix changes when the viewing ray turns. Changing $e$ changes the balance between the two distances and therefore changes the type of conic.
