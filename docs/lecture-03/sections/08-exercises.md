<section id="exercises" class="section exercises-section">
  <div class="exercises-head"><div><p class="eyebrow">Review exercises</p><h2>Practice and development</h2><p>The first ten exercises are computational and graphical. The next ten require explanation, derivation, or comparison of representations.</p></div><a class="download-button" href="lecture-03-exercises.md" download>Download exercises as Markdown</a></div>
  <div class="exercise-group"><h3>Elementary computational and graphical exercises</h3><ol>
    <li>Write a parametric equation of the line through $P=(2,-1)$ with direction $\mathbf v=[3,4]$. Find the points corresponding to $t=-1,0,2$ and plot them.</li>
    <li>Find a normal equation and an implicit equation of the line through $P=(1,3)$ with normal vector $\mathbf n=[2,-1]$. Check that $P$ satisfies the resulting equation.</li>
    <li>Convert $2x-3y=6$ to slope-intercept form. Find both axis intercepts and give one direction vector and one normal vector.</li>
    <li>Find the line through $A=(-1,2)$ and $B=(3,-4)$ in parametric, implicit, and slope-intercept form. Verify that both points satisfy every description.</li>
    <li>Find and plot the intersection of $L_1:y=2x-1$ and $L_2:x+y=5$. Verify the point in both equations.</li>
    <li>Determine whether each pair is parallel, perpendicular, identical, or neither: (a) $2x-y=1$ and $4x-2y=7$; (b) $x+2y=3$ and $2x-y=4$; (c) $3x+y=5$ and $6x+2y=10$.</li>
    <li>Compute the distance from $P=(3,1)$ to $2x-y-4=0$. Find the foot of the perpendicular and verify the distance directly from the coordinates.</li>
    <li>Write a parametric equation of the plane through $P=(1,2,0)$ with directions $\mathbf u=[1,0,1]$ and $\mathbf v=[0,2,-1]$. Produce four points of the plane.</li>
    <li>For the preceding plane, compute $\mathbf n=\mathbf u\times\mathbf v$ and derive an implicit equation. Verify that the four points satisfy it.</li>
    <li>Find the plane through $P=(1,0,0)$, $Q=(0,1,0)$, and $R=(0,0,1)$. Give parametric and normal forms and compute the distance from the origin.</li>
  </ol></div>
  <div class="exercise-group exercise-group--reasoning"><h3>Development and reasoning exercises</h3><ol start="11">
    <li>Explain why replacing $\mathbf v$ by $2\mathbf v$ or $-\mathbf v$ in $L=\{P_0+t\mathbf v:t\in\mathbb R\}$ produces the same line although the parameter traverses it differently.</li>
    <li>Explain why slope-intercept form cannot represent a vertical line without a special case, while parametric and normal forms handle it naturally. Give one vertical line in all applicable forms.</li>
    <li>Starting with $\mathbf v=[a,b]$, construct a normal vector and derive an implicit equation of the line through $P_0=(x_0,y_0)$. Explain why direction and normal descriptions encode the same line.</li>
    <li>For $L=\{P_0+t\mathbf v:t\in\mathbb R\}$ and a point $P$, derive $Q=P_0+\operatorname{proj}_{\mathbf v}(P-P_0)$. Explain why every other point of the line is farther from $P$.</li>
    <li>A student says two lines are perpendicular whenever their direction vectors have zero dot product. Explain why this is sufficient in the plane but requires an intersection condition for geometric lines in space.</li>
    <li>Compare $P=P_0+t\mathbf v$ with $P=P_0+s\mathbf u+t\mathbf v$. Use one concrete line and plane to explain why one direction produces a one-dimensional set and two nonparallel directions a two-dimensional set.</li>
    <li>Verify in one numerical example that $\mathbf u\times\mathbf v$ is perpendicular to both plane directions. Explain why reversing the order changes the normal but not the plane.</li>
    <li>Give three collinear points and three noncollinear points. Explain what happens to $(Q-P)\times(R-P)$ in each case.</li>
    <li>Determine the relative position of $\Pi_1:x+y+z=1$ and $\Pi_2:x-y+z=3$. Find a direction and one point of their intersection line. Explain why the cross product of normals gives that direction.</li>
    <li>Give a strategy for choosing parametric or normal descriptions when constructing from points or directions, testing membership, finding intersections, checking parallelism or perpendicularity, and computing distance. Support it with one line and one plane example.</li>
  </ol></div>
</section>