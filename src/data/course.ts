export const courseAreas = [
  {
    title: 'Analytical Geometry',
    note: 'Geometric objects become numerical descriptions.',
    lectures: [
      { number: '01', slug: '01-cartesian-geometry', title: 'Cartesian Geometry and Coordinates', summary: 'Construct the coordinate plane from Euclidean geometry, then use coordinates to calculate distance.', ready: true },
      { number: '02', slug: '02-vectors-in-the-plane', title: 'Vectors in the Plane', summary: 'Displacement, addition, scaling, components, and geometric meaning.' },
      { number: '03', slug: '03-lines', title: 'Lines and Their Descriptions', summary: 'Parametric, implicit, and slope forms; intersections and distance.' },
      { number: '04', slug: '04-planes-and-space', title: 'Planes and Three-Dimensional Space', summary: 'Coordinates in space, lines, planes, and spatial relations.' }
    ]
  },
  {
    title: 'Linear Algebra',
    note: 'Coordinates become structure and transformation.',
    lectures: [
      { number: '05', slug: '05-matrices', title: 'Matrices as Transformations', summary: 'Matrices as machines acting on vectors and geometric figures.' },
      { number: '06', slug: '06-linear-systems', title: 'Systems of Linear Equations', summary: 'Elimination, geometry of solution sets, and consistency.' },
      { number: '07', slug: '07-determinants', title: 'Determinants and Oriented Area', summary: 'Area scaling, orientation, invertibility, and volume.' },
      { number: '08', slug: '08-bases', title: 'Bases and Coordinate Change', summary: 'Different descriptions of the same vector space.' }
    ]
  },
  {
    title: 'Calculus',
    note: 'Structure begins to move and vary.',
    lectures: [
      { number: '09', slug: '09-functions', title: 'Functions and Graphs', summary: 'Input-output rules, graphs, transformations, and composition.' },
      { number: '10', slug: '10-limits', title: 'Limits and Local Behaviour', summary: 'Approximation, continuity, and the language of approaching.' },
      { number: '11', slug: '11-derivatives', title: 'Derivatives and Linear Approximation', summary: 'Tangent lines, rates of change, and local models.' },
      { number: '12', slug: '12-integrals', title: 'Integrals and Accumulation', summary: 'Area, accumulation, Riemann sums, and the fundamental theorem.' }
    ]
  }
] as const;
