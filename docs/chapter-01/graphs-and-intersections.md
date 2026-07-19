# Elementary Graphs and Their Intersections

Once coordinates are available, equations and inequalities can be read as conditions selecting points of the plane.

## A triangle described by its vertices

!!! example "A triangle described by its vertices"

    Consider

    $$
    A=(-2,0),\qquad B=(3,0),\qquad C=(1,3).
    $$

    Joining the three points gives a triangle.

<div class="math-figure"><svg viewBox="0 0 700 430" role="img" aria-label="Triangle with coordinates"><line x1="50" y1="335" x2="650" y2="335" class="fig-axis"/><line x1="300" y1="390" x2="300" y2="50" class="fig-axis"/><path d="M170 335 L520 335 L380 95 Z" class="fig-main"/><circle cx="170" cy="335" r="5" class="fig-dot"/><circle cx="520" cy="335" r="5" class="fig-dot"/><circle cx="380" cy="95" r="5" class="fig-dot"/><text x="135" y="365" class="fig-label">A=(-2,0)</text><text x="530" y="365" class="fig-label">B=(3,0)</text><text x="350" y="76" class="fig-label">C=(1,3)</text></svg></div>

## A circle and a disk

The equation

$$
x^2+y^2=4
$$

selects exactly the points whose distance from the origin is $2$. It describes the **circle**, only the boundary. The inequality

$$
x^2+y^2\leq4
$$

selects the boundary together with every point inside it, so it describes the **disk**.

<div class="math-figure"><svg viewBox="0 0 760 370" role="img" aria-label="Circle and disk"><g><line x1="70" y1="165" x2="340" y2="165" class="fig-axis"/><line x1="205" y1="30" x2="205" y2="300" class="fig-axis"/><circle cx="205" cy="165" r="85" class="fig-main"/><text x="205" y="335" text-anchor="middle" class="fig-caption">circle: x²+y²=4</text></g><g><line x1="420" y1="165" x2="690" y2="165" class="fig-axis"/><line x1="555" y1="30" x2="555" y2="300" class="fig-axis"/><circle cx="555" cy="165" r="85" fill="#4f85b4" opacity=".18"/><circle cx="555" cy="165" r="85" class="fig-main"/><text x="555" y="335" text-anchor="middle" class="fig-caption">disk: x²+y²≤4</text></g></svg></div>

## Several curves described by equations

$$
\begin{array}{rcll}
x^2+y^2&=&4, & \text{circle},\\[2mm]
\dfrac{x^2}{9}+\dfrac{y^2}{4}&=&1, & \text{ellipse},\\[3mm]
\dfrac{x^2}{4}-y^2&=&1, & \text{hyperbola},\\[3mm]
y&=&\dfrac{x^2}{2}, & \text{parabola}.
\end{array}
$$

At this point these formulas are examples of how equations encode shapes. Their systematic study will come later.

## The graph of the sine function

The equation $y=\sin x$ selects a periodic curve. The same pattern repeats every $2\pi$ units along the $x$-axis.

<div class="math-figure"><svg viewBox="0 0 820 310" role="img" aria-label="Graph of sine"><line x1="45" y1="155" x2="775" y2="155" class="fig-axis"/><line x1="410" y1="35" x2="410" y2="275" class="fig-axis"/><path d="M50 155 C110 55 170 55 230 155 S350 255 410 155 S530 55 590 155 S710 255 770 155" class="fig-main"/><text x="410" y="292" text-anchor="middle" class="fig-caption">y = sin x</text></svg></div>

## A line from a value table

For $y=x+2$,

$$
\begin{array}{c|ccccc}
x&-2&-1&0&1&2\\ \hline
y&0&1&2&3&4
\end{array}
$$

Plotting these points reveals a straight line. The equation is a rule for generating all points of the graph.

## A parabola and a line

A common point of

$$
y=x^2\qquad\text{and}\qquad y=x+2
$$

must satisfy both conditions. Hence

$$
x^2=x+2,
$$

so $(x-2)(x+1)=0$. The graphs meet at $(-1,1)$ and $(2,4)$.

<div class="math-figure"><svg viewBox="0 0 700 470" role="img" aria-label="A parabola and a line"><line x1="55" y1="390" x2="645" y2="390" class="fig-axis"/><line x1="340" y1="440" x2="340" y2="45" class="fig-axis"/><path d="M95 390 Q340 -40 585 390" class="fig-main"/><line x1="80" y1="430" x2="610" y2="80" stroke="#a66d19" stroke-width="3"/><circle cx="250" cy="310" r="5" class="fig-dot"/><circle cx="500" cy="110" r="5" class="fig-dot"/><text x="195" y="295" class="fig-label">(-1,1)</text><text x="512" y="96" class="fig-label">(2,4)</text></svg></div>

!!! abstract "Cartesian space"

    A point belongs to a graph when its coordinates satisfy the equation or inequality defining it. An intersection point belongs to both graphs, so its coordinates satisfy both conditions simultaneously.
