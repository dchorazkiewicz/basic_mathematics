(() => {
  const host = document.querySelector('[data-linear-combination]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const aSlider = panel.querySelector('[data-linear-a-slider]');
  const bSlider = panel.querySelector('[data-linear-b-slider]');
  const aOut = panel.querySelector('[data-linear-a]');
  const bOut = panel.querySelector('[data-linear-b]');
  const readout = panel.querySelector('[data-linear-combination-readout]');
  const state = { a: 2, b: -1 };
  const VIEW = [-7, 6, 8, -6];
  const fixed = { fixed: true, highlight: false };
  const u = [2, 1];
  const v = [1, 2.5];
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
  const AU = board.create('point', [() => state.a * u[0], () => state.a * u[1]], { visible: false, ...fixed });
  const S = board.create('point', [
    () => state.a * u[0] + state.b * v[0],
    () => state.a * u[1] + state.b * v[1]
  ], { visible: false, ...fixed });

  board.create('arrow', [O, u], { strokeColor: '#2f6f9f', strokeWidth: 2, dash: 2, ...fixed });
  board.create('arrow', [O, v], { strokeColor: '#b1782b', strokeWidth: 2, dash: 2, ...fixed });
  board.create('arrow', [O, AU], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('arrow', [AU, S], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('arrow', [O, S], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });

  function render() {
    aOut.textContent = fmt(state.a);
    bOut.textContent = fmt(state.b);
    const sign = state.b < 0 ? '' : '+';
    readout.textContent = `$${fmt(state.a)}\\mathbf u${sign}${fmt(state.b)}\\mathbf v$`;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([readout]);
  }

  aSlider.addEventListener('input', () => {
    state.a = Number(aSlider.value);
    render();
  });
  bSlider.addEventListener('input', () => {
    state.b = Number(bSlider.value);
    render();
  });

  render();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
