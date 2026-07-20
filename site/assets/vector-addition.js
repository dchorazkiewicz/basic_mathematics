(() => {
  const host = document.querySelector('[data-vector-addition]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-addition-mode]')];
  const VIEW = [-1.5, 5.5, 7.5, -2.5];

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: [...VIEW],
    axis: true,
    grid: true,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const colors = {
    a: '#2f6f9f',
    b: '#b1782b',
    result: '#17324d',
    difference: '#7a3f73',
    helper: '#9aa6b2',
    text: '#4f5e6c'
  };
  const fixed = { fixed: true, highlight: false };

  const O = board.create('point', [0, 0], {
    name: 'O', size: 3, fillColor: colors.result, strokeColor: colors.result, ...fixed
  });
  const A = board.create('point', [4, 1.5], {
    name: 'A', size: 5, fillColor: colors.a, strokeColor: colors.a,
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });
  const B = board.create('point', [1.5, 3], {
    name: 'B', size: 5, fillColor: colors.b, strokeColor: colors.b,
    snapToGrid: true, snapSizeX: .5, snapSizeY: .5
  });
  const S = board.create('point', [() => A.X() + B.X(), () => A.Y() + B.Y()], {
    name: 'A+B', visible: false, ...fixed
  });

  const aFromOrigin = board.create('arrow', [O, A], {
    strokeColor: colors.a, strokeWidth: 4, ...fixed
  });
  const bFromOrigin = board.create('arrow', [O, B], {
    strokeColor: colors.b, strokeWidth: 4, ...fixed
  });
  const bAtA = board.create('arrow', [A, S], {
    strokeColor: colors.b, strokeWidth: 4, ...fixed
  });
  const aAtB = board.create('arrow', [B, S], {
    strokeColor: colors.a, strokeWidth: 3, dash: 2, ...fixed
  });
  const sum = board.create('arrow', [O, S], {
    strokeColor: colors.result, strokeWidth: 5, ...fixed
  });
  const difference = board.create('arrow', [B, A], {
    strokeColor: colors.difference, strokeWidth: 5, ...fixed
  });

  const text = (x, y, value, options = {}) => board.create('text', [x, y, value], {
    color: colors.text, fontSize: 17, ...fixed, ...options
  });

  const labelAOrigin = text(
    () => A.X() / 2,
    () => A.Y() / 2 - .32,
    'a',
    { color: colors.a, fontSize: 19 }
  );
  const labelBOrigin = text(
    () => B.X() / 2 - .3,
    () => B.Y() / 2,
    'b',
    { color: colors.b, fontSize: 19 }
  );
  const labelBAtA = text(
    () => A.X() + B.X() / 2 + .12,
    () => A.Y() + B.Y() / 2,
    'b',
    { color: colors.b, fontSize: 19 }
  );
  const labelAAtB = text(
    () => B.X() + A.X() / 2,
    () => B.Y() + A.Y() / 2 + .18,
    'a',
    { color: colors.a, fontSize: 19 }
  );
  const labelSum = text(
    () => S.X() / 2 + .1,
    () => S.Y() / 2 - .35,
    'a + b',
    { color: colors.result, fontSize: 19 }
  );
  const labelDifference = text(
    () => (A.X() + B.X()) / 2,
    () => (A.Y() + B.Y()) / 2 + .35,
    'a − b',
    { color: colors.difference, fontSize: 19 }
  );
  const explanation = text(-1.05, 5.05, '', { fontSize: 17 });

  const allModeObjects = [
    aFromOrigin, bFromOrigin, bAtA, aAtB, sum, difference,
    labelAOrigin, labelBOrigin, labelBAtA, labelAAtB, labelSum, labelDifference
  ];

  function showOnly(objects) {
    allModeObjects.forEach(object => object.setAttribute({ visible: objects.includes(object) }));
  }

  function setMode(mode) {
    if (mode === 'head') {
      showOnly([aFromOrigin, bAtA, sum, labelAOrigin, labelBAtA, labelSum]);
      explanation.setText('Head-to-tail rule: place b at the endpoint of a. The direct displacement is a + b.');
    } else if (mode === 'parallelogram') {
      showOnly([
        aFromOrigin, bFromOrigin, bAtA, aAtB, sum,
        labelAOrigin, labelBOrigin, labelSum
      ]);
      explanation.setText('Parallelogram rule: a and b begin at O; the diagonal from O is a + b.');
    } else {
      showOnly([aFromOrigin, bFromOrigin, difference, labelAOrigin, labelBOrigin, labelDifference]);
      explanation.setText('Subtraction: with a and b drawn from O, a − b points from the endpoint of b to the endpoint of a.');
    }

    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.additionMode === mode);
    });
    board.fullUpdate();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setMode(button.dataset.additionMode));
  });

  setMode('head');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: () => [...VIEW] });
})();