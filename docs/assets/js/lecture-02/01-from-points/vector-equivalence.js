(() => {
  const host = document.querySelector('[data-vector-equivalence]');
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
  const style = { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed };

  const P = board.create('point', [-2.5, -1.5], {
    name: 'P', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });
  const P2 = board.create('point', [-.5, 2], {
    name: "P'", size: 5, fillColor: '#b1782b', strokeColor: '#b1782b',
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });

  const d = [3, 2];
  const Q = board.create('point', [() => P.X() + d[0], () => P.Y() + d[1]], {
    name: 'Q', size: 4, fillColor: '#3f735f', strokeColor: '#3f735f', ...fixed
  });
  const Q2 = board.create('point', [() => P2.X() + d[0], () => P2.Y() + d[1]], {
    name: "Q'", size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });

  board.create('arrow', [P, Q], style);
  board.create('arrow', [P2, Q2], { ...style, strokeColor: '#b1782b' });

  board.create('segment', [P, P2], { strokeColor: '#a9b2ba', dash: 2, ...fixed });
  board.create('segment', [Q, Q2], { strokeColor: '#a9b2ba', dash: 2, ...fixed });

  board.create('text', [-5, 5, '$Q-P=Q\' - P\'=[3,2]$'], {
    color: '#66717d',
    fontSize: 17,
    display: 'html',
    useMathJax: true,
    cssClass: 'vector-label-chip',
    ...fixed
  });

  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
