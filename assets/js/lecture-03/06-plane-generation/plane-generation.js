(() => {
  const host = document.querySelector('[data-plane-generation]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const sSlider = panel.querySelector('[data-plane-s-slider]');
  const tSlider = panel.querySelector('[data-plane-t-slider]');
  const sOut = panel.querySelector('[data-plane-s]');
  const tOut = panel.querySelector('[data-plane-t]');
  const VIEW = [-5, 5, 7, -5];
  const fixed = { fixed: true, highlight: false };
  const boxed = options => window.LectureJSX?.diagramLabelStyle?.(options) || {
    display: 'html', cssClass: 'vector-label-chip', ...fixed, ...options
  };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: false,
    grid: false,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const P0 = [0, 0], u = [3, .7], v = [1.4, 2.3];
  const corner = (a, b) => [P0[0] + a * u[0] + b * v[0], P0[1] + a * u[1] + b * v[1]];

  board.create('polygon', [corner(-1.4, -1.2), corner(1.4, -1.2), corner(1.4, 1.2), corner(-1.4, 1.2)], {
    fillColor: '#2f6f9f',
    fillOpacity: .09,
    borders: { strokeColor: '#2f6f9f', strokeWidth: 2 },
    vertices: { visible: false },
    ...fixed
  });

  const O = board.create('point', P0, {
    name: 'P₀', size: 5, fillColor: '#17324d', strokeColor: '#17324d', ...fixed
  });
  const U = corner(1, 0);
  const V = corner(0, 1);
  board.create('arrow', [O, U], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  board.create('arrow', [O, V], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
  board.create('text', [U[0] / 2, U[1] / 2 + .35, '$\\mathbf u$'], boxed({ color: '#2f6f9f', fontSize: 18, useMathJax: true }));
  board.create('text', [V[0] / 2 - .3, V[1] / 2 + .2, '$\\mathbf v$'], boxed({ color: '#b1782b', fontSize: 18, useMathJax: true }));

  const P = board.create('point', [
    () => corner(Number(sSlider.value), Number(tSlider.value))[0],
    () => corner(Number(sSlider.value), Number(tSlider.value))[1]
  ], {
    name: 'P₀+s u+t v',
    size: 5,
    fillColor: '#3f735f',
    strokeColor: '#3f735f',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });
  board.create('segment', [O, P], { strokeColor: '#3f735f', strokeWidth: 4, ...fixed });

  function update() {
    sOut.value = sSlider.value;
    tOut.value = tSlider.value;
    board.fullUpdate();
  }
  sSlider.addEventListener('input', update);
  tSlider.addEventListener('input', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
