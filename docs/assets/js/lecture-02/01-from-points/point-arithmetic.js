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
    name: 'O', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });

  const P = board.create('point', [2, 1], {
    name: 'P', fillColor: '#2f6f9f', strokeColor: '#2f6f9f', ...draggable
  });

  const Q = board.create('point', [-1, 3], {
    name: 'Q', fillColor: '#7a3f73', strokeColor: '#7a3f73', ...draggable
  });

  const Sum = board.create('point', [
    () => P.X() + Q.X(),
    () => P.Y() + Q.Y()
  ], {
    name: 'P+Q', size: 5, fillColor: '#3f7f68', strokeColor: '#3f7f68', ...fixed
  });

  const Opp = board.create('point', [
    () => -P.X(),
    () => -P.Y()
  ], {
    name: '-P', size: 5, fillColor: '#b24c3a', strokeColor: '#b24c3a', ...fixed
  });

  const Diff = board.create('point', [
    () => Q.X() - P.X(),
    () => Q.Y() - P.Y()
  ], {
    name: 'Q-P', size: 5, fillColor: '#17324d', strokeColor: '#17324d', ...fixed
  });

  const Scaled = board.create('point', [
    () => Number(lambdaSlider.value) * P.X(),
    () => Number(lambdaSlider.value) * P.Y()
  ], {
    name: 'λP', size: 5, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });

  const X = board.create('point', [2, -2], {
    name: 'X', fillColor: '#7a3f73', strokeColor: '#7a3f73', ...draggable
  });

  const Translated = board.create('point', [
    () => P.X() + X.X(),
    () => P.Y() + X.Y()
  ], {
    name: 'P⊕v', size: 5, fillColor: '#3f7f68', strokeColor: '#3f7f68', ...fixed
  });

  const vectorArrow = board.create('arrow', [O, X], {
    strokeColor: '#7a3f73', strokeWidth: 4, ...fixed
  });
  const translatedArrow = board.create('arrow', [P, Translated], {
    strokeColor: '#3f7f68', strokeWidth: 5, ...fixed
  });
  const vectorText = board.create('text', [
    () => X.X() / 2,
    () => X.Y() / 2 + 0.35,
    () => `$\\mathbf v=[X-O]=[${f(X.X())},${f(X.Y())}]$`
  ], {
    display: 'html', useMathJax: true, cssClass: 'vector-label-chip',
    color: '#7a3f73', fontSize: 17, ...fixed
  });

  let mode = 'sum';
  const results = [Sum, Opp, Diff, Scaled, Translated];
  const translationObjects = [X, vectorArrow, translatedArrow, vectorText];

  function f(value) {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  }

  const pointPair = (x, y) => `(${f(x)}, ${f(y)})`;
  const vectorPair = (x, y) => `[${f(x)}, ${f(y)}]`;

  function setVisible(object, visible) {
    object.setAttribute({ visible });
  }

  function updateReadout() {
    const px = P.X();
    const py = P.Y();
    const qx = Q.X();
    const qy = Q.Y();
    const vx = X.X();
    const vy = X.Y();
    const lambda = Number(lambdaSlider.value);
    lambdaOutput.textContent = f(lambda);

    if (mode === 'sum') {
      readout.textContent = `P ${pointPair(px, py)} + Q ${pointPair(qx, qy)} = P+Q ${pointPair(px + qx, py + qy)}`;
    } else if (mode === 'opposite') {
      readout.textContent = `P ${pointPair(px, py)};  −P ${pointPair(-px, -py)};  P+(−P)=O ${pointPair(0, 0)}`;
    } else if (mode === 'difference') {
      readout.textContent = `Q ${pointPair(qx, qy)} − P ${pointPair(px, py)} = Q−P ${pointPair(qx - px, qy - py)};  [Q−P] = ${vectorPair(qx - px, qy - py)}`;
    } else if (mode === 'scalar') {
      readout.textContent = `λP = ${f(lambda)} · ${pointPair(px, py)} = ${pointPair(lambda * px, lambda * py)}`;
    } else {
      readout.textContent = `P ${pointPair(px, py)} ⊕ v ${vectorPair(vx, vy)} = P⊕v ${pointPair(px + vx, py + vy)}`;
    }
  }

  function setMode(nextMode) {
    mode = nextMode;
    results.forEach(object => setVisible(object, false));
    translationObjects.forEach(object => setVisible(object, false));

    setVisible(P, true);
    setVisible(Q, mode === 'sum' || mode === 'difference');
    setVisible(O, true);

    if (mode === 'sum') setVisible(Sum, true);
    if (mode === 'opposite') setVisible(Opp, true);
    if (mode === 'difference') setVisible(Diff, true);
    if (mode === 'scalar') setVisible(Scaled, true);
    if (mode === 'translate') {
      setVisible(Translated, true);
      translationObjects.forEach(object => setVisible(object, true));
    }

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
  X.on('drag', updateReadout);

  setMode('sum');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();