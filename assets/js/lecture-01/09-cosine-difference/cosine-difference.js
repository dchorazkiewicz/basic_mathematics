(() => {
  if (!window.JXG) return;

  const colors = {
    ink: '#18212b',
    blue: '#2f6f9f',
    green: '#3f735f',
    gold: '#b1782b',
    muted: '#66717d',
    helper: '#c6d0d8'
  };
  const fixed = { fixed: true, highlight: false };
  const labelStyle = 'background:rgba(255,255,255,.94);border:1px solid #d7dee4;border-radius:10px;padding:3px 7px;';
  const degrees = angle => `${(angle * 180 / Math.PI).toFixed(1)}°`;
  const clampQuarter = angle => Math.max(0.05, Math.min(Math.PI / 2 - 0.05, angle));

  function fit(board, host, boundingBox) {
    if (window.LectureJSX?.keepBoardFitted) {
      window.LectureJSX.keepBoardFitted({ board, host, boundingBox });
    }
  }

  function initialiseUnitCircle() {
    const host = document.querySelector('[data-cosine-unit-circle]');
    if (!host) return;

    const bbox = [-1.35, 1.25, 1.65, -0.35];
    const board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: bbox,
      axis: false,
      grid: false,
      showNavigation: false,
      showCopyright: false,
      keepAspectRatio: true,
      pan: { enabled: false },
      zoom: { enabled: false }
    });

    const O = board.create('point', [0, 0], {
      name: 'O', size: 4, fillColor: colors.ink, strokeColor: colors.ink,
      label: { offset: [-22, -24], fontSize: 18, cssStyle: labelStyle }, ...fixed
    });
    const unit = board.create('circle', [O, 1], {
      strokeColor: colors.helper, strokeWidth: 2, fillOpacity: 0, ...fixed
    });
    board.create('axis', [O, [1, 0]], {
      ticks: { visible: false }, strokeColor: '#9aa6b2', strokeWidth: 1.5, ...fixed
    });
    board.create('axis', [O, [0, 1]], {
      ticks: { visible: false }, strokeColor: '#9aa6b2', strokeWidth: 1.5, ...fixed
    });

    const A = board.create('glider', [Math.cos(1.05), Math.sin(1.05), unit], {
      name: 'A', size: 6, fillColor: colors.blue, strokeColor: colors.blue,
      label: { offset: [10, 14], fontSize: 20, cssStyle: labelStyle }
    });
    const B = board.create('glider', [Math.cos(0.48), Math.sin(0.48), unit], {
      name: 'B', size: 6, fillColor: colors.green, strokeColor: colors.green,
      label: { offset: [12, -10], fontSize: 20, cssStyle: labelStyle }
    });

    const constrain = point => {
      const angle = clampQuarter(Math.atan2(point.Y(), point.X()));
      point.setPosition(JXG.COORDS_BY_USER, [Math.cos(angle), Math.sin(angle)]);
    };
    A.on('drag', () => constrain(A));
    B.on('drag', () => constrain(B));

    board.create('segment', [O, A], { strokeColor: colors.blue, strokeWidth: 5, ...fixed });
    board.create('segment', [O, B], { strokeColor: colors.green, strokeWidth: 5, ...fixed });
    board.create('segment', [A, B], { strokeColor: colors.gold, strokeWidth: 4, ...fixed });

    const alpha = () => Math.atan2(A.Y(), A.X());
    const beta = () => Math.atan2(B.Y(), B.X());
    const delta = () => Math.abs(alpha() - beta());

    board.create('angle', [[1, 0], O, A], {
      radius: 0.28, fillColor: colors.blue, fillOpacity: 0.12,
      strokeColor: colors.blue, strokeWidth: 2, name: '', ...fixed
    });
    board.create('angle', [[1, 0], O, B], {
      radius: 0.20, fillColor: colors.green, fillOpacity: 0.12,
      strokeColor: colors.green, strokeWidth: 2, name: '', ...fixed
    });

    board.create('text', [() => A.X() + 0.10, () => A.Y() + 0.12,
      () => `A = (cos α, sin α),  α = ${degrees(alpha())}`],
      { fontSize: 17, color: colors.blue, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => B.X() + 0.10, () => B.Y() - 0.12,
      () => `B = (cos β, sin β),  β = ${degrees(beta())}`],
      { fontSize: 17, color: colors.green, cssStyle: labelStyle, ...fixed });
    board.create('text', [0.12, 0.10, () => `δ = |α − β| = ${degrees(delta())}`],
      { fontSize: 18, color: colors.gold, cssStyle: labelStyle, ...fixed });
    board.create('text', [0.43, 0.95, 'OA = OB = 1'],
      { fontSize: 17, color: colors.muted, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => (A.X() + B.X()) / 2 + 0.05, () => (A.Y() + B.Y()) / 2 + 0.05, 'chord AB'],
      { fontSize: 17, color: colors.gold, cssStyle: labelStyle, ...fixed });

    fit(board, host, bbox);
  }

  function initialiseReducedPicture() {
    const host = document.querySelector('[data-cosine-reduced]');
    if (!host) return;

    const bbox = [-0.25, 1.25, 1.35, -0.30];
    const board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: bbox,
      axis: false,
      grid: false,
      showNavigation: false,
      showCopyright: false,
      keepAspectRatio: true,
      pan: { enabled: false },
      zoom: { enabled: false }
    });

    const O = board.create('point', [0, 0], {
      name: 'O', size: 5, fillColor: colors.ink, strokeColor: colors.ink,
      label: { offset: [-22, -24], fontSize: 20, cssStyle: labelStyle }, ...fixed
    });
    const B = board.create('point', [1, 0], {
      name: 'B', size: 6, fillColor: colors.green, strokeColor: colors.green,
      label: { offset: [12, -16], fontSize: 20, cssStyle: labelStyle }, ...fixed
    });
    const unit = board.create('circle', [O, 1], {
      strokeColor: colors.helper, strokeWidth: 1.5, dash: 2, fillOpacity: 0, ...fixed
    });
    const A = board.create('glider', [Math.cos(0.85), Math.sin(0.85), unit], {
      name: 'A', size: 6, fillColor: colors.blue, strokeColor: colors.blue,
      label: { offset: [10, 14], fontSize: 20, cssStyle: labelStyle }
    });
    A.on('drag', () => {
      const angle = clampQuarter(Math.atan2(A.Y(), A.X()));
      A.setPosition(JXG.COORDS_BY_USER, [Math.cos(angle), Math.sin(angle)]);
    });

    const H = board.create('point', [() => A.X(), 0], {
      name: 'H', size: 5, fillColor: colors.gold, strokeColor: colors.gold,
      label: { offset: [-8, -28], fontSize: 19, cssStyle: labelStyle }, ...fixed
    });

    board.create('segment', [O, B], { strokeColor: colors.green, strokeWidth: 6, ...fixed });
    board.create('segment', [O, A], { strokeColor: colors.blue, strokeWidth: 5, ...fixed });
    board.create('segment', [A, B], { strokeColor: colors.ink, strokeWidth: 4, ...fixed });
    board.create('segment', [A, H], { strokeColor: colors.gold, strokeWidth: 5, ...fixed });
    board.create('polygon', [H, [() => A.X() + 0.065, 0], [() => A.X() + 0.065, 0.065], [() => A.X(), 0.065]], {
      borders: { strokeColor: colors.muted, strokeWidth: 2 },
      fillColor: '#ffffff', fillOpacity: 0.7,
      vertices: { visible: false }, ...fixed
    });

    board.create('angle', [B, O, A], {
      radius: 0.19, fillColor: colors.gold, fillOpacity: 0.14,
      strokeColor: colors.gold, strokeWidth: 2, name: '', ...fixed
    });

    board.create('text', [0.10, 0.10, 'δ'],
      { fontSize: 18, color: colors.gold, cssStyle: labelStyle, ...fixed });
    board.create('text', [0.34, -0.14, 'OB = 1'],
      { fontSize: 17, color: colors.green, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => A.X() / 2 - 0.08, () => A.Y() / 2 + 0.08, 'OA = 1'],
      { fontSize: 17, color: colors.blue, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => A.X() / 2 - 0.02, -0.08, 'OH = cos δ'],
      { fontSize: 17, color: colors.green, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => A.X() + 0.08, () => A.Y() / 2, 'AH = sin δ'],
      { fontSize: 17, color: colors.gold, cssStyle: labelStyle, ...fixed });
    board.create('text', [() => (A.X() + 1) / 2, 0.10, 'HB = 1 − cos δ'],
      { fontSize: 17, color: colors.ink, cssStyle: labelStyle, ...fixed });

    fit(board, host, bbox);
  }

  initialiseUnitCircle();
  initialiseReducedPicture();
})();