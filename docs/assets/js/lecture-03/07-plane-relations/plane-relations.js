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

  let view = null;
  const layoutBoundingBox = () => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    const halfHeight = 6;
    const halfWidth = halfHeight * width / height;

    if (view) {
      const frameSize = 2 * halfHeight - 0.7;
      view.llftCorner[0] = -0.5 * frameSize;
      view.llftCorner[1] = -halfHeight + 0.35;
      view.size[0] = frameSize;
      view.size[1] = frameSize;
      view.needsUpdate = true;
    }

    return [-halfWidth, halfHeight, halfWidth, -halfHeight];
  };

  view = board.create('view3d', [
    [-5.65, -5.65],
    [11.3, 11.3],
    [[-3.6, 3.6], [-3.6, 3.6], [-3.6, 3.6]]
  ], {
    projection: 'parallel',
    depthOrder: true,
    trackball: { enabled: true },
    axesPosition: 'none',
    az: { slider: { visible: false, start: 5.55 } },
    el: { slider: { visible: false, start: 0.62 } },
    bank: { slider: { visible: false, start: 0 } }
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
    fillOpacity: 0.32,
    strokeColor: color,
    strokeOpacity: 0.95,
    strokeWidth: 2,
    mesh3d: { visible: true, strokeColor: color, strokeOpacity: 0.38, strokeWidth: 1.35 },
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
    point, direction, [-3.8, 3.8]
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

  const intersectNormal = [1.8, -1.0, 1.5];
  plane(basePoint, [1, 0, -1.2], [0, 1, 2 / 3], '#b1782b', 'intersect');
  arrow(basePoint, intersectNormal, '#b1782b', 'intersect');
  line(basePoint, [1.0, 1.8, 0], '#7a3f73', 'intersect');
  label([1.05, -0.55, 0.35], '$\\mathbf n_2$', '#b1782b', 'intersect');
  label([2.0, 3.0, -0.35], '$L$', '#7a3f73', 'intersect');

  const parallelPoint = [0, 0, 1.8];
  plane(parallelPoint, [1, 0, 0], [0, 1, 0], '#b1782b', 'parallel');
  arrow(parallelPoint, [0, 0, 2.0], '#b1782b', 'parallel');
  label([0.25, 0.15, 3.0], '$\\mathbf n_2$', '#b1782b', 'parallel');

  plane(basePoint, [0, 1, 0], [0, 0, 1], '#b1782b', 'perpendicular');
  arrow(basePoint, [2.6, 0, 0], '#b1782b', 'perpendicular');
  line(basePoint, [0, 1, 0], '#7a3f73', 'perpendicular');
  label([1.1, 0.15, -0.45], '$\\mathbf n_2$', '#b1782b', 'perpendicular');
  label([0.2, 3.0, -0.45], '$L$', '#7a3f73', 'perpendicular');

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
    boundingBox: layoutBoundingBox
  });
})();
