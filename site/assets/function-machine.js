(() => {
  const host = document.querySelector('[data-function-machine]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const modeButtons = [...panel.querySelectorAll('[data-function-mode]')];
  const slider = panel.querySelector('[data-function-x-slider]');
  const xOutput = panel.querySelector('[data-function-x]');
  const equation = panel.querySelector('[data-function-equation]');
  const inputStep = panel.querySelector('[data-input-step]');
  const substitutionStep = panel.querySelector('[data-substitution-step]');
  const outputStep = panel.querySelector('[data-output-step]');
  const pointStep = panel.querySelector('[data-point-step]');

  const BASE_VIEW = [-5, 6, 5, -6];
  const state = { mode: 'linear', x: 1 };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: BASE_VIEW, axis: true, grid: true,
    showNavigation: false, showCopyright: false, keepAspectRatio: true,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  const linear = board.create('functiongraph', [x => 2 * x + 1], { strokeColor: '#2f6f9f', strokeWidth: 4, fixed: true, highlight: false });
  const inverse = board.create('functiongraph', [x => 4 / x, -5, -0.12], { strokeColor: '#b1782b', strokeWidth: 4, fixed: true, highlight: false, visible: false });
  const inverse2 = board.create('functiongraph', [x => 4 / x, 0.12, 5], { strokeColor: '#b1782b', strokeWidth: 4, fixed: true, highlight: false, visible: false });

  const yValue = () => state.mode === 'linear' ? 2 * state.x + 1 : 4 / state.x;
  const point = board.create('point', [() => state.x, yValue], { name: 'P', size: 5, fillColor: '#3f735f', strokeColor: '#3f735f', fixed: true, highlight: false });
  board.create('segment', [[() => state.x, 0], point], { strokeColor: '#3f735f', dash: 2, fixed: true, highlight: false });
  board.create('segment', [[0, yValue], point], { strokeColor: '#3f735f', dash: 2, fixed: true, highlight: false });

  const history = [];
  const historyPoints = [];
  const format = value => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.00$/, '');

  function addHistoryPoint() {
    const key = `${state.mode}:${state.x}`;
    if (history.includes(key)) return;
    history.push(key);
    historyPoints.push(board.create('point', [state.x, yValue()], { name: '', size: 2, fillColor: '#66717d', strokeColor: '#66717d', fillOpacity: .35, strokeOpacity: .35, fixed: true, highlight: false }));
  }

  function render(addPoint = false) {
    if (state.mode === 'inverse' && Math.abs(state.x) < 0.25) state.x = state.x < 0 ? -0.25 : 0.25;
    const y = yValue();
    if (addPoint) addHistoryPoint();
    linear.setAttribute({ visible: state.mode === 'linear' });
    inverse.setAttribute({ visible: state.mode === 'inverse' });
    inverse2.setAttribute({ visible: state.mode === 'inverse' });
    modeButtons.forEach(button => button.classList.toggle('is-active', button.dataset.functionMode === state.mode));

    if (state.mode === 'linear') {
      equation.textContent = '$y=2x+1$';
      substitutionStep.textContent = `$y=2\\cdot${format(state.x)}+1$`;
    } else {
      equation.textContent = '$y=\\frac{4}{x}$';
      substitutionStep.textContent = `$y=\\frac{4}{${format(state.x)}}$`;
    }
    inputStep.textContent = `$x=${format(state.x)}$`;
    outputStep.textContent = `$y=${format(y)}$`;
    pointStep.textContent = `$(${format(state.x)},${format(y)})$`;
    xOutput.textContent = format(state.x);
    slider.value = state.x;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  slider.addEventListener('input', () => { state.x = Number(slider.value); render(true); });
  modeButtons.forEach(button => button.addEventListener('click', () => {
    state.mode = button.dataset.functionMode;
    state.x = state.mode === 'linear' ? 1 : 2;
    render(true);
  }));

  if (window.LectureJSX?.keepBoardFitted) {
    window.LectureJSX.keepBoardFitted({ board, host, boundingBox: BASE_VIEW });
  }

  render(true);
})();
