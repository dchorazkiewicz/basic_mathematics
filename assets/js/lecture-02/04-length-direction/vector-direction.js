(() => {
  const host = document.querySelector('[data-vector-direction]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const readout = panel.querySelector('[data-direction-readout]');
  const VIEW = [-5.5, 5.5, 7.5, -4.5];
  const board = JXG.JSXGraph.initBoard(host.id, { boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true, showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false } });
  const fixed = { fixed: true, highlight: false };
  const vectorLabel = options => window.LectureJSX?.vectorLabelStyle?.(options) ?? {
    display: 'html', cssClass: 'vector-label-chip', fixed: true, highlight: false, ...options
  };
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const P = board.create('point', [4, 3], { name: 'V', size: 6, fillColor: '#3f735f', strokeColor: '#3f735f', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const R = board.create('point', [() => P.X(), 0], { visible: false, ...fixed });
  board.create('arrow', [O, P], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  board.create('arrow', [O, R], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('arrow', [R, P], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('angle', [[1, 0], O, P], { radius: 1, fillColor: '#2f6f9f', fillOpacity: .12, strokeColor: '#2f6f9f', name: 'α', ...fixed });
  board.create('text', [() => P.X() / 2, -.45, () => `v₁ = ${P.X().toFixed(1)}`], vectorLabel({ color: '#2f6f9f', fontSize: 17 }));
  board.create('text', [() => P.X() + .25, () => P.Y() / 2, () => `v₂ = ${P.Y().toFixed(1)}`], vectorLabel({ color: '#b1782b', fontSize: 17 }));
  board.create('text', [() => P.X() / 2 - .5, () => P.Y() / 2 + .45, () => `‖v‖ = ${Math.hypot(P.X(), P.Y()).toFixed(2)}`], vectorLabel({ color: '#7a3f73', fontSize: 17 }));
  const update = () => {
    const alpha = Math.atan2(P.Y(), P.X()) * 180 / Math.PI;
    readout.textContent = `$\\mathbf v=[${P.X().toFixed(1)},${P.Y().toFixed(1)}],\\quad \\|\\mathbf v\\|=${Math.hypot(P.X(), P.Y()).toFixed(2)},\\quad \\alpha=${alpha.toFixed(1)}^\\circ$`;
    window.MathJax?.typesetPromise?.([readout]);
  };
  P.on('drag', update); update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
