(() => {
  const host = document.querySelector('[data-vector-tests]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const readout = panel.querySelector('[data-tests-readout]');
  const detOut = panel.querySelector('[data-determinant-readout]');
  const dotOut = panel.querySelector('[data-dot-readout]');
  const angleOut = panel.querySelector('[data-angle-readout]');
  const VIEW = [-5.5, 5.5, 7.5, -4.5];
  const board = JXG.JSXGraph.initBoard(host.id, { boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true, showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false } });
  const fixed = { fixed: true, highlight: false };
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const U = board.create('point', [4, 1.5], { name: 'u', size: 6, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const V = board.create('point', [1.5, 3.5], { name: 'v', size: 6, fillColor: '#b1782b', strokeColor: '#b1782b', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  board.create('arrow', [O, U], { strokeColor: '#2f6f9f', strokeWidth: 5, ...fixed });
  board.create('arrow', [O, V], { strokeColor: '#b1782b', strokeWidth: 5, ...fixed });
  board.create('angle', [U, O, V], { radius: 1, fillColor: '#7a3f73', fillOpacity: .12, strokeColor: '#7a3f73', name: 'θ', ...fixed });
  const fmt = n => Math.abs(n) < 1e-8 ? '0' : n.toFixed(2).replace(/\.00$/, '');
  function update() {
    const ux = U.X(), uy = U.Y(), vx = V.X(), vy = V.Y();
    const det = ux * vy - uy * vx;
    const dot = ux * vx + uy * vy;
    const nu = Math.hypot(ux, uy), nv = Math.hypot(vx, vy);
    const c = Math.max(-1, Math.min(1, dot / Math.max(1e-9, nu * nv)));
    const theta = Math.acos(c) * 180 / Math.PI;
    detOut.textContent = `u₁v₂ − u₂v₁ = ${fmt(det)}${Math.abs(det) < .01 ? ' → parallel' : ''}`;
    dotOut.textContent = `u · v = ${fmt(dot)}${Math.abs(dot) < .01 ? ' → perpendicular' : ''}`;
    angleOut.textContent = `θ = ${theta.toFixed(1)}°`;
    readout.textContent = `u=[${fmt(ux)},${fmt(uy)}], v=[${fmt(vx)},${fmt(vy)}]`;
    board.fullUpdate();
  }
  U.on('drag', update); V.on('drag', update); update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();