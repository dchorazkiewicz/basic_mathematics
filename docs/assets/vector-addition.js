(() => {
  if (!window.JXG) return;

  const colors = {
    a: '#2f6f9f',
    b: '#b1782b',
    sum: '#17324d',
    opposite: '#7a3f73',
    helper: '#9aa6b2',
    text: '#4f5e6c'
  };
  const fixed = { fixed: true, highlight: false };
  const draggable = { size: 5, snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5 };
  const f = value => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };
  const pair = (x, y) => `[${f(x)}, ${f(y)}]`;

  function initChain() {
    const host = document.querySelector('[data-vector-chain]');
    if (!host) return;
    const panel = host.closest('[data-fullscreen-panel]');
    const readout = panel.querySelector('[data-vector-chain-readout]');
    const VIEW = [-2, 6.5, 8, -3.5];
    const board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: [...VIEW], axis: true, grid: true, keepAspectRatio: true,
      showNavigation: false, showCopyright: false,
      pan: { enabled: false }, zoom: { enabled: false }
    });

    const P = board.create('point', [0.5, 0.5], { name: 'P', fillColor: colors.sum, strokeColor: colors.sum, ...draggable });
    const Q = board.create('point', [3, 2], { name: 'Q', fillColor: colors.a, strokeColor: colors.a, ...draggable });
    const R = board.create('point', [5.5, 4], { name: 'R', fillColor: colors.b, strokeColor: colors.b, ...draggable });

    board.create('arrow', [P, Q], { strokeColor: colors.a, strokeWidth: 5, ...fixed });
    board.create('arrow', [Q, R], { strokeColor: colors.b, strokeWidth: 5, ...fixed });
    board.create('arrow', [P, R], { strokeColor: colors.sum, strokeWidth: 4, dash: 2, ...fixed });

    board.create('text', [() => (P.X() + Q.X()) / 2, () => (P.Y() + Q.Y()) / 2 + 0.35, 'a = [PQ]'], { color: colors.a, fontSize: 18, ...fixed });
    board.create('text', [() => (Q.X() + R.X()) / 2, () => (Q.Y() + R.Y()) / 2 + 0.35, 'b = [QR]'], { color: colors.b, fontSize: 18, ...fixed });
    board.create('text', [() => (P.X() + R.X()) / 2, () => (P.Y() + R.Y()) / 2 - 0.45, 'a + b = [PR]'], { color: colors.sum, fontSize: 18, ...fixed });

    function updateReadout() {
      const ax = Q.X() - P.X();
      const ay = Q.Y() - P.Y();
      const bx = R.X() - Q.X();
      const by = R.Y() - Q.Y();
      readout.textContent = `a = ${pair(ax, ay)};  b = ${pair(bx, by)};  a + b = ${pair(R.X() - P.X(), R.Y() - P.Y())}`;
    }

    P.on('drag', updateReadout);
    Q.on('drag', updateReadout);
    R.on('drag', updateReadout);
    updateReadout();
    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: () => [...VIEW] });
  }

  function initSubtraction() {
    const host = document.querySelector('[data-vector-subtraction]');
    if (!host) return;
    const panel = host.closest('[data-fullscreen-panel]');
    const buttons = [...panel.querySelectorAll('[data-subtraction-step]')];
    const readout = panel.querySelector('[data-vector-subtraction-readout]');
    const VIEW = [-3, 6, 8, -5];
    const board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: [...VIEW], axis: true, grid: true, keepAspectRatio: true,
      showNavigation: false, showCopyright: false,
      pan: { enabled: false }, zoom: { enabled: false }
    });

    const O = board.create('point', [0, 0], { name: 'O', size: 3, fillColor: colors.sum, strokeColor: colors.sum, ...fixed });
    const A = board.create('point', [4.5, 2], { name: 'A', fillColor: colors.a, strokeColor: colors.a, ...draggable });
    const B = board.create('point', [2, 3.5], { name: 'B', fillColor: colors.b, strokeColor: colors.b, ...draggable });
    const NegB = board.create('point', [() => -B.X(), () => -B.Y()], { name: '−B', visible: false, fillColor: colors.opposite, strokeColor: colors.opposite, ...fixed });
    const D = board.create('point', [() => A.X() - B.X(), () => A.Y() - B.Y()], { name: 'D', visible: false, fillColor: colors.sum, strokeColor: colors.sum, ...fixed });

    const a = board.create('arrow', [O, A], { strokeColor: colors.a, strokeWidth: 5, ...fixed });
    const b = board.create('arrow', [O, B], { strokeColor: colors.b, strokeWidth: 5, ...fixed });
    const negB = board.create('arrow', [O, NegB], { strokeColor: colors.opposite, strokeWidth: 5, ...fixed });
    const negBAtA = board.create('arrow', [A, D], { strokeColor: colors.opposite, strokeWidth: 5, ...fixed });
    const difference = board.create('arrow', [O, D], { strokeColor: colors.sum, strokeWidth: 5, ...fixed });
    const checkB = board.create('arrow', [D, A], { strokeColor: colors.b, strokeWidth: 4, dash: 2, ...fixed });

    const labelA = board.create('text', [() => A.X() / 2, () => A.Y() / 2 - 0.35, 'a'], { color: colors.a, fontSize: 19, ...fixed });
    const labelB = board.create('text', [() => B.X() / 2 - 0.3, () => B.Y() / 2, 'b'], { color: colors.b, fontSize: 19, ...fixed });
    const labelNegB = board.create('text', [() => -B.X() / 2 - 0.3, () => -B.Y() / 2, '−b'], { color: colors.opposite, fontSize: 19, ...fixed });
    const labelNegBAtA = board.create('text', [() => (A.X() + D.X()) / 2, () => (A.Y() + D.Y()) / 2 - 0.35, '−b'], { color: colors.opposite, fontSize: 19, ...fixed });
    const labelDifference = board.create('text', [() => D.X() / 2 + 0.2, () => D.Y() / 2 - 0.35, 'a − b'], { color: colors.sum, fontSize: 19, ...fixed });
    const labelCheck = board.create('text', [() => (D.X() + A.X()) / 2 + 0.2, () => (D.Y() + A.Y()) / 2 + 0.25, 'b'], { color: colors.b, fontSize: 19, ...fixed });

    const controlled = [negB, negBAtA, difference, checkB, NegB, D, labelNegB, labelNegBAtA, labelDifference, labelCheck];

    function visible(object, value) {
      object.setAttribute({ visible: value });
    }

    function updateReadout(step) {
      const ax = A.X(), ay = A.Y(), bx = B.X(), by = B.Y();
      if (step === 'opposite') {
        readout.textContent = `b = ${pair(bx, by)};  −b = ${pair(-bx, -by)};  b + (−b) = ${pair(0, 0)}`;
      } else if (step === 'add') {
        readout.textContent = `a + (−b) = ${pair(ax, ay)} + ${pair(-bx, -by)} = ${pair(ax - bx, ay - by)}`;
      } else {
        readout.textContent = `(a − b) + b = ${pair(ax - bx, ay - by)} + ${pair(bx, by)} = ${pair(ax, ay)} = a`;
      }
    }

    let currentStep = 'opposite';
    function setStep(step) {
      currentStep = step;
      controlled.forEach(object => visible(object, false));
      visible(a, true);
      visible(b, true);
      visible(labelA, true);
      visible(labelB, true);

      if (step === 'opposite') {
        [NegB, negB, labelNegB].forEach(object => visible(object, true));
      } else if (step === 'add') {
        [D, negBAtA, difference, labelNegBAtA, labelDifference].forEach(object => visible(object, true));
      } else {
        [D, difference, checkB, labelDifference, labelCheck].forEach(object => visible(object, true));
      }

      buttons.forEach(button => button.classList.toggle('is-active', button.dataset.subtractionStep === step));
      updateReadout(step);
      board.fullUpdate();
    }

    buttons.forEach(button => button.addEventListener('click', () => setStep(button.dataset.subtractionStep)));
    A.on('drag', () => updateReadout(currentStep));
    B.on('drag', () => updateReadout(currentStep));
    setStep('opposite');
    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: () => [...VIEW] });
  }

  initChain();
  initSubtraction();
})();