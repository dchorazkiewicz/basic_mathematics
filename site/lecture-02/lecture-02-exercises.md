# Lecture 02 — Vectors, Bases, and Coordinate Systems

## A. Elementary computational and graphical exercises

1. Let $A=(1,2)$ and $B=(5,-1)$. Compute the free vector $[\overrightarrow{AB}]$. Draw equal anchored representatives beginning at $O=(0,0)$ and at $P=(-2,3)$, and write the endpoint of each representative.

2. For $\mathbf u=[3,-2]$ and $\mathbf v=[-1,4]$, compute $\mathbf u+\mathbf v$, $\mathbf u-\mathbf v$, $2\mathbf u$, and $-3\mathbf v$. Draw $\mathbf u$, $\mathbf v$, and $\mathbf u+\mathbf v$ using the parallelogram rule.

3. For $\mathbf u=[1,2]$ and $\mathbf v=[2,-1]$, compute $2\mathbf u-3\mathbf v$. Reproduce the same displacement by placing anchored representatives head to tail.

4. Compute the lengths and corresponding unit vectors for $\mathbf u=[3,4]$, $\mathbf v=[-5,12]$, and $\mathbf w=[2,-2]$.

5. Determine which pairs are parallel, perpendicular, or neither: $[2,1]$ and $[6,3]$; $[2,1]$ and $[1,-2]$; $[3,-1]$ and $[2,5]$. Use scalar multiples for parallelism and dot products for perpendicularity.

6. Find the angles between $\mathbf u=[1,0]$ and $\mathbf v=[1,1]$, and between $\mathbf v=[1,1]$ and $\mathbf w=[-1,1]$. Draw each pair and compare the computed angle with the picture.

7. The sides from one vertex of a triangle are $\mathbf u=[3,1]$ and $\mathbf v=[-1,2]$. Compute $\|\mathbf u-\mathbf v\|$ directly and again from the cosine theorem using the angle between $\mathbf u$ and $\mathbf v$.

8. Compute the projection of $\mathbf u=[4,3]$ onto $\mathbf v=[1,0]$ and onto $\mathbf w=[1,1]$. In each case write $\mathbf u$ as a parallel component plus a perpendicular remainder and verify perpendicularity by a dot product.

9. Let $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$, and $\mathbf u=[4,2]$. Find $\alpha,\beta$ such that $\mathbf u=\alpha\mathbf b_1+\beta\mathbf b_2$. State $[\mathbf u]_B$ and reconstruct $\mathbf u$.

10. A point starts at $P=(2,-1)$ and undergoes the successive displacements $\mathbf u=[3,2]$, $\mathbf v=[-1,4]$, and $-2\mathbf u$. Find the final point. Then combine the three displacements first and verify that the same endpoint is obtained.

## B. Development and reasoning exercises

11. Two anchored vectors are declared equal when they represent the same translation. Explain, using a parallelogram construction, why moving an arrow without changing its length and direction does not change the free vector. Give one numerical example with two different initial points.

12. Use three concrete vectors to draw both $(\mathbf u+\mathbf v)+\mathbf w$ and $\mathbf u+(\mathbf v+\mathbf w)$. Explain geometrically, without relying only on coordinate arithmetic, why the endpoints coincide.

13. Show that two nonzero vectors in the plane are parallel exactly when one is a scalar multiple of the other. Explain separately what positive and negative scalar multiples do to orientation.

14. Choose two nonzero vectors of equal length such that $\|\mathbf u+\mathbf v\|<\|\mathbf u\|$. Compute the lengths and explain how the angle between the vectors produces partial cancellation.

15. Starting from the cosine theorem for the triangle formed by $\mathbf u$, $\mathbf v$, and $\mathbf u-\mathbf v$, derive $\mathbf u\cdot\mathbf v=\|\mathbf u\|\,\|\mathbf v\|\cos\theta$. Explain why the sign of the dot product distinguishes acute, right, and obtuse angles.

16. Let $\mathbf r=\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u$. Prove directly from the projection formula that $\mathbf r\cdot\mathbf v=0$. Then interpret the result geometrically.

17. Suppose $\mathbf b_1$ and $\mathbf b_2$ are nonparallel. Explain why a vector cannot have two different representations $\mathbf u=\alpha\mathbf b_1+\beta\mathbf b_2=\alpha'\mathbf b_1+\beta'\mathbf b_2$. Reduce the question to a linear combination equal to the zero vector.

18. Explain the difference between the point $P=(3,2)$ and the vector $\mathbf v=[3,2]$. Construct one situation in which the same ordered pair refers to a location and another in which it refers to a displacement.

19. The vector $\mathbf u=[6,2]$ is awkward in the standard basis but simple in the basis $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$. Find its coordinates in both bases and explain what it means for one basis to be better adapted to a problem.

20. A student claims that every pair of nonzero vectors forms a basis of the plane. Give one counterexample and one valid example. For each pair, explain geometrically whether its linear combinations fill a line or the whole plane.
