(() => {
  const host = document.querySelector('[data-vector-scaling]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const aSlider = panel.querySelector('[data-scale-a-slider]');
  const bSlider = panel.querySelector('[data-scale-b-slider]');
  const aOut = panel.querySelector('[data-scale-a]');
  const bOut = panel.querySelector('[data-scale-b]');
  const readout = panel.querySelector('[data-scaling-readout]');
  const state = { a: 2, b: -1 };
  const VIEW = [-7, 6, 8, -6];
  const board = JXG.JSXGraph.initBoard(host.id, { boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true, showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false } });
  const fixed = { fixed: true, highlight: false };
  const u = [2, 1];
  const v = [1, 2.5];
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const AU = board.create('point', [() => state.a * u[0], () => state.a * u[1]], { visible: false, ...fixed });
  const S = board.create('point', [() => state.a * u[0] + state.b * v[0], () => state.a * u[1] + state.b * v[1]], { visible: false, ...fixed });
  board.create('arrow', [O, AU], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('arrow', [AU, S], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('arrow', [O, S], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  board.create('arrow', [O, u], { strokeColor: '#2f6f9f', strokeWidth: 2, dash: 2, ...fixed });
  board.create('arrow', [O, v], { strokeColor: '#b1782b', strokeWidth: 2, dash: 2, ...fixed });
  const fmt = n => Number(n).toFixed(2).replace(/\.00$/, '').replace(/\.50$/, '.5');
  function render() {
    aOut.textContent = fmt(state.a); bOut.textContent = fmt(state.b);
    readout.textContent = `$${fmt(state.a)}\\mathbf u${state.b < 0 ? '' : '+'}${fmt(state.b)}\\mathbf v$`;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([readout]);
  }
  aSlider.addEventListener('input', () => { state.a = Number(aSlider.value); render(); });
  bSlider.addEventListener('input', () => { state.b = Number(bSlider.value); render(); });
  render();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();