(() => {
  const host = document.querySelector('[data-equation-families]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-curve-mode]')];
  const controls = [...panel.querySelectorAll('[data-parameter]')];
  const controlsGrid = panel.querySelector('.parameter-controls');
  const generalEquation = panel.querySelector('[data-general-equation]');
  const currentEquation = panel.querySelector('[data-current-equation]');
  const parameterMeaning = panel.querySelector('[data-parameter-meaning]');

  const state = { mode: 'circle', p1: 0, p2: 0, p3: 2 };
  const configs = {
    circle: {
      general: '(x − h)² + (y − k)² = r²',
      meaning: 'h and k locate the centre; r is the radius.',
      parameters: [
        { label: 'h', min: -3, max: 3, step: 0.5, value: 0, name: 'horizontal centre coordinate' },
        { label: 'k', min: -3, max: 3, step: 0.5, value: 0, name: 'vertical centre coordinate' },
        { label: 'r', min: 0.5, max: 4, step: 0.5, value: 2, name: 'radius' }
      ]
    },
    disk: {
      general: '(x − h)² + (y − k)² ≤ r²',
      meaning: 'h and k locate the centre; r determines the radius of the filled disk.',
      parameters: [
        { label: 'h', min: -3, max: 3, step: 0.5, value: 0, name: 'horizontal centre coordinate' },
        { label: 'k', min: -3, max: 3, step: 0.5, value: 0, name: 'vertical centre coordinate' },
        { label: 'r', min: 0.5, max: 4, step: 0.5, value: 2, name: 'radius' }
      ]
    },
    line: {
      general: 'y = mx + b',
      meaning: 'm is the slope; b is the y-intercept.',
      parameters: [
        { label: 'm', min: -3, max: 3, step: 0.25, value: 1, name: 'slope' },
        { label: 'b', min: -4, max: 4, step: 0.5, value: 2, name: 'vertical intercept' }
      ]
    },
    parabola: {
      general: 'y = a(x − h)² + k',
      meaning: 'a controls opening and vertical scale; (h,k) is the vertex.',
      parameters: [
        { label: 'a', min: -2, max: 2, step: 0.25, value: 1, name: 'opening direction and vertical scale' },
        { label: 'h', min: -3, max: 3, step: 0.5, value: 0, name: 'horizontal vertex coordinate' },
        { label: 'k', min: -3, max: 3, step: 0.5, value: 0, name: 'vertical vertex coordinate' }
      ]
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
    return String(rounded);
  };
  const signed = value => value < 0 ? `− ${format(Math.abs(value))}` : `+ ${format(value)}`;
  const shifted = (symbol, value) => value === 0 ? symbol : value > 0 ? `(${symbol} − ${format(value)})` : `(${symbol} + ${format(Math.abs(value))})`;

  function substitutedEquation() {
    if (state.mode === 'circle' || state.mode === 'disk') {
      const relation = state.mode === 'circle' ? '=' : '≤';
      return `${shifted('x', state.p1)}² + ${shifted('y', state.p2)}² ${relation} ${format(state.p3 ** 2)}`;
    }
    if (state.mode === 'line') return `y = ${format(state.p1)}x ${signed(state.p2)}`;
    return `y = ${format(state.p1)}${shifted('x', state.p2)}² ${signed(state.p3)}`;
  }

  function updateObjects() {
    const config = configs[state.mode];
    const isCircle = state.mode === 'circle' || state.mode === 'disk';
    circle.setAttribute({ visible: isCircle, fillOpacity: state.mode === 'disk' ? 0.18 : 0 });
    line.setAttribute({ visible: state.mode === 'line' });
    parabola.setAttribute({ visible: state.mode === 'parabola' });
    generalEquation.textContent = config.general;
    currentEquation.textContent = substitutedEquation();
    parameterMeaning.textContent = config.meaning;
    board.fullUpdate();
  }

  function configureControls() {
    const parameters = configs[state.mode].parameters;
    state.p1 = parameters[0]?.value ?? 0;
    state.p2 = parameters[1]?.value ?? 0;
    state.p3 = parameters[2]?.value ?? 0;
    controlsGrid?.style.setProperty('--parameter-count', String(parameters.length));

    controls.forEach((control, index) => {
      const parameter = parameters[index];
      const label = control.querySelector('[data-parameter-label]');
      const value = control.querySelector('[data-parameter-value]');
      const input = control.querySelector('input');

      control.hidden = !parameter;
      if (!parameter) {
        input.disabled = true;
        return;
      }

      input.disabled = false;
      label.textContent = parameter.label;
      input.min = parameter.min;
      input.max = parameter.max;
      input.step = parameter.step;
      input.value = parameter.value;
      input.setAttribute('aria-label', `${state.mode}: ${parameter.name}`);
      value.textContent = format(parameter.value);
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