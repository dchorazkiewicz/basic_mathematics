(() => {
  const host = document.querySelector('[data-parametric-curves]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-parametric-mode]')];
  const slider = panel.querySelector('[data-parametric-slider]');
  const value = panel.querySelector('[data-parametric-value]');
  const formula = panel.querySelector('[data-parametric-form]');
  const pointReadout = panel.querySelector('[data-parametric-point]');
  const BASE_VIEW = [-5.5, 5, 5.5, -5];

  const modes = {
    circle: {
      min: 0, max: 2 * Math.PI,
      x: t => 3 * Math.cos(t), y: t => 3 * Math.sin(t),
      formula: 'x(t) = 3 cos t,  y(t) = 3 sin t'
    },
    ellipse: {
      min: 0, max: 2 * Math.PI,
      x: t => 4 * Math.cos(t), y: t => 2 * Math.sin(t),
      formula: 'x(t) = 4 cos t,  y(t) = 2 sin t'
    },
    parabola: {
      min: -2.4, max: 2.4,
      x: t => t, y: t => t * t - 2,
      formula: 'x(t) = t,  y(t) = t² − 2'
    }
  };

  const state = { mode: 'circle', t: 0 };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: BASE_VIEW, axis: true, grid: true,
    showNavigation: false, showCopyright: false, keepAspectRatio: true,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  const curve = board.create('curve', [
    t => modes[state.mode].x(t),
    t => modes[state.mode].y(t),
    () => modes[state.mode].min,
    () => modes[state.mode].max
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, fixed: true, highlight: false });

  board.create('point', [
    () => modes[state.mode].x(state.t),
    () => modes[state.mode].y(state.t)
  ], { name: 'P(t)', size: 6, fillColor: '#b1782b', strokeColor: '#b1782b', fixed: true, highlight: false });

  board.create('segment', [
    () => [modes[state.mode].x(state.t), modes[state.mode].y(state.t)],
    () => [modes[state.mode].x(state.t), 0]
  ], { strokeColor: '#9aa7b2', dash: 2, strokeWidth: 2, fixed: true, highlight: false });
  board.create('segment', [
    () => [modes[state.mode].x(state.t), modes[state.mode].y(state.t)],
    () => [0, modes[state.mode].y(state.t)]
  ], { strokeColor: '#9aa7b2', dash: 2, strokeWidth: 2, fixed: true, highlight: false });

  const fmt = n => (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, '');

  function render() {
    const mode = modes[state.mode];
    const x = mode.x(state.t);
    const y = mode.y(state.t);
    value.textContent = fmt(state.t);
    formula.textContent = mode.formula;
    pointReadout.textContent = `t = ${fmt(state.t)},  P(t) = (${fmt(x)}, ${fmt(y)})`;
    curve.updateCurve();
    board.fullUpdate();
  }

  function setMode(modeName) {
    state.mode = modeName;
    const mode = modes[modeName];
    slider.min = mode.min;
    slider.max = mode.max;
    slider.step = modeName === 'parabola' ? 0.02 : 0.01;
    slider.value = mode.min;
    state.t = Number(slider.value);
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.parametricMode === modeName));
    render();
  }

  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.parametricMode)));
  slider.addEventListener('input', () => { state.t = Number(slider.value); render(); });

  if (window.LectureJSX?.keepBoardFitted) {
    window.LectureJSX.keepBoardFitted({ board, host, boundingBox: BASE_VIEW });
  }

  setMode('circle');
})();
