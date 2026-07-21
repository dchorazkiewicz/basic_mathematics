(() => {
  const host = document.querySelector('[data-vector-projection]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const readout = panel.querySelector('[data-projection-readout]');
  const coeffOut = panel.querySelector('[data-projection-coefficient]');
  const vectorOut = panel.querySelector('[data-projection-vector]');
  const checkOut = panel.querySelector('[data-projection-check]');
  const VIEW = [-5.5, 5.5, 7.5, -4.5];
  const board = JXG.JSXGraph.initBoard(host.id, { boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true, showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false } });
  const fixed = { fixed: true, highlight: false };
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const U = board.create('point', [3.5, 3], { name: 'u', size: 6, fillColor: '#17324d', strokeColor: '#17324d', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const V = board.create('point', [4, 1], { name: 'v', size: 6, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const lambda = () => (U.X() * V.X() + U.Y() * V.Y()) / Math.max(1e-9, V.X() ** 2 + V.Y() ** 2);
  const H = board.create('point', [() => lambda() * V.X(), () => lambda() * V.Y()], { name: 'H', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed });
  board.create('line', [O, V], { strokeColor: '#9aa7b2', strokeWidth: 2, dash: 2, ...fixed });
  board.create('arrow', [O, U], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  board.create('arrow', [O, H], { strokeColor: '#2f6f9f', strokeWidth: 5, ...fixed });
  board.create('arrow', [H, U], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('angle', [O, H, U], { radius: .45, fillColor: '#66717d', fillOpacity: .08, strokeColor: '#66717d', name: '', ...fixed });
  const fmt = n => Math.abs(n) < 1e-8 ? '0' : n.toFixed(2).replace(/\.00$/, '');
  function update() {
    const l = lambda();
    const px = l * V.X(), py = l * V.Y();
    const rx = U.X() - px, ry = U.Y() - py;
    const check = rx * V.X() + ry * V.Y();
    coeffOut.textContent = `λ = ${fmt(l)}`;
    vectorOut.textContent = `projᵥu = [${fmt(px)}, ${fmt(py)}]`;
    checkOut.textContent = `remainder · v = ${fmt(check)}`;
    readout.textContent = `u = projᵥu + perpendicular remainder`;
    board.fullUpdate();
  }
  U.on('drag', update); V.on('drag', update); update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();