(() => {
  const host = document.querySelector('[data-plane-generation]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const stage = host.closest('.jsx-stage') || host.parentElement;
  const sSlider = panel.querySelector('[data-plane-s-slider]');
  const tSlider = panel.querySelector('[data-plane-t-slider]');
  const sOut = panel.querySelector('[data-plane-s]');
  const tOut = panel.querySelector('[data-plane-t]');
  const fixed = { fixed: true, highlight: false };
  const boxed = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };

  let board = null;
  let lastWidth = 0;
  let lastHeight = 0;
  let rebuildTimer = null;

  const P0 = [-0.55, -0.45, -0.35];
  const u = [1.75, 0.35, 0.55];
  const v = [0.45, 1.55, -0.35];

  const scaledUPoint = () => {
    const s = Number(sSlider.value);
    return [
      P0[0] + s * u[0],
      P0[1] + s * u[1],
      P0[2] + s * u[2]
    ];
  };

  const generatedPoint = () => {
    const a = scaledUPoint();
    const t = Number(tSlider.value);
    return [
      a[0] + t * v[0],
      a[1] + t * v[1],
      a[2] + t * v[2]
    ];
  };

  const midpoint = (first, second, lift = 0) => [
    () => (first()[0] + second()[0]) / 2,
    () => (first()[1] + second()[1]) / 2,
    () => (first()[2] + second()[2]) / 2 + lift
  ];

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
    const halfHeight = 5.35;
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
      [[-4.1, 4.1], [-4.1, 4.1], [-4.1, 4.1]]
    ], {
      projection: 'parallel',
      depthOrder: true,
      trackball: { enabled: true },
      az: { slider: { visible: false, start: 5.55 } },
      el: { slider: { visible: false, start: 0.72 } },
      bank: { slider: { visible: false, start: 0 } },
      ...hiddenViewParts
    });

    view.create('plane3d', [P0, u, v, [-2.35, 2.35], [-2.35, 2.35]], {
      fillColor: '#2f6f9f',
      fillOpacity: 0.34,
      strokeColor: '#2f6f9f',
      strokeOpacity: 0.96,
      strokeWidth: 2,
      mesh3d: { visible: true, strokeColor: '#2f6f9f', strokeOpacity: 0.34, strokeWidth: 1.15 },
      ...fixed
    });

    const origin = view.create('point3d', P0, {
      name: '', size: 5, fillColor: '#17324d', strokeColor: '#17324d', ...fixed
    });
    const afterU = view.create('point3d', [scaledUPoint], {
      name: '', size: 4, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', ...fixed
    });
    const generated = view.create('point3d', [generatedPoint], {
      name: '', size: 6, fillColor: '#3f735f', strokeColor: '#3f735f', ...fixed
    });

    view.create('line3d', [origin, afterU], {
      strokeColor: '#2f6f9f', strokeWidth: 4, lastArrow: true, ...fixed
    });
    view.create('line3d', [afterU, generated], {
      strokeColor: '#b1782b', strokeWidth: 4, lastArrow: true, ...fixed
    });
    view.create('line3d', [origin, generated], {
      strokeColor: '#3f735f', strokeWidth: 3, dash: 2, ...fixed
    });

    const constantPoint = point => () => point;
    view.create('text3d', [[P0[0] - 0.12, P0[1] - 0.2, P0[2] + 0.28], '$P_0$'],
      boxed({ color: '#17324d', fontSize: 17, useMathJax: true }));
    view.create('text3d', [midpoint(constantPoint(P0), scaledUPoint, 0.24), '$s\\mathbf u$'],
      boxed({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
    view.create('text3d', [midpoint(scaledUPoint, generatedPoint, 0.24), '$t\\mathbf v$'],
      boxed({ color: '#b1782b', fontSize: 18, useMathJax: true }));
    view.create('text3d', [[
      () => generatedPoint()[0] + 0.18,
      () => generatedPoint()[1] + 0.18,
      () => generatedPoint()[2] + 0.3
    ], '$P_0+s\\mathbf u+t\\mathbf v$'],
      boxed({ color: '#3f735f', fontSize: 17, useMathJax: true }));

    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
    lastWidth = width;
    lastHeight = height;
  }

  function update() {
    sOut.textContent = sSlider.value;
    tOut.textContent = tSlider.value;
    board?.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  function scheduleRebuild(force = false) {
    const width = Math.max(1, host.clientWidth || stage.clientWidth);
    const height = Math.max(1, host.clientHeight || stage.clientHeight);
    if (!force && Math.abs(width - lastWidth) < 3 && Math.abs(height - lastHeight) < 3) return;

    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(createBoard, 90);
  }

  sSlider.addEventListener('input', update);
  tSlider.addEventListener('input', update);

  const observer = new ResizeObserver(() => scheduleRebuild());
  observer.observe(stage);
  window.addEventListener('resize', () => scheduleRebuild());
  document.addEventListener('fullscreenchange', () => scheduleRebuild(true));

  createBoard();
  update();
})();
