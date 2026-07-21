(() => {
  const host = document.querySelector('[data-plane-relations]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const stage = host.closest('.jsx-stage') || host.parentElement;
  const buttons = [...panel.querySelectorAll('[data-plane-mode]')];
  const fixed = { fixed: true, highlight: false };
  const boxed = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };

  let board = null;
  let activeMode = 'intersect';
  let lastWidth = 0;
  let lastHeight = 0;
  let rebuildTimer = null;

  const hiddenViewParts = {
    axesPosition: 'none',
    xAxis: { visible: false },
    yAxis: { visible: false },
    zAxis: { visible: false },
    xPlaneRear: { visible: false },
    yPlaneRear: { visible: false },
    zPlaneRear: { visible: false },
    xPlaneFront: { visible: false },
    yPlaneFront: { visible: false },
    zPlaneFront: { visible: false }
  };

  function createBoard() {
    const width = Math.max(320, host.clientWidth || stage.clientWidth || 800);
    const height = Math.max(280, host.clientHeight || stage.clientHeight || 500);
    const halfHeight = 5.4;
    const halfWidth = halfHeight * width / height;
    const margin = 0.28;

    if (board) {
      JXG.JSXGraph.freeBoard(board);
      board = null;
    }

    board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: [-halfWidth, halfHeight, halfWidth, -halfHeight],
      axis: false,
      grid: false,
      keepAspectRatio: false,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: { enabled: false }
    });

    const view = board.create('view3d', [
      [-halfWidth + margin, -halfHeight + margin],
      [2 * (halfWidth - margin), 2 * (halfHeight - margin)],
      [[-3.6, 3.6], [-3.6, 3.6], [-3.6, 3.6]]
    ], {
      projection: 'parallel',
      depthOrder: true,
      trackball: { enabled: true },
      az: { slider: { visible: false, start: 5.55 } },
      el: { slider: { visible: false, start: 0.62 } },
      bank: { slider: { visible: false, start: 0 } },
      ...hiddenViewParts
    });

    const plane = (point, d1, d2, color) => view.create('plane3d', [
      point, d1, d2, [-2.65, 2.65], [-2.65, 2.65]
    ], {
      fillColor: color,
      fillOpacity: 0.34,
      strokeColor: color,
      strokeOpacity: 0.96,
      strokeWidth: 2,
      mesh3d: { visible: true, strokeColor: color, strokeOpacity: 0.3, strokeWidth: 1.1 },
      ...fixed
    });

    const arrow = (point, direction, color) => view.create('line3d', [
      point, direction, [0, 1]
    ], {
      strokeColor: color,
      strokeWidth: 4,
      lastArrow: true,
      ...fixed
    });

    const line = (point, direction, color) => view.create('line3d', [
      point, direction, [-3.35, 3.35]
    ], {
      strokeColor: color,
      strokeWidth: 5,
      ...fixed
    });

    const label = (coords, text, color) => view.create('text3d', [coords, text],
      boxed({ color, fontSize: 18, useMathJax: true }));

    const basePoint = [0, 0, -0.65];
    plane(basePoint, [1, 0, 0], [0, 1, 0], '#2f6f9f');
    arrow(basePoint, [0, 0, 2.5], '#2f6f9f');
    label([0.25, 0.15, 1.0], '$\\mathbf n_1$', '#2f6f9f');

    if (activeMode === 'intersect') {
      plane(basePoint, [1, 0, -1.2], [0, 1, 2 / 3], '#b1782b');
      arrow(basePoint, [1.8, -1.0, 1.5], '#b1782b');
      line(basePoint, [1.0, 1.8, 0], '#7a3f73');
      label([1.05, -0.55, 0.35], '$\\mathbf n_2$', '#b1782b');
      label([1.8, 2.8, -0.35], '$L$', '#7a3f73');
    } else if (activeMode === 'parallel') {
      const secondPoint = [0, 0, 1.7];
      plane(secondPoint, [1, 0, 0], [0, 1, 0], '#b1782b');
      arrow(secondPoint, [0, 0, 2.0], '#b1782b');
      label([0.25, 0.15, 2.9], '$\\mathbf n_2$', '#b1782b');
    } else {
      plane(basePoint, [0, 1, 0], [0, 0, 1], '#b1782b');
      arrow(basePoint, [2.5, 0, 0], '#b1782b');
      line(basePoint, [0, 1, 0], '#7a3f73');
      label([1.05, 0.15, -0.45], '$\\mathbf n_2$', '#b1782b');
      label([0.2, 2.75, -0.45], '$L$', '#7a3f73');
    }

    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
    lastWidth = width;
    lastHeight = height;
  }

  function scheduleRebuild(force = false) {
    const width = Math.max(1, host.clientWidth || stage.clientWidth);
    const height = Math.max(1, host.clientHeight || stage.clientHeight);
    if (!force && Math.abs(width - lastWidth) < 3 && Math.abs(height - lastHeight) < 3) return;

    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(createBoard, 90);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    activeMode = button.dataset.planeMode;
    buttons.forEach(item => item.classList.toggle('is-active', item === button));
    createBoard();
  }));

  const observer = new ResizeObserver(() => scheduleRebuild());
  observer.observe(stage);
  window.addEventListener('resize', () => scheduleRebuild());
  document.addEventListener('fullscreenchange', () => scheduleRebuild(true));

  createBoard();
})();
