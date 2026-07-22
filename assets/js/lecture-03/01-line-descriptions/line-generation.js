// Interactive construction of L = {P0 ⊕ t v : t in R}.
(() => {
  const host = document.querySelector('[data-line-generation]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const slider = panel?.querySelector('[data-line-t-slider]');
  const output = panel?.querySelector('[data-line-t-output]');
  const readout = panel?.querySelector('[data-line-generation-readout]');
  const VIEW = [-6, 6, 7, -5];
  const fixed = { fixed: true, highlight: false };
  const label = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };
  const fmt = value => {
    const rounded = Math.round(value * 100) / 100;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
  };

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

  const P0 = board.create('point', [0.5, 0.5], {
    name: 'P₀', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f',
    snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5
  });
  const V = board.create('point', [3.5, 2.5], {
    name: 'P₀⊕v', size: 5, fillColor: '#2f6f9f', strokeColor: '#2f6f9f',
    snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 })
  });

  const t = () => Number(slider?.value ?? 1);
  const vx = () => V.X() - P0.X();
  const vy = () => V.Y() - P0.Y();
  const P = board.create('point', [
    () => P0.X() + t() * vx(),
    () => P0.Y() + t() * vy()
  ], {
    name: 'P(t)', size: 5, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, -18], fontSize: 17 })
  });

  board.create('line', [P0, V], {
    strokeColor: '#17324d', strokeWidth: 4, ...fixed
  });
  board.create('arrow', [P0, V], {
    strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed
  });
  board.create('arrow', [P0, P], {
    strokeColor: '#b1782b', strokeWidth: 5, ...fixed
  });

  board.create('text', [
    () => (P0.X() + V.X()) / 2,
    () => (P0.Y() + V.Y()) / 2 + 0.35,
    '$\\mathbf v$'
  ], label({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
  board.create('text', [
    () => (P0.X() + P.X()) / 2,
    () => (P0.Y() + P.Y()) / 2 - 0.45,
    () => `$t\\mathbf v,\\quad t=${fmt(t())}$`
  ], label({ color: '#b1782b', fontSize: 18, useMathJax: true }));

  function update() {
    const x = P0.X() + t() * vx();
    const y = P0.Y() + t() * vy();
    if (output) output.textContent = fmt(t());
    if (readout) {
      readout.textContent = `P(t) = (${fmt(P0.X())}, ${fmt(P0.Y())}) ⊕ ${fmt(t())}[${fmt(vx())}, ${fmt(vy())}] = (${fmt(x)}, ${fmt(y)})`;
    }
    board.update();
  }

  slider?.addEventListener('input', update);
  P0.on('drag', update);
  V.on('drag', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();