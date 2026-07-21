(() => {
  const host = document.querySelector('[data-polar-coordinate]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const VIEW = [-5, 5, 5, -5];
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

  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const P = board.create('point', [3, 2], {
    name: 'P', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    snapToGrid: true, snapSizeX: .25, snapSizeY: .25
  });
  board.create('arrow', [O, P], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('text', [
    () => P.X() / 2,
    () => P.Y() / 2 + .35,
    '$r$'
  ], boxed({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
  board.create('segment', [P, () => [P.X(), 0]], { strokeColor: '#a9b2ba', dash: 2, ...fixed });
  board.create('segment', [P, () => [0, P.Y()]], { strokeColor: '#a9b2ba', dash: 2, ...fixed });

  const rOut = panel.querySelector('[data-polar-r]');
  const thOut = panel.querySelector('[data-polar-theta]');
  const xyOut = panel.querySelector('[data-polar-xy]');
  const update = () => {
    const x = P.X(), y = P.Y();
    const r = Math.hypot(x, y);
    const t = (Math.atan2(y, x) + 2 * Math.PI) % (2 * Math.PI);
    rOut.textContent = `r = ${r.toFixed(2)}`;
    thOut.textContent = `θ = ${t.toFixed(2)} rad`;
    xyOut.textContent = `(x,y) = (${x.toFixed(2)}, ${y.toFixed(2)})`;
  };
  P.on('drag', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
