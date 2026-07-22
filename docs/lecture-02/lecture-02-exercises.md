# Lecture 02 — Vectors, Bases, and Coordinate Systems

## A. Elementary computational and graphical exercises

1. Let $A=(1,2)$ and $B=(5,-1)$. Compute the ordinary point difference $B-A$ and the free vector $[B-A]=[\overrightarrow{AB}]$. Find the points $O\oplus[B-A]$ for $O=(0,0)$ and $P\oplus[B-A]$ for $P=(-2,3)$, and draw the corresponding anchored representatives.

2. For $\mathbf u=[3,-2]$ and $\mathbf v=[-1,4]$, compute $\mathbf u+\mathbf v$, $\mathbf u-\mathbf v$, $2\mathbf u$, and $-3\mathbf v$. Draw $\mathbf u$, $\mathbf v$, and $\mathbf u+\mathbf v$ using the parallelogram rule.

3. For $\mathbf u=[1,2]$ and $\mathbf v=[2,-1]$, compute $2\mathbf u-3\mathbf v$. Reproduce the same displacement by placing anchored representatives head to tail.

4. Compute the lengths and corresponding unit vectors for $\mathbf u=[3,4]$, $\mathbf v=[-5,12]$, and $\mathbf w=[2,-2]$.

5. Determine which pairs are parallel, perpendicular, or neither: $[2,1]$ and $[6,3]$; $[2,1]$ and $[1,-2]$; $[3,-1]$ and $[2,5]$. Use scalar multiples for parallelism and dot products for perpendicularity.

6. Find the angles between $\mathbf u=[1,0]$ and $\mathbf v=[1,1]$, and between $\mathbf v=[1,1]$ and $\mathbf w=[-1,1]$. Draw each pair and compare the computed angle with the picture.

7. The sides from one vertex of a triangle are $\mathbf u=[3,1]$ and $\mathbf v=[-1,2]$. Compute $\|\mathbf u-\mathbf v\|$ directly and again from the cosine theorem using the angle between $\mathbf u$ and $\mathbf v$.

8. Compute the projection of $\mathbf u=[4,3]$ onto $\mathbf v=[1,0]$ and onto $\mathbf w=[1,1]$. In each case write $\mathbf u$ as a parallel component plus a perpendicular remainder and verify perpendicularity by a dot product.

9. Let $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$, and $\mathbf u=[4,2]$. Find $\alpha,\beta$ such that $\mathbf u=\alpha\mathbf b_1+\beta\mathbf b_2$. State $[\mathbf u]_B$ and reconstruct $\mathbf u$.

10. Starting from $P=(2,-1)$, form $(P\oplus[3,2])\oplus[-1,4]$ and then apply $-2[3,2]$. Find the endpoint. Combine the three free vectors first and verify that one translation $P\oplus\bigl([3,2]+[-1,4]-2[3,2]\bigr)$ gives the same point.

## B. Development and reasoning exercises

11. Two anchored vectors are declared equivalent when they encode the same coordinate change. Explain, using a parallelogram construction, why moving an arrow without changing that directed change does not change the free vector. Give one numerical example with two different initial points.

12. Use three concrete vectors to draw both $(\mathbf u+\mathbf v)+\mathbf w$ and $\mathbf u+(\mathbf v+\mathbf w)$. Explain geometrically why the endpoints coincide. Then verify that $(P\oplus\mathbf u)\oplus\mathbf v=P\oplus(\mathbf u+\mathbf v)$.

13. Show that two nonzero vectors in the plane are parallel exactly when one is a scalar multiple of the other. Explain separately what positive and negative scalar multiples do to orientation.

14. Choose two nonzero vectors of equal length such that $\|\mathbf u+\mathbf v\|<\|\mathbf u\|$. Compute the lengths and explain how the angle between the vectors produces partial cancellation.

15. Starting from the coordinate definition of the dot product, prove

    $$
    (\mathbf u+\mathbf w)\cdot\mathbf v
      =\mathbf u\cdot\mathbf v+\mathbf w\cdot\mathbf v,
    \qquad
    (\lambda\mathbf u)\cdot\mathbf v
      =\lambda(\mathbf u\cdot\mathbf v),
    $$

    together with symmetry and $\mathbf u\cdot\mathbf u=\|\mathbf u\|^2$. Use these properties to expand $\|\mathbf u-\mathbf v\|^2$ and recover the cosine theorem.

16. Let $\mathbf r=\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u$ for $\mathbf v\neq\mathbf0$. Prove directly that $\mathbf r\cdot\mathbf v=0$. Then use $\|\mathbf r\|^2\geq0$ to derive the Cauchy--Schwarz inequality

    $$
    |\mathbf u\cdot\mathbf v|\leq\|\mathbf u\|\,\|\mathbf v\|,
    $$

    and determine exactly when equality holds.

17. Suppose $\mathbf b_1$ and $\mathbf b_2$ are nonparallel. Explain why a vector cannot have two different representations $\mathbf u=\alpha\mathbf b_1+\beta\mathbf b_2=\alpha'\mathbf b_1+\beta'\mathbf b_2$. Reduce the question to a linear combination equal to the zero vector.

18. Explain the type and meaning of each expression: $P+Q$, $Q-P$, $[Q-P]$, $P\oplus\mathbf v$, $\mathbf u+\mathbf v$, and $\mathbf u\cdot\mathbf v$. State which expressions produce a point, a free vector, or a real number.

19. The vector $\mathbf u=[6,2]$ is awkward in the standard basis but simple in the basis $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$. Find its coordinates in both bases and explain what it means for one basis to be better adapted to a problem.

20. A student claims that every pair of nonzero vectors forms a basis of the plane. Give one counterexample and one valid example. For each pair, explain geometrically whether its linear combinations fill a line or the whole plane.