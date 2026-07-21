(() => {
  const host = document.querySelector('[data-circle-relation]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const rSlider = panel.querySelector('[data-relation-r-slider]');
  const xSlider = panel.querySelector('[data-relation-x-slider]');
  const rOutput = panel.querySelector('[data-relation-r]');
  const xOutput = panel.querySelector('[data-relation-x]');
  const equation = panel.querySelector('[data-relation-equation]');
  const inputReadout = panel.querySelector('[data-relation-input]');
  const solutionsReadout = panel.querySelector('[data-relation-solutions]');
  const pointsReadout = panel.querySelector('[data-relation-points]');
  const BASE_VIEW = [-5, 5, 5, -5];
  const state = { r: 3, x: 1 };

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: BASE_VIEW, axis: true, grid: true,
    showNavigation: false, showCopyright: false, keepAspectRatio: true,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  const O = board.create('point', [0, 0], { name: 'O', size: 3, fixed: true, highlight: false });
  const circle = board.create('circle', [O, () => state.r], { strokeColor: '#2f6f9f', strokeWidth: 4, fillOpacity: 0, fixed: true, highlight: false });
  board.create('line', [[() => state.x, -5], [() => state.x, 5]], { strokeColor: '#66717d', strokeWidth: 2, dash: 2, fixed: true, highlight: false });

  const yAbs = () => Math.sqrt(Math.max(0, state.r ** 2 - state.x ** 2));
  const upper = board.create('point', [() => state.x, yAbs], { name: 'P₊', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f', fixed: true, highlight: false });
  const lower = board.create('point', [() => state.x, () => -yAbs()], { name: 'P₋', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f', fixed: true, highlight: false });

  const format = value => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.00$/, '');

  function render() {
    xSlider.min = -state.r;
    xSlider.max = state.r;
    if (state.x < -state.r) state.x = -state.r;
    if (state.x > state.r) state.x = state.r;
    xSlider.value = state.x;

    const radicand = state.r ** 2 - state.x ** 2;
    const tangent = Math.abs(radicand) < 1e-9;
    upper.setAttribute({ visible: radicand >= 0 });
    lower.setAttribute({ visible: radicand > 1e-9 });

    equation.textContent = `$x^2+y^2=${format(state.r ** 2)}$`;
    inputReadout.textContent = `$x=${format(state.x)}$`;
    if (radicand < 0) {
      solutionsReadout.textContent = 'no real value of $y$';
      pointsReadout.textContent = 'zero points';
    } else if (tangent) {
      solutionsReadout.textContent = '$y=0$';
      pointsReadout.textContent = 'one point';
    } else {
      solutionsReadout.textContent = `$y=\\pm\\sqrt{${format(radicand)}}$`;
      pointsReadout.textContent = 'two points';
    }
    rOutput.textContent = format(state.r);
    xOutput.textContent = format(state.x);
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  rSlider.addEventListener('input', () => { state.r = Number(rSlider.value); render(); });
  xSlider.addEventListener('input', () => { state.x = Number(xSlider.value); render(); });

  if (window.LectureJSX?.keepBoardFitted) {
    window.LectureJSX.keepBoardFitted({ board, host, boundingBox: BASE_VIEW });
  }

  render();
})();
