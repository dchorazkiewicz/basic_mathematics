(() => {
  const host = document.querySelector('[data-slope-triangle]');
  if (!host || !window.JXG) return;

  const VIEW = [-1.2, 5.6, 7.2, -3.8];
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
  const labelStyle = 'background:rgba(255,255,255,.94);border:1px solid #d7dee4;border-radius:10px;padding:3px 7px;';

  const O = board.create('point', [0, 0], {
    name: 'O', size: 4, fillColor: '#18212b', strokeColor: '#18212b',
    label: { offset: [-24, -22], fontSize: 18, cssStyle: labelStyle }, ...fixed
  });

  const V = board.create('point', [4, 2.5], {
    name: '', size: 6, fillColor: '#2f6f9f', strokeColor: '#2f6f9f',
    snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5
  });

  const constrain = () => {
    const x = Math.max(0.5, V.X());
    const y = Math.max(-3, Math.min(4.5, V.Y()));
    V.setPosition(JXG.COORDS_BY_USER, [x, y]);
  };
  V.on('drag', constrain);

  const H = board.create('point', [() => V.X(), 0], {
    name: '', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });

  board.create('line', [O, V], {
    strokeColor: '#9aa7b2', strokeWidth: 2, dash: 2, ...fixed
  });
  board.create('arrow', [O, V], {
    strokeColor: '#17324d', strokeWidth: 5, ...fixed
  });
  board.create('arrow', [O, H], {
    strokeColor: '#3f735f', strokeWidth: 5, ...fixed
  });
  board.create('arrow', [H, V], {
    strokeColor: '#b1782b', strokeWidth: 5, ...fixed
  });

  board.create('polygon', [H, [() => V.X() - 0.25, 0], [() => V.X() - 0.25, () => Math.sign(V.Y() || 1) * 0.25], [() => V.X(), () => Math.sign(V.Y() || 1) * 0.25]], {
    borders: { strokeColor: '#66717d', strokeWidth: 2 },
    fillColor: '#ffffff', fillOpacity: 0.8,
    vertices: { visible: false }, ...fixed
  });

  board.create('angle', [[1, 0], O, V], {
    radius: 0.7, fillColor: '#2f6f9f', fillOpacity: 0.12,
    strokeColor: '#2f6f9f', strokeWidth: 2, name: 'α',
    label: { fontSize: 20, cssStyle: labelStyle }, ...fixed
  });

  board.create('text', [() => V.X() / 2, -0.35, 'v₁ = Δx'], {
    fontSize: 18, color: '#3f735f', cssStyle: labelStyle, ...fixed
  });
  board.create('text', [() => V.X() + 0.18, () => V.Y() / 2, 'v₂ = Δy'], {
    fontSize: 18, color: '#b1782b', cssStyle: labelStyle, ...fixed
  });
  board.create('text', [() => V.X() / 2 - 0.25, () => V.Y() / 2 + 0.35, 'v = [v₁, v₂]'], {
    fontSize: 18, color: '#17324d', cssStyle: labelStyle, ...fixed
  });

  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();