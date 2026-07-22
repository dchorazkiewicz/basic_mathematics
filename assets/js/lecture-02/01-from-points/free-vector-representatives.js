(() => {
  const host = document.querySelector('[data-free-vector-representatives]');
  if (!host || !window.JXG) return;

  const VIEW = [-6, 6, 7, -5.5];
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

  const fixed = { fixed: true, highlight: false };
  const O = board.create('point', [0, 0], {
    name: 'O',
    size: 4,
    fillColor: '#17324d',
    strokeColor: '#17324d',
    ...fixed
  });

  const X = board.create('point', [2.5, 1.5], {
    name: 'X',
    size: 6,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    snapToGrid: true,
    snapSizeX: 0.5,
    snapSizeY: 0.5
  });

  board.create('arrow', [O, X], {
    strokeColor: '#17324d',
    strokeWidth: 6,
    ...fixed
  });

  const anchors = [
    [-4.5, 3.5], [-2.5, 3.5], [0, 3.5], [2.5, 3.5], [4.5, 3.5],
    [-4.5, 1.5], [-2.5, 1.5], [2.5, 1.5], [4.5, 1.5],
    [-4.5, -1], [-2.5, -1], [2.5, -1], [4.5, -1],
    [-4.5, -3.5], [-2.5, -3.5], [0, -3.5], [2.5, -3.5], [4.5, -3.5]
  ];

  anchors.forEach(([x, y]) => {
    const start = board.create('point', [x, y], { visible: false, ...fixed });
    const end = board.create('point', [() => x + X.X(), () => y + X.Y()], {
      visible: false,
      ...fixed
    });
    board.create('arrow', [start, end], {
      strokeColor: '#2f6f9f',
      strokeWidth: 3,
      strokeOpacity: 0.72,
      ...fixed
    });
  });

  board.create('text', [-5.4, 5.2, 'Move X: every arrow remains a representative of the same free vector.'], {
    color: '#66717d',
    fontSize: 16,
    ...fixed
  });

  const readout = host.closest('[data-fullscreen-panel]')?.querySelector('[data-free-vector-readout]');
  const fmt = value => Number(value.toFixed(1)).toString();

  function update() {
    if (readout) {
      readout.textContent = `$\\mathbf v=[X-O]=[${fmt(X.X())},${fmt(X.Y())}]$`;
      window.MathJax?.typesetPromise?.([readout]);
    }
    board.fullUpdate();
  }

  X.on('drag', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();