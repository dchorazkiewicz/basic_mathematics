(() => {
  const host = document.querySelector('[data-distance-geometry]');
  if (!host || !window.JXG) return;

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [-1, 5.6, 7.4, -1.2],
    axis: true,
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false },
    defaultAxes: {
      x: {
        strokeColor: '#9aa7b2',
        strokeWidth: 1,
        ticks: { strokeColor: '#9aa7b2', label: { color: '#66717d' } }
      },
      y: {
        strokeColor: '#9aa7b2',
        strokeWidth: 1,
        ticks: { strokeColor: '#9aa7b2', label: { color: '#66717d' } }
      }
    }
  });

  const fixed = { fixed: true, highlight: false };
  const P = board.create('point', [1.2, 1.1], {
    name: 'P', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    label: { offset: [-22, -24], fontSize: 20 }, snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5
  });
  const Q = board.create('point', [5.8, 4.0], {
    name: 'Q', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    label: { offset: [12, 10], fontSize: 20 }, snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5
  });
  const R = board.create('point', [() => Q.X(), () => P.Y()], {
    name: 'R', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b',
    label: { offset: [10, -24], fontSize: 18 }, ...fixed
  });

  board.create('segment', [P, Q], {
    strokeColor: '#17324d', strokeWidth: 4, ...fixed
  });
  board.create('segment', [P, R], {
    strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed
  });
  board.create('segment', [R, Q], {
    strokeColor: '#b1782b', strokeWidth: 4, ...fixed
  });

  board.create('polygon', [
    [() => R.X() - 0.28, () => R.Y()],
    [() => R.X() - 0.28, () => R.Y() + 0.28],
    [() => R.X(), () => R.Y() + 0.28],
    R
  ], {
    borders: { strokeColor: '#66717d', strokeWidth: 2 },
    fillColor: 'transparent',
    vertices: { visible: false },
    ...fixed
  });

  board.create('text', [
    () => (P.X() + R.X()) / 2 - 0.65,
    () => P.Y() - 0.42,
    () => `x₂ − x₁ = ${(Q.X() - P.X()).toFixed(1)}`
  ], { color: '#2f6f9f', fontSize: 17, ...fixed });

  board.create('text', [
    () => R.X() + 0.22,
    () => (R.Y() + Q.Y()) / 2,
    () => `y₂ − y₁ = ${(Q.Y() - P.Y()).toFixed(1)}`
  ], { color: '#b1782b', fontSize: 17, ...fixed });

  board.create('text', [
    () => {
      const dx = Q.X() - P.X();
      const dy = Q.Y() - P.Y();
      const length = Math.hypot(dx, dy) || 1;
      return (P.X() + Q.X()) / 2 - 0.62 * dy / length - 0.45;
    },
    () => {
      const dx = Q.X() - P.X();
      const dy = Q.Y() - P.Y();
      const length = Math.hypot(dx, dy) || 1;
      return (P.Y() + Q.Y()) / 2 + 0.62 * dx / length;
    },
    () => `dₑ(P,Q) = ${Math.hypot(Q.X() - P.X(), Q.Y() - P.Y()).toFixed(2)}`
  ], {
    color: '#7a3f73',
    fontSize: 18,
    cssClass: 'distance-hypotenuse-label',
    ...fixed
  });

  board.create('text', [0.2, 5.05, 'Move P or Q: the right triangle and all three lengths update automatically.'], {
    color: '#66717d', fontSize: 16, ...fixed
  });

  const panel = host.closest('[data-fullscreen-panel]');
  const resize = () => {
    board.resizeContainer(host.clientWidth, host.clientHeight);
    board.fullUpdate();
  };
  document.addEventListener('fullscreenchange', () => setTimeout(resize, 80));
  window.addEventListener('resize', resize);
})();
