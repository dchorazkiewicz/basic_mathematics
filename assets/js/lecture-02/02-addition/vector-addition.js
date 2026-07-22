(() => {
  if (!window.JXG) return;

  const host = document.querySelector('[data-vector-chain]');
  if (!host) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const readout = panel.querySelector('[data-vector-chain-readout]');
  const VIEW = [-2, 6.5, 8, -3.5];
  const colors = {
    a: '#2f6f9f',
    b: '#b1782b',
    sum: '#17324d'
  };
  const fixed = { fixed: true, highlight: false };
  const draggable = { size: 5, snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5 };
  const label = (color) => window.LectureJSX?.vectorLabelStyle?.({ color, fontSize: 18 }) || {
    color,
    fontSize: 18,
    display: 'html',
    cssClass: 'vector-label-chip',
    ...fixed
  };
  const f = value => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };
  const pair = (x, y) => `[${f(x)}, ${f(y)}]`;

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [...VIEW],
    axis: true,
    grid: true,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const P = board.create('point', [0.5, 0.5], { name: 'P', fillColor: colors.sum, strokeColor: colors.sum, ...draggable });
  const Q = board.create('point', [6, -1], { name: 'Q', fillColor: colors.a, strokeColor: colors.a, ...draggable });
  const R = board.create('point', [4, 4], { name: 'R', fillColor: colors.b, strokeColor: colors.b, ...draggable });

  board.create('arrow', [P, Q], { strokeColor: colors.a, strokeWidth: 5, ...fixed });
  board.create('arrow', [Q, R], { strokeColor: colors.b, strokeWidth: 5, ...fixed });
  board.create('arrow', [P, R], { strokeColor: colors.sum, strokeWidth: 4, dash: 2, ...fixed });

  board.create('text', [() => (P.X() + Q.X()) / 2, () => (P.Y() + Q.Y()) / 2 + 0.35, 'a = [PQ]'], label(colors.a));
  board.create('text', [() => (Q.X() + R.X()) / 2, () => (Q.Y() + R.Y()) / 2 + 0.35, 'b = [QR]'], label(colors.b));
  board.create('text', [() => (P.X() + R.X()) / 2, () => (P.Y() + R.Y()) / 2 - 0.45, 'a + b = [PR]'], label(colors.sum));

  function updateReadout() {
    const ax = Q.X() - P.X();
    const ay = Q.Y() - P.Y();
    const bx = R.X() - Q.X();
    const by = R.Y() - Q.Y();
    readout.textContent = `a = ${pair(ax, ay)};  b = ${pair(bx, by)};  a + b = ${pair(R.X() - P.X(), R.Y() - P.Y())}`;
  }

  P.on('drag', updateReadout);
  Q.on('drag', updateReadout);
  R.on('drag', updateReadout);
  updateReadout();

  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: () => [...VIEW] });
})();