(() => {
  const host = document.querySelector('[data-euclidean-constructions]');
  if (!host || !window.JXG) return;

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [-5.2, 3.4, 5.2, -3.4],
    axis: false,
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const colors = {
    ink: '#18212b',
    blue: '#2f6f9f',
    gold: '#b1782b',
    green: '#3f735f',
    helper: '#9aa5af'
  };

  const pointStyle = {
    size: 5,
    strokeWidth: 2,
    label: { fontSize: 18, offset: [10, 10] }
  };

  const A = board.create('point', [-3.4, -1.3], {
    name: 'A', fillColor: colors.gold, strokeColor: colors.gold, ...pointStyle
  });
  const B = board.create('point', [1.9, 1.1], {
    name: 'B', fillColor: colors.gold, strokeColor: colors.gold, ...pointStyle
  });
  const C = board.create('point', [2.4, -1.1], {
    name: 'C', fillColor: colors.green, strokeColor: colors.green, ...pointStyle
  });

  board.create('line', [A, B], {
    strokeColor: colors.blue,
    strokeWidth: 3,
    highlight: false
  });

  board.create('circle', [A, B], {
    strokeColor: colors.gold,
    strokeWidth: 3,
    fillOpacity: 0,
    highlight: false
  });

  const perpendicular = board.create('perpendicular', [board.create('line', [A, B], {
    visible: false,
    fixed: true
  }), C], {
    strokeColor: colors.green,
    strokeWidth: 3,
    highlight: false
  });

  board.create('intersection', [perpendicular, board.create('line', [A, B], {
    visible: false,
    fixed: true
  }), 0], {
    name: 'D',
    size: 4,
    fillColor: colors.ink,
    strokeColor: colors.ink,
    label: { fontSize: 17, offset: [10, -20] },
    fixed: true,
    highlight: false
  });

  board.create('text', [-4.9, 2.9, 'Move A, B, and C'], {
    color: colors.helper,
    fontSize: 16,
    fixed: true,
    highlight: false
  });

  const resize = () => board.resizeContainer(host.clientWidth, host.clientHeight, true);
  window.addEventListener('resize', resize);
  document.addEventListener('fullscreenchange', () => setTimeout(resize, 50));
})();