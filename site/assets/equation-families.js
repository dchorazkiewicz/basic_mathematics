(() => {
  const host = document.querySelector('[data-equation-families]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-curve-mode]')];
  const controls = [...panel.querySelectorAll('[data-parameter]')];
  const equation = panel.querySelector('[data-current-equation]');

  const state = { mode: 'circle', p1: 0, p2: 0, p3: 2 };
  const configs = {
    circle: {
      labels: ['h', 'k', 'r'], min: [-3, -3, 0.5], max: [3, 3, 4], step: [0.5, 0.5, 0.5], defaults: [0, 0, 2]
    },
    disk: {
      labels: ['h', 'k', 'r'], min: [-3, -3, 0.5], max: [3, 3, 4], step: [0.5, 0.5, 0.5], defaults: [0, 0, 2]
    },
    line: {
      labels: ['m', 'b', ''], min: [-3, -4, 0], max: [3, 4, 0], step: [0.25, 0.5, 1], defaults: [1, 2, 0]
    },
    parabola: {
      labels: ['a', 'h', 'k'], min: [-2, -3, -3], max: [2, 3, 3], step: [0.25, 0.5, 0.5], defaults: [1, 0, 0]
    }
  };

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [-6, 6, 6, -6],
    axis: true,
    grid: true,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false },
    defaultAxes: {
      x: { strokeColor: '#74818d', strokeWidth: 1, ticks: { strokeColor: '#9aa7b2', label: { color: '#66717d' } } },
      y: { strokeColor: '#74818d', strokeWidth: 1, ticks: { strokeColor: '#9aa7b2', label: { color: '#66717d' } } }
    }
  });

  const center = board.create('point', [() => state.p1, () => state.p2], {
    name: '', visible: false, fixed: true
  });
  const circle = board.create('circle', [center, () => Math.max(0.1, state.p3)], {
    strokeColor: '#2f6f9f', strokeWidth: 4, fillColor: '#2f6f9f', fillOpacity: 0,
    fixed: true, highlight: false
  });
  const line = board.create('functiongraph', [x => state.p1 * x + state.p2], {
    strokeColor: '#3f735f', strokeWidth: 4, fixed: true, highlight: false, visible: false
  });
  const parabola = board.create('functiongraph', [x => state.p1 * (x - state.p2) ** 2 + state.p3], {
    strokeColor: '#b1782b', strokeWidth: 4, fixed: true, highlight: false, visible: false
  });

  const format = value => {
    const rounded = Math.round(value * 100) / 100;
    return Number.isInteger(rounded) ? String(rounded) : String(rounded);
  };
  const signed = value => value < 0 ? `− ${format(Math.abs(value))}` : `+ ${format(value)}`;
  const shifted = (symbol, value) => value === 0 ? symbol : value > 0 ? `(${symbol} − ${format(value)})` : `(${symbol} + ${format(Math.abs(value))})`;

  function equationText() {
    if (state.mode === 'circle' || state.mode === 'disk') {
      const relation = state.mode === 'circle' ? '=' : '≤';
      return `${shifted('x', state.p1)}² + ${shifted('y', state.p2)}² ${relation} ${format(state.p3 ** 2)}`;
    }
    if (state.mode === 'line') {
      return `y = ${format(state.p1)}x ${signed(state.p2)}`;
    }
    return `y = ${format(state.p1)}${shifted('x', state.p2)}² ${signed(state.p3)}`;
  }

  function updateObjects() {
    const isCircle = state.mode === 'circle' || state.mode === 'disk';
    circle.setAttribute({
      visible: isCircle,
      fillOpacity: state.mode === 'disk' ? 0.18 : 0
    });
    line.setAttribute({ visible: state.mode === 'line' });
    parabola.setAttribute({ visible: state.mode === 'parabola' });
    equation.textContent = equationText();
    board.fullUpdate();
  }

  function configureControls() {
    const config = configs[state.mode];
    [state.p1, state.p2, state.p3] = config.defaults;

    controls.forEach((control, index) => {
      const label = control.querySelector('[data-parameter-label]');
      const value = control.querySelector('[data-parameter-value]');
      const input = control.querySelector('input');
      const enabled = Boolean(config.labels[index]);

      control.hidden = !enabled;
      if (!enabled) return;
      label.textContent = config.labels[index];
      input.min = config.min[index];
      input.max = config.max[index];
      input.step = config.step[index];
      input.value = config.defaults[index];
      value.textContent = format(config.defaults[index]);
    });

    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.curveMode === state.mode));
    updateObjects();
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    state.mode = button.dataset.curveMode;
    configureControls();
  }));

  controls.forEach((control, index) => {
    const input = control.querySelector('input');
    const value = control.querySelector('[data-parameter-value]');
    input.addEventListener('input', () => {
      state[`p${index + 1}`] = Number(input.value);
      value.textContent = format(Number(input.value));
      updateObjects();
    });
  });

  const resize = () => {
    board.resizeContainer(host.clientWidth, host.clientHeight);
    board.fullUpdate();
  };
  document.addEventListener('fullscreenchange', () => setTimeout(resize, 80));
  window.addEventListener('resize', resize);

  configureControls();
})();