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

  const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

  let board = null;
  let rebuildToken = 0;

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

    const view = board.create('view3d', [
      [-halfWidth + margin, -halfHeight + margin],
      [2 * (halfWidth - margin), 2 * (halfHeight - margin)],
      [[-5.05, 4.0], [-4.35, 3.45], [-2.2, 1.55]]
    ], {
      projection: 'parallel',
      depthOrder: true,
      trackball: { enabled: true },
      az: { slider: { visible: false, start: 5.55 } },
      el: { slider: { visible: false, start: 0.76 } },
      bank: { slider: { visible: false, start: 0 } },
      ...cartesianView
    });

    // The surface covers the complete slider range s,t in [-2,2].
    view.create('plane3d', [P0, u, v, [-2.05, 2.05], [-2.05, 2.05]], {
      fillColor: '#2f6f9f',
      fillOpacity: 0.4,
      strokeColor: '#2f6f9f',
      strokeOpacity: 0.98,
      strokeWidth: 2.2,
      mesh3d: { visible: true, strokeColor: '#2f6f9f', strokeOpacity: 0.42, strokeWidth: 1.2 },
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

    // First form s*u, then t*v; their sum is applied at P0.
    view.create('line3d', [origin, afterU], {
      strokeColor: '#2f6f9f', strokeWidth: 5, lastArrow: true, ...fixed
    });
    view.create('line3d', [afterU, generated], {
      strokeColor: '#b1782b', strokeWidth: 5, lastArrow: true, ...fixed
    });
    view.create('line3d', [origin, generated], {
      strokeColor: '#3f735f', strokeWidth: 3, dash: 2, ...fixed
    });

    const constantPoint = point => () => point;
    view.create('text3d', [[P0[0] - 0.12, P0[1] - 0.2, P0[2] + 0.26], '$P_0$'],
      boxed({ color: '#17324d', fontSize: 17, useMathJax: true }));
    view.create('text3d', [midpoint(constantPoint(P0), scaledUPoint, 0.22), '$s\\mathbf u$'],
      boxed({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
    view.create('text3d', [midpoint(scaledUPoint, generatedPoint, 0.22), '$t\\mathbf v$'],
      boxed({ color: '#b1782b', fontSize: 18, useMathJax: true }));
    view.create('text3d', [[
      () => generatedPoint()[0] + 0.14,
      () => generatedPoint()[1] + 0.14,
      () => generatedPoint()[2] + 0.24
    ], '$P_0\\oplus(s\\mathbf u+t\\mathbf v)$'],
      boxed({ color: '#3f735f', fontSize: 17, useMathJax: true }));

    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  function update() {
    sOut.textContent = sSlider.value;
    tOut.textContent = tSlider.value;
    board?.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  async function rebuildAfterLayout() {
    const token = ++rebuildToken;
    await nextFrame();
    await nextFrame();
    if (token !== rebuildToken) return;
    createBoard();
    update();
  }

  sSlider.addEventListener('input', update);
  tSlider.addEventListener('input', update);

  const observer = new ResizeObserver(() => rebuildAfterLayout());
  observer.observe(stage);
  window.addEventListener('resize', rebuildAfterLayout);
  document.addEventListener('fullscreenchange', () => {
    rebuildAfterLayout();
    setTimeout(rebuildAfterLayout, 160);
  });

  rebuildAfterLayout();
})();