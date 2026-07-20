(() => {
  const host = document.querySelector('[data-cartesian-construction]');
  if (!host || !window.JXG) return;

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [-4.8, 3.2, 4.8, -3.2],
    axis: false,
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const colors = {
    ink: '#18212b', blue: '#2f6f9f', muted: '#66717d', gold: '#b1782b', green: '#3f735f', helper: '#a9b2ba', grid: '#dce4ea'
  };

  const fixed = { fixed: true, highlight: false };
  const objects = [];
  const add = (obj, key, persistent = false) => { obj._sceneKey = key; obj._persistent = persistent; objects.push(obj); obj.setAttribute({ visible: false }); return obj; };
  const show = (...keys) => objects.forEach(o => o.setAttribute({ visible: keys.includes(o._sceneKey) || o._persistent && keys.includes('persistent') }));
  const hideAll = () => objects.forEach(o => o.setAttribute({ visible: false }));

  const pA = add(board.create('point', [-2.8, 0], { name: 'A', size: 4, fillColor: colors.gold, strokeColor: colors.gold, ...fixed }), 'points');
  const pB = add(board.create('point', [2.8, 0], { name: 'B', size: 4, fillColor: colors.gold, strokeColor: colors.gold, ...fixed }), 'points');
  const xAxis = add(board.create('line', [[-4,0],[4,0]], { strokeColor: colors.blue, strokeWidth: 4, straightFirst: true, straightLast: true, ...fixed }), 'xaxis', true);
  const O = add(board.create('point', [0,0], { name: 'O', size: 5, fillColor: '#17324d', strokeColor: '#17324d', label: { offset: [10,-26], fontSize: 20 }, ...fixed }), 'origin', true);
  const yAxis = add(board.create('line', [[0,-2.6],[0,2.6]], { strokeColor: colors.blue, strokeWidth: 4, straightFirst: true, straightLast: true, ...fixed }), 'yaxis', true);
  const rightAngle = add(board.create('polygon', [[0,0],[.34,0],[.34,.34],[0,.34]], { borders: { strokeColor: colors.muted, strokeWidth: 2 }, fillColor: 'transparent', vertices: { visible: false }, ...fixed }), 'rightangle');

  const directionX = add(board.create('arrow', [[3.2,0],[4.15,0]], { strokeColor: colors.blue, strokeWidth: 4, ...fixed }), 'directions');
  const directionY = add(board.create('arrow', [[0,1.9],[0,2.85]], { strokeColor: colors.blue, strokeWidth: 4, ...fixed }), 'directions');
  const labelX = add(board.create('text', [3.15,.35,'positive x'], { color: colors.muted, fontSize: 18, ...fixed }), 'directions');
  const labelY = add(board.create('text', [.28,2.55,'positive y'], { color: colors.muted, fontSize: 18, ...fixed }), 'directions');

  const unitPoint = add(board.create('point', [1,0], { name: '1', size: 4, fillColor: colors.gold, strokeColor: colors.gold, label: { offset: [-4,-28] }, ...fixed }), 'unit');
  const unitSeg = add(board.create('segment', [[0,.18],[1,.18]], { strokeColor: colors.gold, strokeWidth: 3, ...fixed }), 'unit');
  const unitText = add(board.create('text', [.38,.42,'chosen unit'], { color: colors.gold, fontSize: 16, ...fixed }), 'unit');

  const tickObjs = [];
  [-3,-2,-1,1,2,3].forEach(v => {
    tickObjs.push(add(board.create('segment', [[v,-.13],[v,.13]], { strokeColor: colors.muted, strokeWidth: 2, ...fixed }), 'ticks'));
    tickObjs.push(add(board.create('text', [v-.08,-.38,String(v)], { color: colors.muted, fontSize: 16, ...fixed }), 'ticks'));
  });
  [-2,-1,1,2].forEach(v => {
    tickObjs.push(add(board.create('segment', [[-.13,v],[.13,v]], { strokeColor: colors.muted, strokeWidth: 2, ...fixed }), 'ticks'));
    tickObjs.push(add(board.create('text', [-.42,v-.08,String(v)], { color: colors.muted, fontSize: 16, ...fixed }), 'ticks'));
  });

  const compass1 = add(board.create('circle', [[0,0],1], { strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'compass1');
  const compass2 = add(board.create('circle', [[1,0],1], { strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'compass2');
  const compass3 = add(board.create('circle', [[2,0],1], { strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'compass3');
  const compassY = add(board.create('circle', [[0,0],1], { strokeColor: colors.gold, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'compassY');

  const focusAxis = add(board.create('line', [[0,0],[1,0]], { strokeColor: colors.blue, strokeWidth: 4, straightFirst: false, straightLast: false, ...fixed }), 'focus');
  const f0 = add(board.create('point', [0,0], { name: '0', size: 3, fillColor: colors.ink, strokeColor: colors.ink, ...fixed }), 'focus');
  const f1 = add(board.create('point', [1,0], { name: '1', size: 3, fillColor: colors.ink, strokeColor: colors.ink, ...fixed }), 'focus');
  const c0 = add(board.create('circle', [[0,0],.7], { strokeColor: colors.helper, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'bisect');
  const c1 = add(board.create('circle', [[1,0],.7], { strokeColor: colors.helper, strokeWidth: 2, dash: 2, fillOpacity: 0, ...fixed }), 'bisect');
  const bisector = add(board.create('line', [[.5,-1],[.5,1]], { strokeColor: colors.helper, strokeWidth: 2, dash: 2, ...fixed }), 'bisect');
  const half = add(board.create('point', [.5,0], { name: '1/2', size: 4, fillColor: colors.gold, strokeColor: colors.gold, label: { offset: [-12,-28] }, ...fixed }), 'half');
  const quarter = add(board.create('point', [.25,0], { name: '1/4', size: 4, fillColor: colors.gold, strokeColor: colors.gold, label: { offset: [-12,-28] }, ...fixed }), 'quarter');

  const grid = [];
  for (let x=-4; x<=4; x+=.5) grid.push(add(board.create('line', [[x,-2.5],[x,2.5]], { strokeColor: colors.grid, strokeWidth: 1, straightFirst: false, straightLast: false, ...fixed }), 'grid'));
  for (let y=-2.5; y<=2.5; y+=.5) grid.push(add(board.create('line', [[-4,y],[4,y]], { strokeColor: colors.grid, strokeWidth: 1, straightFirst: false, straightLast: false, ...fixed }), 'grid'));

  const P = add(board.create('point', [2.5,1.5], { name: 'P', size: 5, fillColor: colors.green, strokeColor: colors.green, label: { offset: [14,8], fontSize: 22 }, ...fixed }), 'pointP');
  const px = add(board.create('point', [2.5,0], { name: '', size: 4, fillColor: colors.green, strokeColor: colors.green, ...fixed }), 'projection');
  const py = add(board.create('point', [0,1.5], { name: '', size: 4, fillColor: colors.green, strokeColor: colors.green, ...fixed }), 'projection');
  const projX = add(board.create('segment', [[2.5,1.5],[2.5,0]], { strokeColor: colors.green, strokeWidth: 2, dash: 2, ...fixed }), 'projection');
  const projY = add(board.create('segment', [[2.5,1.5],[0,1.5]], { strokeColor: colors.green, strokeWidth: 2, dash: 2, ...fixed }), 'projection');
  const coordText = add(board.create('text', [2.85,1.1,'P = (x, y)'], { color: colors.green, fontSize: 18, ...fixed }), 'coordinates');

  const steps = [
    { title: 'Euclidean plane', keys: [] },
    { title: 'Choose two points', keys: ['points'] },
    { title: 'Construct the first line', keys: ['points','xaxis'] },
    { title: 'Choose the origin', keys: ['xaxis','origin'] },
    { title: 'Construct the perpendicular axis', keys: ['xaxis','origin','yaxis','rightangle'] },
    { title: 'Choose positive directions', keys: ['xaxis','origin','yaxis','rightangle','directions'] },
    { title: 'Choose a common unit length', keys: ['xaxis','origin','yaxis','rightangle','directions','unit'] },
    { title: 'Transfer the unit from the origin', keys: ['xaxis','origin','yaxis','rightangle','directions','unit','compass1'] },
    { title: 'The first integer marks remain', keys: ['xaxis','origin','yaxis','rightangle','directions','unit','ticks'] },
    { title: 'Transfer the unit from 1 to 2', keys: ['xaxis','origin','yaxis','rightangle','directions','unit','ticks','compass2'] },
    { title: 'Transfer the unit from 2 to 3', keys: ['xaxis','origin','yaxis','rightangle','directions','unit','ticks','compass3'] },
    { title: 'Transfer the same unit to the vertical axis', keys: ['xaxis','origin','yaxis','rightangle','directions','unit','ticks','compassY'] },
    { title: 'Focus on a single unit interval', keys: ['focus'], bbox: [-.3,1.2,1.3,-1.2] },
    { title: 'Construct the midpoint by bisection', keys: ['focus','bisect'], bbox: [-.3,1.2,1.3,-1.2] },
    { title: 'Keep only the midpoint', keys: ['focus','half'], bbox: [-.3,1.2,1.3,-1.2] },
    { title: 'Bisect again to obtain quarters', keys: ['focus','half','quarter'], bbox: [-.3,1.2,1.3,-1.2] },
    { title: 'Return to the full coordinate system', keys: ['xaxis','origin','yaxis','rightangle','directions','ticks'] },
    { title: 'Choose a point P', keys: ['xaxis','origin','yaxis','rightangle','directions','ticks','pointP'] },
    { title: 'Project P orthogonally onto both axes', keys: ['xaxis','origin','yaxis','rightangle','directions','ticks','pointP','projection'] },
    { title: 'Reveal a light auxiliary grid', keys: ['grid','xaxis','origin','yaxis','rightangle','directions','ticks','pointP','projection'] },
    { title: 'Read the ordered pair (x, y)', keys: ['grid','xaxis','origin','yaxis','rightangle','directions','ticks','pointP','projection','coordinates'] }
  ];

  const panel = host.closest('[data-fullscreen-panel]');
  const status = panel.querySelector('[data-status]');
  const title = panel.querySelector('[data-step-title]');
  const prev = panel.querySelector('[data-previous]');
  const next = panel.querySelector('[data-next]');
  const play = panel.querySelector('[data-play]');
  const reset = panel.querySelector('[data-reset]');
  let current = 0;
  let timer = null;

  function render() {
    const step = steps[current];
    hideAll();
    show(...step.keys);
    board.setBoundingBox(step.bbox || [-4.8, 3.2, 4.8, -3.2], true);
    board.fullUpdate();
    status.textContent = `Step ${current + 1} of ${steps.length}`;
    title.textContent = step.title;
    prev.disabled = current === 0;
    next.disabled = current === steps.length - 1;
  }
  function stop() { if (timer) clearInterval(timer); timer = null; play.textContent = 'Play'; }
  function advance() { if (current < steps.length - 1) { current += 1; render(); } else stop(); }
  prev.addEventListener('click', () => { stop(); current = Math.max(0,current-1); render(); });
  next.addEventListener('click', () => { stop(); advance(); });
  reset.addEventListener('click', () => { stop(); current = 0; render(); });
  play.addEventListener('click', () => { if (timer) return stop(); if (current === steps.length-1) current = 0; render(); play.textContent = 'Pause'; timer = setInterval(advance, 1600); });

  document.addEventListener('fullscreenchange', () => setTimeout(() => { board.resizeContainer(host.clientWidth, host.clientHeight); board.fullUpdate(); }, 80));
  window.addEventListener('resize', () => { board.resizeContainer(host.clientWidth, host.clientHeight); board.fullUpdate(); });
  render();
})();