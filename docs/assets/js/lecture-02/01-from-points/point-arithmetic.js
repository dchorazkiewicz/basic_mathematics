(() => {
  const host = document.querySelector('[data-point-arithmetic]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-point-operation]')];
  const readout = panel.querySelector('[data-point-operation-readout]');
  const lambdaControl = panel.querySelector('[data-point-lambda-control]');
  const lambdaSlider = panel.querySelector('[data-point-lambda-slider]');
  const lambdaOutput = panel.querySelector('[data-point-lambda-output]');
  const VIEW = [-7, 7, 7, -7];

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

  const fixed = { fixed: true, highlight: false };
  const draggable = {
    size: 5,
    snapToGrid: true,
    snapSizeX: 0.5,
    snapSizeY: 0.5
  };

  const O = board.create('point', [0, 0], {
    name: 'O',
    size: 4,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed
  });

  const P = board.create('point', [2, 1], {
    name: 'P',
    fillColor: '#2f6f9f',
    strokeColor: '#2f6f9f',
    ...draggable
  });

  const Q = board.create('point', [-1, 3], {
    name: 'Q',
    fillColor: '#7a3f73',
    strokeColor: '#7a3f73',
    ...draggable
  });

  const Sum = board.create('point', [
    () => P.X() + Q.X(),
    () => P.Y() + Q.Y()
  ], {
    name: 'P+Q',
    size: 5,
    fillColor: '#3f7f68',
    strokeColor: '#3f7f68',
    ...fixed
  });

  const Opp = board.create('point', [
    () => -P.X(),
    () => -P.Y()
  ], {
    name: '-P',
    size: 5,
    fillColor: '#b24c3a',
    strokeColor: '#b24c3a',
    ...fixed
  });

  const Diff = board.create('point', [
    () => Q.X() - P.X(),
    () => Q.Y() - P.Y()
  ], {
    name: 'Q-P',
    size: 5,
    fillColor: '#17324d',
    strokeColor: '#17324d',
    ...fixed
  });

  const Scaled = board.create('point', [
    () => Number(lambdaSlider.value) * P.X(),
    () => Number(lambdaSlider.value) * P.Y()
  ], {
    name: 'λP',
    size: 5,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed
  });

  let mode = 'sum';
  const results = [Sum, Opp, Diff, Scaled];

  const f = value => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };

  const pair = (x, y) => `(${f(x)}, ${f(y)})`;

  function setVisible(object, visible) {
    object.setAttribute({ visible });
  }

  function updateReadout() {
    const px = P.X();
    const py = P.Y();
    const qx = Q.X();
    const qy = Q.Y();
    const lambda = Number(lambdaSlider.value);
    lambdaOutput.textContent = f(lambda);

    if (mode === 'sum') {
      readout.textContent = `P ${pair(px, py)} + Q ${pair(qx, qy)} = P+Q ${pair(px + qx, py + qy)}`;
    } else if (mode === 'opposite') {
      readout.textContent = `P ${pair(px, py)};  −P ${pair(-px, -py)};  P+(−P)=O ${pair(0, 0)}`;
    } else if (mode === 'difference') {
      readout.textContent = `Q ${pair(qx, qy)} − P ${pair(px, py)} = Q−P ${pair(qx - px, qy - py)}`;
    } else {
      readout.textContent = `λP = ${f(lambda)} · ${pair(px, py)} = ${pair(lambda * px, lambda * py)}`;
    }
  }

  function setMode(nextMode) {
    mode = nextMode;
    results.forEach(object => setVisible(object, false));

    setVisible(P, true);
    setVisible(Q, mode === 'sum' || mode === 'difference');
    setVisible(O, true);

    if (mode === 'sum') setVisible(Sum, true);
    if (mode === 'opposite') setVisible(Opp, true);
    if (mode === 'difference') setVisible(Diff, true);
    if (mode === 'scalar') setVisible(Scaled, true);

    lambdaControl.hidden = mode !== 'scalar';
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.pointOperation === mode);
    });

    updateReadout();
    board.fullUpdate();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setMode(button.dataset.pointOperation));
  });

  lambdaSlider.addEventListener('input', () => {
    updateReadout();
    board.update();
  });

  P.on('drag', updateReadout);
  Q.on('drag', updateReadout);

  setMode('sum');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();