## Exercises {#exercises}

The first ten consolidate calculation and construction. The next ten require explanation, proof, comparison, or modelling.

[Download exercises as Markdown](../lecture-02/lecture-02-exercises.md){ .download-button download }

### A. Elementary computational and graphical exercises

1. Let $A=(1,2)$ and $B=(5,-1)$. Compute the ordinary point difference $B-A$ and the free vector $[B-A]=[\overrightarrow{AB}]$. Find the points $O\oplus[B-A]$ for $O=(0,0)$ and $P\oplus[B-A]$ for $P=(-2,3)$, and draw the corresponding anchored representatives.
2. For $\mathbf u=[3,-2]$ and $\mathbf v=[-1,4]$, compute $\mathbf u+\mathbf v$, $\mathbf u-\mathbf v$, $2\mathbf u$, and $-3\mathbf v$. Draw the parallelogram for $\mathbf u+\mathbf v$.
3. For $\mathbf u=[1,2]$ and $\mathbf v=[2,-1]$, compute $2\mathbf u-3\mathbf v$ and reproduce it head to tail.
4. Compute the lengths and unit vectors for $[3,4]$, $[-5,12]$, and $[2,-2]$.
5. Classify the pairs $[2,1],[6,3]$; $[2,1],[1,-2]$; $[3,-1],[2,5]$ as parallel, perpendicular, or neither.
6. Find the angles between $[1,0]$ and $[1,1]$, and between $[1,1]$ and $[-1,1]$.
7. For $\mathbf u=[3,1]$ and $\mathbf v=[-1,2]$, compute $\|\mathbf u-\mathbf v\|$ directly and from the cosine theorem.
8. Project $[4,3]$ onto $[1,0]$ and onto $[1,1]$. Verify that each remainder is perpendicular to the target direction.
9. For $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$, and $\mathbf u=[4,2]$, find $[\mathbf u]_B$ and reconstruct $\mathbf u$.
10. Starting from $P=(2,-1)$, form $(P\oplus[3,2])\oplus[-1,4]$ and then apply $-2[3,2]$. Find the endpoint. Combine the three free vectors first and verify that one translation $P\oplus\bigl([3,2]+[-1,4]-2[3,2]\bigr)$ gives the same point.

### B. Development and reasoning exercises

11. Explain with a parallelogram why translating an arrow without changing its directed change does not change the free vector. Give a numerical example.
12. Draw $(\mathbf u+\mathbf v)+\mathbf w$ and $\mathbf u+(\mathbf v+\mathbf w)$ for concrete vectors and explain geometrically why the endpoints coincide. Then verify that $(P\oplus\mathbf u)\oplus\mathbf v=P\oplus(\mathbf u+\mathbf v)$.
13. Prove that two nonzero plane vectors are parallel exactly when one is a scalar multiple of the other. Discuss positive and negative multiples separately.
14. Find equal-length vectors with $\|\mathbf u+\mathbf v\|<\|\mathbf u\|$ and explain the cancellation geometrically.
15. Starting from the coordinate definition of the dot product, prove distributivity, homogeneity, symmetry, and $\mathbf u\cdot\mathbf u=\|\mathbf u\|^2$. Use these properties to expand $\|\mathbf u-\mathbf v\|^2$ and recover the cosine theorem.
16. Let $\mathbf r=\mathbf u-\operatorname{proj}_{\mathbf v}\mathbf u$ for $\mathbf v\neq\mathbf0$. Prove that $\mathbf r\perp\mathbf v$, then use $\|\mathbf r\|^2\geq0$ to derive the Cauchy--Schwarz inequality $|\mathbf u\cdot\mathbf v|\leq\|\mathbf u\|\,\|\mathbf v\|$. Determine when equality holds.
17. Explain why two nonparallel basis vectors give unique coefficients in $\mathbf u=\alpha\mathbf b_1+\beta\mathbf b_2$.
18. Explain the type and meaning of each expression: $P+Q$, $Q-P$, $[Q-P]$, $P\oplus\mathbf v$, $\mathbf u+\mathbf v$, and $\mathbf u\cdot\mathbf v$. State which expressions produce a point, a free vector, or a real number.
19. Find the standard and $B$-coordinates of $[6,2]$ for $\mathbf b_1=[1,1]$, $\mathbf b_2=[1,-1]$. Explain when a basis is well adapted.
20. Refute the claim that every pair of nonzero vectors is a basis. Give one dependent and one independent example and interpret their linear combinations.