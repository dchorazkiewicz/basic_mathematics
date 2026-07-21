(() => {
  const host = document.querySelector('[data-plane-generation]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const sSlider = panel.querySelector('[data-plane-s-slider]');
  const tSlider = panel.querySelector('[data-plane-t-slider]');
  const sOut = panel.querySelector('[data-plane-s]');
  const tOut = panel.querySelector('[data-plane-t]');
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

  const bounds = [[-4.5, 4.5], [-4.5, 4.5], [-4.5, 4.5]];
  const view = board.create('view3d', [
    [-6.4, -5.2],
    [12.8, 10.4],
    bounds
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

  const P0 = [-1.1, -1.0, -0.6];
  const u = [3.0, 0.6, 0.9];
  const v = [0.8, 2.6, -0.5];
  const pointOnPlane = () => {
    const s = Number(sSlider.value);
    const t = Number(tSlider.value);
    return [
      P0[0] + s * u[0] + t * v[0],
      P0[1] + s * u[1] + t * v[1],
      P0[2] + s * u[2] + t * v[2]
    ];
  };

  view.create('plane3d', [P0, u, v, [-1.45, 1.45], [-1.45, 1.45]], {
    fillColor: '#2f6f9f',
    fillOpacity: 0.18,
    strokeColor: '#2f6f9f',
    strokeOpacity: 0.75,
    strokeWidth: 1,
    mesh3d: { visible: true, strokeColor: '#2f6f9f', strokeOpacity: 0.22, strokeWidth: 1 },
    ...fixed
  });

  const origin = view.create('point3d', P0, {
    name: '',
    size: 5,
    fillColor: '#17324d',
    strokeColor: '#17324d',
    ...fixed
  });
  const generated = view.create('point3d', [pointOnPlane], {
    name: '',
    size: 6,
    fillColor: '#3f735f',
    strokeColor: '#3f735f',
    ...fixed
  });

  view.create('line3d', [P0, u, [0, 1]], {
    strokeColor: '#2f6f9f',
    strokeWidth: 4,
    lastArrow: true,
    ...fixed
  });
  view.create('line3d', [P0, v, [0, 1]], {
    strokeColor: '#b1782b',
    strokeWidth: 4,
    lastArrow: true,
    ...fixed
  });
  view.create('line3d', [origin, generated], {
    strokeColor: '#3f735f',
    strokeWidth: 4,
    lastArrow: true,
    ...fixed
  });

  view.create('text3d', [[P0[0] - 0.15, P0[1] - 0.25, P0[2] + 0.35], '$P_0$'],
    boxed({ color: '#17324d', fontSize: 17, useMathJax: true }));
  view.create('text3d', [[P0[0] + 0.55 * u[0], P0[1] + 0.55 * u[1], P0[2] + 0.55 * u[2] + 0.25], '$\\mathbf u$'],
    boxed({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
  view.create('text3d', [[P0[0] + 0.55 * v[0] - 0.2, P0[1] + 0.55 * v[1], P0[2] + 0.55 * v[2] + 0.25], '$\\mathbf v$'],
    boxed({ color: '#b1782b', fontSize: 18, useMathJax: true }));
  view.create('text3d', [[
    () => pointOnPlane()[0] + 0.2,
    () => pointOnPlane()[1] + 0.2,
    () => pointOnPlane()[2] + 0.3
  ], '$P_0+s\\mathbf u+t\\mathbf v$'], boxed({ color: '#3f735f', fontSize: 17, useMathJax: true }));

  function update() {
    sOut.textContent = sSlider.value;
    tOut.textContent = tSlider.value;
    board.fullUpdate();
    window.MathJax?.typesetPromise?.([panel]);
  }

  sSlider.addEventListener('input', update);
  tSlider.addEventListener('input', update);
  update();

  window.LectureJSX?.keepBoardFitted?.({
    board,
    host,
    boundingBox: [-8, 8, 8, -8]
  });
})();
