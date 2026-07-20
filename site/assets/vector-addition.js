(() => {
  const host = document.querySelector('[data-vector-addition]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-addition-mode]')];
  const VIEW = [-5.5, 5.5, 7.5, -4.5];
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true,
    showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false }
  });
  const fixed = { fixed: true, highlight: false };
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const A = board.create('point', [3, 1.5], { name: 'A', size: 5, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const B = board.create('point', [1.5, 3], { name: 'B', size: 5, fillColor: '#b1782b', strokeColor: '#b1782b', snapToGrid: true, snapSizeX: .5, snapSizeY: .5 });
  const S = board.create('point', [() => A.X() + B.X(), () => A.Y() + B.Y()], { name: 'S', visible: false, ...fixed });
  const D = board.create('point', [() => A.X() - B.X(), () => A.Y() - B.Y()], { name: 'D', visible: false, ...fixed });

  const u = board.create('arrow', [O, A], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  const v = board.create('arrow', [O, B], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  const vAtA = board.create('arrow', [A, S], { strokeColor: '#b1782b', strokeWidth: 3, dash: 2, ...fixed });
  const uAtB = board.create('arrow', [B, S], { strokeColor: '#2f6f9f', strokeWidth: 3, dash: 2, ...fixed });
  const sum = board.create('arrow', [O, S], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  const diff = board.create('arrow', [B, A], { strokeColor: '#7a3f73', strokeWidth: 5, ...fixed });
  const negV = board.create('arrow', [O, () => [-B.X(), -B.Y()]], { strokeColor: '#b1782b', strokeWidth: 3, dash: 2, ...fixed });
  const sumDiff = board.create('arrow', [O, D], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  const label = board.create('text', [-5, 5, ''], { color: '#66717d', fontSize: 17, ...fixed });

  function setMode(mode) {
    const head = mode === 'head';
    const para = mode === 'parallelogram';
    const subtract = mode === 'subtract';
    v.setAttribute({ visible: !subtract });
    vAtA.setAttribute({ visible: head || para });
    uAtB.setAttribute({ visible: para });
    sum.setAttribute({ visible: head || para });
    diff.setAttribute({ visible: subtract });
    negV.setAttribute({ visible: subtract });
    sumDiff.setAttribute({ visible: subtract });
    label.setText(subtract ? 'a − b is the arrow from the endpoint of b to the endpoint of a.' : head ? 'Place b at the endpoint of a; the direct arrow is a + b.' : 'The diagonal of the parallelogram is a + b.');
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.additionMode === mode));
    board.fullUpdate();
  }
  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.additionMode)));
  setMode('head');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();