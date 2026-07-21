(() => {
  const host = document.querySelector('[data-polar-graph]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const slider = panel.querySelector('[data-polar-angle-slider]');
  const out = panel.querySelector('[data-polar-angle]');
  const VIEW = [-2, 4.5, 6, -4.5];
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

  const R = 2;
  let theta = Number(slider.value);
  board.create('curve', [
    t => 2 * R * Math.cos(t) * Math.cos(t),
    t => 2 * R * Math.cos(t) * Math.sin(t),
    0,
    2 * Math.PI
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  const P = board.create('point', [
    () => 2 * R * Math.cos(theta) * Math.cos(theta),
    () => 2 * R * Math.cos(theta) * Math.sin(theta)
  ], { name: 'P', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f', ...fixed });

  board.create('arrow', [[0, 0], P], { strokeColor: '#b1782b', strokeWidth: 3, ...fixed });
  board.create('text', [
    () => P.X() / 2,
    () => P.Y() / 2 + .35,
    '$r(\\theta)$'
  ], boxed({ color: '#b1782b', fontSize: 18, useMathJax: true }));

  slider.addEventListener('input', () => {
    theta = Number(slider.value);
    out.value = theta.toFixed(2);
    board.fullUpdate();
  });
  out.value = theta.toFixed(2);
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
