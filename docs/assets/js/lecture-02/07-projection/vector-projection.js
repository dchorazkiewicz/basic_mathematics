(() => {
  if (!window.JXG) return;

  const fixed = { fixed: true, highlight: false };
  const VIEW = [-5.5, 5.5, 7.5, -4.5];
  const labelStyle = 'background:rgba(255,255,255,.94);border:1px solid #d7dee4;border-radius:10px;padding:3px 7px;';

  function projectionData(U, V) {
    const denominator = Math.max(1e-9, V.X() ** 2 + V.Y() ** 2);
    const lambda = (U.X() * V.X() + U.Y() * V.Y()) / denominator;
    return {
      lambda,
      px: lambda * V.X(),
      py: lambda * V.Y()
    };
  }

  function initialiseProjection() {
    const host = document.querySelector('[data-vector-projection]');
    if (!host) return;

    const panel = host.closest('[data-fullscreen-panel]');
    const readout = panel.querySelector('[data-projection-readout]');
    const coeffOut = panel.querySelector('[data-projection-coefficient]');
    const vectorOut = panel.querySelector('[data-projection-vector]');
    const checkOut = panel.querySelector('[data-projection-check]');
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

    const O = board.create('point', [0, 0], { name: 'O', size: 3, ...fixed });
    const U = board.create('point', [3.5, 3], {
      name: 'u', size: 6, fillColor: '#17324d', strokeColor: '#17324d',
      snapToGrid: true, snapSizeX: .5, snapSizeY: .5
    });
    const V = board.create('point', [4, 1], {
      name: 'v', size: 6, fillColor: '#2f6f9f', strokeColor: '#2f6f9f',
      snapToGrid: true, snapSizeX: .5, snapSizeY: .5
    });
    const H = board.create('point', [
      () => projectionData(U, V).px,
      () => projectionData(U, V).py
    ], { name: 'H', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed });

    board.create('line', [O, V], { strokeColor: '#9aa7b2', strokeWidth: 2, dash: 2, ...fixed });
    board.create('arrow', [O, U], { strokeColor: '#17324d', strokeWidth: 5, ...fixed });
    board.create('arrow', [O, H], { strokeColor: '#2f6f9f', strokeWidth: 5, ...fixed });
    board.create('arrow', [H, U], { strokeColor: '#b1782b', strokeWidth: 4, ...fixed });
    board.create('angle', [O, H, U], {
      radius: .45, fillColor: '#66717d', fillOpacity: .08,
      strokeColor: '#66717d', name: '', ...fixed
    });

    const fmt = n => Math.abs(n) < 1e-8 ? '0' : n.toFixed(2).replace(/\.00$/, '');
    function update() {
      const { lambda, px, py } = projectionData(U, V);
      const rx = U.X() - px;
      const ry = U.Y() - py;
      const check = rx * V.X() + ry * V.Y();
      coeffOut.textContent = `λ = ${fmt(lambda)}`;
      vectorOut.textContent = `projᵥu = [${fmt(px)}, ${fmt(py)}]`;
      checkOut.textContent = `remainder · v = ${fmt(check)}`;
      readout.textContent = 'u = projᵥu + perpendicular remainder';
      board.fullUpdate();
    }

    U.on('drag', update);
    V.on('drag', update);
    update();
    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
  }

  function initialiseDecomposition() {
    const host = document.querySelector('[data-orthogonal-decomposition]');
    if (!host) return;

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

    const O = board.create('point', [0, 0], {
      name: 'O', size: 3, fillColor: '#18212b', strokeColor: '#18212b', ...fixed
    });
    const U = board.create('point', [3.5, 3], {
      name: '', size: 6, fillColor: '#17324d', strokeColor: '#17324d',
      snapToGrid: true, snapSizeX: .5, snapSizeY: .5
    });
    const V = board.create('point', [4, 1], {
      name: 'v', size: 5, fillColor: '#6f8291', strokeColor: '#6f8291',
      snapToGrid: true, snapSizeX: .5, snapSizeY: .5,
      label: { offset: [10, 10], fontSize: 18, cssStyle: labelStyle }
    });
    const H = board.create('point', [
      () => projectionData(U, V).px,
      () => projectionData(U, V).py
    ], { name: '', size: 4, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', ...fixed });

    board.create('line', [O, V], {
      strokeColor: '#a8b3bc', strokeWidth: 2, dash: 2, ...fixed
    });
    board.create('arrow', [O, U], {
      strokeColor: '#17324d', strokeWidth: 6, ...fixed
    });
    board.create('arrow', [O, H], {
      strokeColor: '#2f6f9f', strokeWidth: 6, ...fixed
    });
    board.create('arrow', [H, U], {
      strokeColor: '#b1782b', strokeWidth: 6, ...fixed
    });
    board.create('angle', [O, H, U], {
      radius: .42, fillColor: '#66717d', fillOpacity: .08,
      strokeColor: '#66717d', strokeWidth: 2, name: '', ...fixed
    });

    board.create('text', [
      () => U.X() / 2 + 0.18,
      () => U.Y() / 2 + 0.18,
      '<b>u</b>'
    ], { fontSize: 20, color: '#17324d', cssStyle: labelStyle, ...fixed });

    board.create('text', [
      () => projectionData(U, V).px / 2 - 0.35,
      () => projectionData(U, V).py / 2 - 0.32,
      'proj<sub>v</sub> u'
    ], { fontSize: 18, color: '#2f6f9f', cssStyle: labelStyle, ...fixed });

    board.create('text', [
      () => (projectionData(U, V).px + U.X()) / 2 + 0.18,
      () => (projectionData(U, V).py + U.Y()) / 2 + 0.18,
      'u − proj<sub>v</sub> u'
    ], { fontSize: 18, color: '#b1782b', cssStyle: labelStyle, ...fixed });

    const update = () => board.fullUpdate();
    U.on('drag', update);
    V.on('drag', update);
    update();
    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
  }

  initialiseProjection();
  initialiseDecomposition();
})();
