(() => {
  const host = document.querySelector('[data-anchored-vector]');
  if (!host || !window.JXG) return;

  const VIEW = [-5.5, 5.5, 7.5, -4.5];
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
  const draggable = {
    size: 6,
    snapToGrid: true,
    snapSizeX: 0.5,
    snapSizeY: 0.5
  };

  const P = board.create('point', [-2.5, -1.5], {
    name: 'P',
    fillColor: '#3f735f',
    strokeColor: '#3f735f',
    ...draggable
  });

  const Q = board.create('point', [3.5, 2], {
    name: 'Q',
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...draggable
  });

  board.create('arrow', [P, Q], {
    strokeColor: '#17324d',
    strokeWidth: 5,
    ...fixed
  });

  board.create('text', [
    () => (P.X() + Q.X()) / 2,
    () => (P.Y() + Q.Y()) / 2 + 0.45,
    '→PQ'
  ], {
    color: '#17324d',
    fontSize: 20,
    ...fixed
  });

  const readout = host.closest('[data-fullscreen-panel]')?.querySelector('[data-anchored-vector-readout]');
  const fmt = value => Number(value.toFixed(1)).toString();

  function update() {
    if (readout) {
      readout.textContent = `P = (${fmt(P.X())}, ${fmt(P.Y())}), Q = (${fmt(Q.X())}, ${fmt(Q.Y())})`;
    }
  }

  P.on('drag', update);
  Q.on('drag', update);
  update();

  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
