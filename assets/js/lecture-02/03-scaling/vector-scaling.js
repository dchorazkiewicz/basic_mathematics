(() => {
  const host = document.querySelector('[data-vector-scaling]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const slider = panel.querySelector('[data-scale-t-slider]');
  const output = panel.querySelector('[data-scale-t]');
  const readout = panel.querySelector('[data-scaling-readout]');
  const state = { t: 2 };
  const VIEW = [-7, 6, 8, -6];
  const fixed = { fixed: true, highlight: false };
  const u = [2, 1];
  const fmt = value => Number(value).toFixed(2).replace(/\.00$/, '').replace(/\.50$/, '.5');

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

  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const U = board.create('point', u, { visible: false, ...fixed });
  const TU = board.create('point', [() => state.t * u[0], () => state.t * u[1]], { visible: false, ...fixed });

  board.create('arrow', [O, U], { strokeColor: '#9aa6b2', strokeWidth: 3, dash: 2, ...fixed });
  board.create('arrow', [O, TU], { strokeColor: '#2f6f9f', strokeWidth: 5, ...fixed });
  board.create('text', [() => TU.X() / 2, () => TU.Y() / 2 + .4, () => `${fmt(state.t)}u`],
    window.LectureJSX?.vectorLabelStyle?.({ color: '#2f6f9f', fontSize: 18 }) || {
      color: '#2f6f9f', fontSize: 18, display: 'html', cssClass: 'vector-label-chip', ...fixed
    });

  function render() {
    output.textContent = fmt(state.t);
    readout.textContent = `$${fmt(state.t)}\\mathbf u=[${fmt(state.t * u[0])},${fmt(state.t * u[1])}]$`;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([readout]);
  }

  slider.addEventListener('input', () => {
    state.t = Number(slider.value);
    render();
  });

  render();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
