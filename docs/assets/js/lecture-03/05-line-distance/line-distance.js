(() => {
  const host = document.querySelector('[data-line-distance]');
  if (!host || !window.JXG) return;

  const VIEW = [-5, 6, 7, -5];
  const fixed = { fixed: true, highlight: false };
  const boxed = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: true,
    grid: true,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const P0 = board.create('point', [-1, 0], {
    name: 'P₀', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });
  const D = board.create('point', [3, 2], {
    name: 'P₀⊕v', size: 5, fillColor: '#2f6f9f', strokeColor: '#2f6f9f',
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });
  const P = board.create('point', [2, 4], {
    name: 'P', size: 5, fillColor: '#b1782b', strokeColor: '#b1782b',
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });

  board.create('line', [P0, D], { strokeColor: '#17324d', strokeWidth: 4, ...fixed });
  const Q = board.create('point', [
    () => {
      const vx = D.X() - P0.X(), vy = D.Y() - P0.Y();
      const den = vx * vx + vy * vy || 1;
      const t = ((P.X() - P0.X()) * vx + (P.Y() - P0.Y()) * vy) / den;
      return P0.X() + t * vx;
    },
    () => {
      const vx = D.X() - P0.X(), vy = D.Y() - P0.Y();
      const den = vx * vx + vy * vy || 1;
      const t = ((P.X() - P0.X()) * vx + (P.Y() - P0.Y()) * vy) / den;
      return P0.Y() + t * vy;
    }
  ], { name: 'Q', size: 5, fillColor: '#7a3f73', strokeColor: '#7a3f73', ...fixed });

  board.create('segment', [P0, P], { strokeColor: '#a9b2ba', dash: 2, strokeWidth: 2, ...fixed });
  board.create('segment', [P0, Q], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('segment', [Q, P], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('text', [
    () => (Q.X() + P.X()) / 2 + .35,
    () => (Q.Y() + P.Y()) / 2,
    '$d(P,L)=\\|[P-Q]\\|$'
  ], boxed({ color: '#b1782b', fontSize: 17, useMathJax: true }));

  const foot = document.querySelector('[data-foot-readout]');
  const dist = document.querySelector('[data-distance-readout]');
  function fmt(x) { return Number(x.toFixed(2)).toString(); }
  function update() {
    foot.textContent = `Q = (${fmt(Q.X())}, ${fmt(Q.Y())})`;
    dist.textContent = `d(P,L) = ||[P−Q]|| = ${fmt(Math.hypot(P.X() - Q.X(), P.Y() - Q.Y()))}`;
  }
  board.on('update', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();