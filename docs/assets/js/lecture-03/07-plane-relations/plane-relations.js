(() => {
  const host = document.querySelector('[data-plane-relations]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-plane-mode]')];
  const fixed = { fixed: true, highlight: false };
  const boxed = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [-8, 8, 8, -8],
    axis: false,
    grid: false,
    keepAspectRatio: false,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const view = board.create('view3d', [
    [-6.4, -5.2],
    [12.8, 10.4],
    [[-4.5, 4.5], [-4.5, 4.5], [-4.5, 4.5]]
  ], {
    projection: 'central',
    trackball: { enabled: true },
    axesPosition: 'center',
    xAxis: { strokeColor: '#a9b2ba', strokeWidth: 1, withLabel: false },
    yAxis: { strokeColor: '#a9b2ba', strokeWidth: 1, withLabel: false },
    zAxis: { strokeColor: '#a9b2ba', strokeWidth: 1, withLabel: false },
    xPlaneRear: { visible: false },
    yPlaneRear: { visible: false },
    zPlaneRear: { visible: false },
    xPlaneFront: { visible: false },
    yPlaneFront: { visible: false },
    zPlaneFront: { visible: false }
  });

  const groups = { base: [], intersect: [], parallel: [], perpendicular: [] };
  const register = (object, group) => {
    groups[group].push(object);
    return object;
  };
  const plane = (point, d1, d2, color, group) => register(view.create('plane3d', [
    point, d1, d2, [-3.1, 3.1], [-3.1, 3.1]
  ], {
    fillColor: color,
    fillOpacity: 0.18,
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWidth: 1,
    mesh3d: { visible: true, strokeColor: color, strokeOpacity: 0.18, strokeWidth: 1 },
    ...fixed
  }), group);
  const arrow = (point, direction, color, group) => register(view.create('line3d', [
    point, direction, [0, 1]
  ], {
    strokeColor: color,
    strokeWidth: 4,
    lastArrow: true,
    ...fixed
  }), group);
  const line = (point, direction, color, group) => register(view.create('line3d', [
    point, direction, [-5, 5]
  ], {
    strokeColor: color,
    strokeWidth: 5,
    ...fixed
  }), group);
  const label = (coords, text, color, group) => register(view.create('text3d', [coords, text],
    boxed({ color, fontSize: 18, useMathJax: true })), group);

  const basePoint = [0, 0, -0.7];
  plane(basePoint, [1, 0, 0], [0, 1, 0], '#2f6f9f', 'base');
  arrow(basePoint, [0, 0, 2.6], '#2f6f9f', 'base');
  label([0.25, 0.15, 1.0], '$\\mathbf n_1$', '#2f6f9f', 'base');
  label([2.5, -2.0, -0.45], '$\\Pi_1$', '#2f6f9f', 'base');

  const intersectNormal = [1.8, -1.0, 1.5];
  plane(basePoint, [1, 0, -1.2], [0, 1, 2 / 3], '#b1782b', 'intersect');
  arrow(basePoint, intersectNormal, '#b1782b', 'intersect');
  line(basePoint, [1.0, 1.8, 0], '#7a3f73', 'intersect');
  label([1.05, -0.55, 0.35], '$\\mathbf n_2$', '#b1782b', 'intersect');
  label([-2.5, 1.7, 1.1], '$\\Pi_2$', '#b1782b', 'intersect');
  label([2.2, 3.3, -0.35], '$L$', '#7a3f73', 'intersect');

  const parallelPoint = [0, 0, 1.8];
  plane(parallelPoint, [1, 0, 0], [0, 1, 0], '#b1782b', 'parallel');
  arrow(parallelPoint, [0, 0, 2.0], '#b1782b', 'parallel');
  label([0.25, 0.15, 3.0], '$\\mathbf n_2$', '#b1782b', 'parallel');
  label([2.5, -2.0, 2.05], '$\\Pi_2$', '#b1782b', 'parallel');

  plane(basePoint, [0, 1, 0], [0, 0, 1], '#b1782b', 'perpendicular');
  arrow(basePoint, [2.6, 0, 0], '#b1782b', 'perpendicular');
  line(basePoint, [0, 1, 0], '#7a3f73', 'perpendicular');
  label([1.1, 0.15, -0.45], '$\\mathbf n_2$', '#b1782b', 'perpendicular');
  label([0.15, 2.3, 1.8], '$\\Pi_2$', '#b1782b', 'perpendicular');
  label([0.2, 3.3, -0.45], '$L$', '#7a3f73', 'perpendicular');

  function setMode(mode) {
    Object.entries(groups).forEach(([group, objects]) => {
      const visible = group === 'base' || group === mode;
      objects.forEach(object => object.setAttribute({ visible }));
    });
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.planeMode === mode));
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.planeMode)));
  setMode('intersect');

  window.LectureJSX?.keepBoardFitted?.({
    board,
    host,
    boundingBox: [-8, 8, 8, -8]
  });
})();
