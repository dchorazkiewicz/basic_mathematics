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

  const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

  let board = null;
  let activeMode = 'intersect';
  let rebuildToken = 0;

  const cartesianView = {
    axesPosition: 'center',
    xAxis: {
      visible: true,
      name: 'x',
      withLabel: true,
      lastArrow: true,
      strokeColor: '#7f8b96',
      strokeOpacity: 0.82,
      strokeWidth: 1.4
    },
    yAxis: {
      visible: true,
      name: 'y',
      withLabel: true,
      lastArrow: true,
      strokeColor: '#7f8b96',
      strokeOpacity: 0.82,
      strokeWidth: 1.4
    },
    zAxis: {
      visible: true,
      name: 'z',
      withLabel: true,
      lastArrow: true,
      strokeColor: '#7f8b96',
      strokeOpacity: 0.82,
      strokeWidth: 1.4
    },
    xAxisBorder: { visible: false },
    yAxisBorder: { visible: false },
    zAxisBorder: { visible: false },

    xPlaneRear: { visible: false, mesh3d: { visible: false } },
    yPlaneRear: { visible: false, mesh3d: { visible: false } },
    zPlaneRear: { visible: false, mesh3d: { visible: false } },
    xPlaneFront: { visible: false, mesh3d: { visible: false } },
    yPlaneFront: { visible: false, mesh3d: { visible: false } },
    zPlaneFront: { visible: false, mesh3d: { visible: false } },

    xPlaneRearYAxis: { visible: false },
    xPlaneRearZAxis: { visible: false },
    yPlaneRearXAxis: { visible: false },
    yPlaneRearZAxis: { visible: false },
    zPlaneRearXAxis: { visible: false },
    zPlaneRearYAxis: { visible: false },
    xPlaneFrontYAxis: { visible: false },
    xPlaneFrontZAxis: { visible: false },
    yPlaneFrontXAxis: { visible: false },
    yPlaneFrontZAxis: { visible: false },
    zPlaneFrontXAxis: { visible: false },
    zPlaneFrontYAxis: { visible: false }
  };

  function measureStage() {
    host.style.removeProperty('width');
    host.style.removeProperty('height');

    const rect = stage.getBoundingClientRect();
    const styles = getComputedStyle(stage);
    const width = Math.max(
      320,
      rect.width - parseFloat(styles.paddingLeft || 0) - parseFloat(styles.paddingRight || 0)
    );
    const height = Math.max(
      280,
      rect.height - parseFloat(styles.paddingTop || 0) - parseFloat(styles.paddingBottom || 0)
    );
    return { width, height };
  }

  function createBoard() {
    const { width, height } = measureStage();
    const halfHeight = 5;
    const halfWidth = halfHeight * width / height;
    const margin = 0.16;

    if (board) {
      JXG.JSXGraph.freeBoard(board);
      board = null;
      host.style.removeProperty('width');
      host.style.removeProperty('height');
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

    const cameraAzimuth = activeMode === 'perpendicular' ? 0 : 5.55;
    const cameraElevation = activeMode === 'perpendicular' ? 0.68 : 0.62;

    const view = board.create('view3d', [
      [-halfWidth + margin, -halfHeight + margin],
      [2 * (halfWidth - margin), 2 * (halfHeight - margin)],
      [[-3.25, 3.25], [-3.25, 3.25], [-3.25, 3.25]]
    ], {
      projection: 'parallel',
      depthOrder: true,
      trackball: { enabled: true },
      az: { slider: { visible: false, start: cameraAzimuth } },
      el: { slider: { visible: false, start: cameraElevation } },
      bank: { slider: { visible: false, start: 0 } },
      ...cartesianView
    });

    const plane = (point, d1, d2, color) => view.create('plane3d', [
      point, d1, d2, [-2.35, 2.35], [-2.35, 2.35]
    ], {
      fillColor: color,
      fillOpacity: 0.36,
      strokeColor: color,
      strokeOpacity: 0.98,
      strokeWidth: 2,
      mesh3d: { visible: true, strokeColor: color, strokeOpacity: 0.32, strokeWidth: 1.1 },
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
      point, direction, [-3.1, 3.1]
    ], {
      strokeColor: color,
      strokeWidth: 5,
      ...fixed
    });

    const label = (coords, text, color) => view.create('text3d', [coords, text],
      boxed({ color, fontSize: 18, useMathJax: true }));

    const basePoint = [0, 0, -0.55];

    plane(basePoint, [1, 0, 0], [0, 1, 0], '#2f6f9f');
    arrow(basePoint, [0, 0, 2.35], '#2f6f9f');
    label([0.22, 0.12, 0.95], '$\\mathbf n_1$', '#2f6f9f');

    // The scene is recreated on every mode change. Exactly one second plane
    // exists at a time, so geometry from another mode cannot remain visible.
    if (activeMode === 'intersect') {
      plane(basePoint, [1, 0, -1.2], [0, 1, 2 / 3], '#b1782b');
      arrow(basePoint, [1.8, -1.0, 1.5], '#b1782b');
      line(basePoint, [1.0, 1.8, 0], '#7a3f73');
      label([1.0, -0.5, 0.35], '$\\mathbf n_2$', '#b1782b');
      label([1.65, 2.55, -0.25], '$L$', '#7a3f73');
    } else if (activeMode === 'parallel') {
      const secondPoint = [0, 0, 1.55];
      plane(secondPoint, [1, 0, 0], [0, 1, 0], '#b1782b');
      arrow(secondPoint, [0, 0, 1.6], '#b1782b');
      label([0.22, 0.12, 2.75], '$\\mathbf n_2$', '#b1782b');
    } else {
      // Pi_1 is horizontal, so n_1 points along z. Pi_2 is the xz-plane,
      // hence n_2 points along y and n_1 dot n_2 = 0 exactly.
      plane(basePoint, [1, 0, 0], [0, 0, 1], '#b1782b');
      arrow(basePoint, [0, 2.35, 0], '#b1782b');
      line(basePoint, [1, 0, 0], '#7a3f73');
      label([0.12, 1.05, -0.35], '$\\mathbf n_2$', '#b1782b');
      label([2.55, 0.18, -0.35], '$L$', '#7a3f73');
    }

    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  async function rebuildAfterLayout() {
    const token = ++rebuildToken;
    await nextFrame();
    await nextFrame();
    if (token !== rebuildToken) return;
    createBoard();
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    activeMode = button.dataset.planeMode;
    buttons.forEach(item => item.classList.toggle('is-active', item === button));
    rebuildAfterLayout();
  }));

  const observer = new ResizeObserver(() => rebuildAfterLayout());
  observer.observe(stage);
  window.addEventListener('resize', rebuildAfterLayout);
  document.addEventListener('fullscreenchange', () => {
    rebuildAfterLayout();
    setTimeout(rebuildAfterLayout, 160);
  });

  rebuildAfterLayout();
})();