(() => {
  const host = document.querySelector('[data-polar-conic-family]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const pSlider = panel.querySelector('[data-conic-p-slider]');
  const eSlider = panel.querySelector('[data-conic-e-slider]');
  const pOut = panel.querySelector('[data-conic-p]');
  const eOut = panel.querySelector('[data-conic-e]');
  const readout = panel.querySelector('[data-conic-family-readout]');
  const VIEW = [-8, 6, 8, -6];
  const fixed = { fixed: true, highlight: false };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: true,
    grid: true,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  let p = Number(pSlider.value);
  let e = Number(eSlider.value);
  const curve = board.create('curve', [
    t => {
      const den = 1 + e * Math.cos(t);
      const r = Math.abs(den) < .025 ? NaN : p / den;
      return r >= 0 && Math.abs(r) < 30 ? r * Math.cos(t) : NaN;
    },
    t => {
      const den = 1 + e * Math.cos(t);
      const r = Math.abs(den) < .025 ? NaN : p / den;
      return r >= 0 && Math.abs(r) < 30 ? r * Math.sin(t) : NaN;
    },
    0,
    2 * Math.PI
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  board.create('point', [0, 0], {
    name: 'focus',
    size: 4,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  const update = () => {
    p = Number(pSlider.value);
    e = Number(eSlider.value);
    pOut.value = p.toFixed(1);
    eOut.value = e.toFixed(2);
    const type = e < .999 ? (e < .02 ? 'circle' : 'ellipse') : e < 1.001 ? 'parabola' : 'hyperbola branch';
    readout.textContent = `${type}: r = ${p.toFixed(1)}/(1 + ${e.toFixed(2)} cos θ)`;
    curve.updateCurve();
    board.fullUpdate();
  };

  pSlider.addEventListener('input', update);
  eSlider.addEventListener('input', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
