(() => {
  const host = document.querySelector('[data-intersections-regions]');
  if (!host || !window.JXG) return;

  const VIEW = [-5.5, 5.5, 5.5, -5.5];
  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-region-mode]')];
  const conditions = panel.querySelector('[data-region-conditions]');
  const description = panel.querySelector('[data-region-description]');

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: true,
    grid: true,
    showNavigation: false,
    showCopyright: false,
    keepAspectRatio: true,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const styles = {
    curveA: { strokeColor: '#2f6f9f', strokeWidth: 4, fixed: true, highlight: false },
    curveB: { strokeColor: '#b1782b', strokeWidth: 4, fixed: true, highlight: false },
    point: { size: 5, fillColor: '#17324d', strokeColor: '#17324d', fixed: true, highlight: false },
    region: { fillColor: '#3f735f', fillOpacity: 0.20, borders: { visible: false }, vertices: { visible: false }, fixed: true, highlight: false }
  };

  let scene = [];
  let currentMode = 'parabola-line';

  const keep = object => { scene.push(object); return object; };
  const clear = () => { scene.forEach(object => board.removeObject(object)); scene = []; };

  function polygon(points) {
    return keep(board.create('polygon', points, styles.region));
  }

  function point(x, y, name) {
    return keep(board.create('point', [x, y], { ...styles.point, name }));
  }

  function parabolaLine() {
    conditions.textContent = 'y ≥ x² − 2  and  y ≤ x + 2';
    description.textContent = 'The shaded set lies above the parabola and below the line. Its endpoints are the exact intersections of the two boundary curves.';

    const sqrt17 = Math.sqrt(17);
    const left = (1 - sqrt17) / 2;
    const right = (1 + sqrt17) / 2;
    const upper = [];
    const lower = [];

    for (let i = 0; i <= 180; i += 1) {
      const x = left + (right - left) * i / 180;
      upper.push([x, x + 2]);
      lower.unshift([x, x * x - 2]);
    }

    polygon([...upper, ...lower]);
    keep(board.create('functiongraph', [x => x * x - 2], styles.curveA));
    keep(board.create('functiongraph', [x => x + 2], styles.curveB));
    point(left, left + 2, 'A');
    point(right, right + 2, 'B');
  }

  function absoluteLines() {
    conditions.textContent = 'y ≥ |x| − 1  and  y ≤ 2';
    description.textContent = 'Three straight boundary pieces enclose a region. The corner points satisfy pairs of boundary equations.';
    polygon([[-3, 2], [0, -1], [3, 2]]);
    keep(board.create('functiongraph', [x => Math.abs(x) - 1], styles.curveA));
    keep(board.create('line', [[-4, 2], [4, 2]], styles.curveB));
    point(-3, 2, 'A');
    point(3, 2, 'B');
    point(0, -1, 'C');
  }

  function semidisk() {
    conditions.textContent = 'x² + y² ≤ 9  and  y ≥ 0';
    description.textContent = 'The region satisfies the disk inequality and the upper-half-plane inequality simultaneously.';
    const points = [[-3, 0]];
    for (let i = 0; i <= 120; i += 1) {
      const theta = Math.PI - Math.PI * i / 120;
      points.push([3 * Math.cos(theta), 3 * Math.sin(theta)]);
    }
    points.push([3, 0]);
    polygon(points);
    keep(board.create('circle', [[0, 0], 3], { ...styles.curveA, fillOpacity: 0 }));
    keep(board.create('line', [[-4, 0], [4, 0]], styles.curveB));
    point(-3, 0, 'A');
    point(3, 0, 'B');
  }

  const renderers = {
    'parabola-line': parabolaLine,
    'absolute-lines': absoluteLines,
    semidisk
  };

  function resetView() {
    board.setBoundingBox(VIEW, true);
  }

  function setMode(mode) {
    currentMode = mode;
    clear();
    resetView();
    renderers[mode]();
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.regionMode === mode));
    board.fullUpdate();
  }

  function resizeAndRestoreView() {
    board.resizeContainer(host.clientWidth, host.clientHeight);
    resetView();
    board.fullUpdate();
  }

  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.regionMode)));
  document.addEventListener('fullscreenchange', () => setTimeout(resizeAndRestoreView, 100));
  window.addEventListener('resize', () => requestAnimationFrame(resizeAndRestoreView));

  setMode(currentMode);
})();