(() => {
  const host = document.querySelector('[data-plane-relations]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-plane-mode]')];
  const VIEW = [-6, 5, 7, -5];
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

  const objects = [];
  const add = (object, key) => {
    object._key = key;
    objects.push(object);
    return object;
  };
  const poly = (points, key, color) => add(board.create('polygon', points, {
    fillColor: color,
    fillOpacity: .11,
    borders: { strokeColor: color, strokeWidth: 2 },
    vertices: { visible: false },
    ...fixed
  }), key);
  const label = (coords, text, key, color) => add(board.create('text', [coords[0], coords[1], text],
    boxed({ color, fontSize: 18, useMathJax: true })), key);

  poly([[-4, -1], [3, -1], [5, 1.5], [-2, 1.5]], 'p1', '#2f6f9f');
  poly([[-2, -3], [4, -.5], [3, 3], [-3, .5]], 'intersect', '#b1782b');
  poly([[-4, 1], [3, 1], [5, 3.5], [-2, 3.5]], 'parallel', '#b1782b');
  poly([[-.6, -3], [1.2, -2.2], [1.2, 3], [-.6, 2.2]], 'perpendicular', '#b1782b');

  add(board.create('arrow', [[0, 0], [0, 3.2]], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed }), 'n1');
  label([.38, 1.7], '$\\mathbf n_1$', 'n1', '#2f6f9f');

  add(board.create('arrow', [[0, 0], [-2.1, 2.2]], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed }), 'intersect');
  label([-1.35, 1.25], '$\\mathbf n_2$', 'intersect', '#b1782b');

  add(board.create('arrow', [[0, 1.8], [0, 4.2]], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed }), 'parallel');
  label([.42, 3.1], '$\\mathbf n_2$', 'parallel', '#b1782b');

  add(board.create('arrow', [[0, 0], [3.2, 0]], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed }), 'perpendicular');
  label([1.7, .4], '$\\mathbf n_2$', 'perpendicular', '#b1782b');

  add(board.create('line', [[-5, .2], [5, .2]], { strokeColor: '#7a3f73', strokeWidth: 5, ...fixed }), 'intersect');
  label([4.25, .65], '$L$', 'intersect', '#7a3f73');

  function setMode(mode) {
    objects.forEach(object => object.setAttribute({ visible: object._key === 'p1' || object._key === 'n1' || object._key === mode }));
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.planeMode === mode));
    board.fullUpdate();
  }

  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.planeMode)));
  setMode('intersect');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
