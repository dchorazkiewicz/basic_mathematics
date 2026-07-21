(() => {
  const host = document.querySelector('[data-vector-basis]');
  if (!host || !window.JXG) return;
  const panel = host.closest('[data-fullscreen-panel]');
  const aSlider = panel.querySelector('[data-basis-alpha-slider]');
  const bSlider = panel.querySelector('[data-basis-beta-slider]');
  const aOut = panel.querySelector('[data-basis-alpha]');
  const bOut = panel.querySelector('[data-basis-beta]');
  const readout = panel.querySelector('[data-basis-readout]');
  const state = { a: 3, b: 1 };
  const VIEW = [-7, 6, 8, -6];
  const board = JXG.JSXGraph.initBoard(host.id, { boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true, showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false } });
  const fixed = { fixed: true, highlight: false };
  const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
  const b1 = [1, 1], b2 = [1, -1];
  const A = board.create('point', [() => state.a, () => state.a], { visible: false, ...fixed });
  const V = board.create('point', [() => state.a + state.b, () => state.a - state.b], { name: 'v', size: 5, fillColor: '#17324d', strokeColor: '#17324d', ...fixed });
  board.create('arrow', [O, b1], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('arrow', [O, b2], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('arrow', [O, A], { strokeColor: '#2f6f9f', strokeWidth: 3, dash: 2, ...fixed });
  board.create('arrow', [A, V], { strokeColor: '#b1782b', strokeWidth: 3, dash: 2, ...fixed });
  board.create('arrow', [O, V], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
  board.create('text', [1.15, 1.15, 'b₁'], { color: '#2f6f9f', fontSize: 18, ...fixed });
  board.create('text', [1.15, -1.15, 'b₂'], { color: '#b1782b', fontSize: 18, ...fixed });
  const fmt = n => Number(n).toFixed(2).replace(/\.00$/, '').replace(/\.50$/, '.5');
  function render() {
    aOut.textContent = fmt(state.a); bOut.textContent = fmt(state.b);
    const x = state.a + state.b, y = state.a - state.b;
    readout.textContent = `$\\mathbf v=${fmt(state.a)}\\mathbf b_1${state.b < 0 ? '' : '+'}${fmt(state.b)}\\mathbf b_2=[${fmt(x)},${fmt(y)}]$`;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([readout]);
  }
  aSlider.addEventListener('input', () => { state.a = Number(aSlider.value); render(); });
  bSlider.addEventListener('input', () => { state.b = Number(bSlider.value); render(); });
  render();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();