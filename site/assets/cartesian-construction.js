(() => {
  const host = document.querySelector('[data-cartesian-construction]');
  if (!host || !window.JXG) return;

  const FULL_VIEW = [-4.8, 3.2, 4.8, -3.2];
  const FOCUS_VIEW = [-0.3, 1.2, 1.3, -1.2];

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: FULL_VIEW,
    axis: false,
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const colors = {
    ink: '#18212b', blue: '#2f6f9f', muted: '#66717d', gold: '#b1782b',
    green: '#3f735f', helper: '#a9b2ba', grid: '#dce4ea'
  };
  const fixed = { fixed: true, highlight: false };
  const objects = [];
  const add = (object, key) => {
    object._sceneKey = key;
    objects.push(object);
    object.setAttribute({ visible: false });
    return object;
  };
  const hideAll = () => objects.forEach(object => object.setAttribute({ visible: false }));
  const showKeys = keys => objects.forEach(object => object.setAttribute({ visible: keys.includes(object._sceneKey) }));

  const point = (coords, name, key, options = {}) => add(board.create('point', coords, {
    name, size: 4, fillColor: colors.gold, strokeColor: colors.gold,
    label: { offset: [8, -24], fontSize: 18 }, ...fixed, ...options
  }), key);
  const segment = (a, b, key, options = {}) => add(board.create('segment', [a, b], {
    strokeColor: colors.muted, strokeWidth: 2, ...fixed, ...options
  }), key);
  const text = (coords, value, key, options = {}) => add(board.create('text', [coords[0], coords[1], value], {
    color: colors.muted, fontSize: 16, ...fixed, ...options
  }), key);
  const tickX = (value, key) => {
    segment([value, -.13], [value, .13], key);
    text([value - .08, -.42], String(value), key);
  };
  const tickY = (value, key) => {
    segment([-.13, value], [.13, value], key);
    text([-.45, value - .08], String(value), key);
  };

  point([-2.8, 0], 'A', 'points');
  point([2.8, 0], 'B', 'points');
  add(board.create('line', [[-4, 0], [4, 0]], {
    strokeColor: colors.blue, strokeWidth: 4, ...fixed
  }), 'xaxis');
  point([0, 0], 'O', 'origin', {
    size: 5, fillColor: '#17324d', strokeColor: '#17324d', label: { offset: [10, -26], fontSize: 20 }
  });
  add(board.create('line', [[0, -2.6], [0, 2.6]], {
    strokeColor: colors.blue, strokeWidth: 4, ...fixed
  }), 'yaxis');
  add(board.create('polygon', [[0, 0], [.34, 0], [.34, .34], [0, .34]], {
    borders: { strokeColor: colors.muted, strokeWidth: 2 }, fillColor: 'transparent',
    vertices: { visible: false }, ...fixed
  }), 'rightangle');

  add(board.create('arrow', [[3.2, 0], [4.15, 0]], { strokeColor: colors.blue, strokeWidth: 4, ...fixed }), 'directions');
  add(board.create('arrow', [[0, 1.9], [0, 2.85]], { strokeColor: colors.blue, strokeWidth: 4, ...fixed }), 'directions');
  text([3.15, .35], 'positive x', 'directions', { fontSize: 18 });
  text([.28, 2.55], 'positive y', 'directions', { fontSize: 18 });

  /* The unit is the segment OU on the axis itself. */
  segment([0, 0], [1, 0], 'unit', { strokeColor: colors.gold, strokeWidth: 5 });
  point([1, 0], 'U', 'unit', { label: { offset: [8, -26], fontSize: 18 } });
  text([.35, .28], 'unit length', 'unit', { color: colors.gold });

  /* First compass circle: it determines ±1 on both axes simultaneously. */
  add(board.create('circle', [[0, 0], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-origin');
  tickX(-1, 'marks-one');
  tickX(1, 'marks-one');
  tickY(-1, 'marks-one');
  tickY(1, 'marks-one');

  /* Every following circle is shown before the new mark exists. */
  add(board.create('circle', [[1, 0], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-x-plus-2');
  tickX(2, 'mark-x-plus-2');

  add(board.create('circle', [[2, 0], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-x-plus-3');
  tickX(3, 'mark-x-plus-3');

  add(board.create('circle', [[-1, 0], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-x-minus-2');
  tickX(-2, 'mark-x-minus-2');

  add(board.create('circle', [[0, 1], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-y-plus-2');
  tickY(2, 'mark-y-plus-2');

  add(board.create('circle', [[0, -1], 1], {
    strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'circle-y-minus-2');
  tickY(-2, 'mark-y-minus-2');

  /* Scale refinement is shown separately on one interval. */
  add(board.create('segment', [[0, 0], [1, 0]], {
    strokeColor: colors.blue, strokeWidth: 4, ...fixed
  }), 'focus');
  point([0, 0], '0', 'focus', { size: 3, fillColor: colors.ink, strokeColor: colors.ink });
  point([1, 0], '1', 'focus', { size: 3, fillColor: colors.ink, strokeColor: colors.ink });
  add(board.create('circle', [[0, 0], .72], {
    strokeColor: colors.helper, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'bisect-helpers');
  add(board.create('circle', [[1, 0], .72], {
    strokeColor: colors.helper, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed
  }), 'bisect-helpers');
  add(board.create('line', [[.5, -1], [.5, 1]], {
    strokeColor: colors.helper, strokeWidth: 2, dash: 2, ...fixed
  }), 'bisect-helpers');
  point([.5, 0], '1/2', 'half');
  point([.25, 0], '1/4', 'quarter');
  point([.75, 0], '3/4', 'quarter');

  for (let x = -4; x <= 4; x += .5) {
    add(board.create('segment', [[x, -2.5], [x, 2.5]], {
      strokeColor: colors.grid, strokeWidth: 1, ...fixed
    }), 'grid');
  }
  for (let y = -2.5; y <= 2.5; y += .5) {
    add(board.create('segment', [[-4, y], [4, y]], {
      strokeColor: colors.grid, strokeWidth: 1, ...fixed
    }), 'grid');
  }

  point([2.5, 1.5], 'P', 'point-p', {
    size: 5, fillColor: colors.green, strokeColor: colors.green,
    label: { offset: [14, 8], fontSize: 22 }
  });
  point([2.5, 0], '', 'projection', { size: 4, fillColor: colors.green, strokeColor: colors.green });
  point([0, 1.5], '', 'projection', { size: 4, fillColor: colors.green, strokeColor: colors.green });
  segment([2.5, 1.5], [2.5, 0], 'projection', { strokeColor: colors.green, dash: 2 });
  segment([2.5, 1.5], [0, 1.5], 'projection', { strokeColor: colors.green, dash: 2 });
  text([2.85, 1.1], 'P = (x, y)', 'coordinates', { color: colors.green, fontSize: 18 });

  const baseAxes = ['xaxis', 'origin', 'yaxis', 'rightangle', 'directions'];
  const firstMarks = [...baseAxes, 'unit', 'marks-one'];
  const xPlus2 = [...firstMarks, 'mark-x-plus-2'];
  const xPlus3 = [...xPlus2, 'mark-x-plus-3'];
  const xMinus2 = [...xPlus3, 'mark-x-minus-2'];
  const yPlus2 = [...xMinus2, 'mark-y-plus-2'];
  const allIntegerMarks = [...yPlus2, 'mark-y-minus-2'];

  const steps = [
    { title: 'Begin with the Euclidean plane', keys: [] },
    { title: 'Choose two points', keys: ['points'] },
    { title: 'Construct the first straight line through them', keys: ['points', 'xaxis'] },
    { title: 'Choose the origin O on the line', keys: ['xaxis', 'origin'] },
    { title: 'Construct the perpendicular axis through O', keys: ['xaxis', 'origin', 'yaxis', 'rightangle'] },
    { title: 'Choose the positive directions', keys: baseAxes },
    { title: 'Choose the unit segment OU on the horizontal axis', keys: [...baseAxes, 'unit'] },
    { title: 'Draw the circle centred at O with radius OU', keys: [...baseAxes, 'unit', 'circle-origin'] },
    { title: 'The intersections determine ±1 on both axes', keys: firstMarks },
    { title: 'Move the same radius to the constructed point +1', keys: [...firstMarks, 'circle-x-plus-2'] },
    { title: 'The new intersection determines +2', keys: xPlus2 },
    { title: 'Move the same radius from +2', keys: [...xPlus2, 'circle-x-plus-3'] },
    { title: 'The new intersection determines +3', keys: xPlus3 },
    { title: 'Repeat from −1 in the negative direction', keys: [...xPlus3, 'circle-x-minus-2'] },
    { title: 'The new intersection determines −2', keys: xMinus2 },
    { title: 'Repeat from +1 on the vertical axis', keys: [...xMinus2, 'circle-y-plus-2'] },
    { title: 'The new intersection determines vertical +2', keys: yPlus2 },
    { title: 'Repeat from −1 on the vertical axis', keys: [...yPlus2, 'circle-y-minus-2'] },
    { title: 'The new intersection determines vertical −2', keys: allIntegerMarks },
    { title: 'Focus on the single unit interval [0,1]', keys: ['focus'], bbox: FOCUS_VIEW },
    { title: 'Construct its midpoint using equal-radius circles', keys: ['focus', 'bisect-helpers'], bbox: FOCUS_VIEW },
    { title: 'Remove the helpers and retain the mark 1/2', keys: ['focus', 'half'], bbox: FOCUS_VIEW },
    { title: 'Bisect again to obtain quarter marks', keys: ['focus', 'half', 'quarter'], bbox: FOCUS_VIEW },
    { title: 'Return to the completed coordinate axes', keys: allIntegerMarks },
    { title: 'Choose an arbitrary point P', keys: [...allIntegerMarks, 'point-p'] },
    { title: 'Project P orthogonally onto both axes', keys: [...allIntegerMarks, 'point-p', 'projection'] },
    { title: 'Reveal a light auxiliary grid', keys: ['grid', ...allIntegerMarks, 'point-p', 'projection'] },
    { title: 'Read the ordered pair (x,y)', keys: ['grid', ...allIntegerMarks, 'point-p', 'projection', 'coordinates'] }
  ];

  const panel = host.closest('[data-fullscreen-panel]');
  const status = panel.querySelector('[data-status]');
  const stepTitle = panel.querySelector('[data-step-title]');
  const previous = panel.querySelector('[data-previous]');
  const next = panel.querySelector('[data-next]');
  const play = panel.querySelector('[data-play]');
  const reset = panel.querySelector('[data-reset]');
  let current = 0;
  let timer = null;

  function render() {
    const step = steps[current];
    hideAll();
    showKeys(step.keys);
    board.setBoundingBox(step.bbox || FULL_VIEW, true);
    board.fullUpdate();
    status.textContent = `Step ${current + 1} of ${steps.length}`;
    stepTitle.textContent = step.title;
    previous.disabled = current === 0;
    next.disabled = current === steps.length - 1;
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
    play.textContent = 'Play';
  }
  function advance() {
    if (current < steps.length - 1) {
      current += 1;
      render();
    } else stop();
  }

  previous.addEventListener('click', () => { stop(); current = Math.max(0, current - 1); render(); });
  next.addEventListener('click', () => { stop(); advance(); });
  reset.addEventListener('click', () => { stop(); current = 0; render(); });
  play.addEventListener('click', () => {
    if (timer) return stop();
    if (current === steps.length - 1) current = 0;
    render();
    play.textContent = 'Pause';
    timer = setInterval(advance, 1800);
  });

  document.addEventListener('fullscreenchange', () => setTimeout(() => {
    board.resizeContainer(host.clientWidth, host.clientHeight);
    board.fullUpdate();
  }, 80));
  window.addEventListener('resize', () => {
    board.resizeContainer(host.clientWidth, host.clientHeight);
    board.fullUpdate();
  });

  render();
})();