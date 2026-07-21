(() => {
  const colors = { a:'#2f6f9f', b:'#b1782b', sum:'#17324d', opposite:'#7a3f73' };
  const fixed = { fixed:true, highlight:false };
  const draggable = { size:5, snapToGrid:true, snapSizeX:.5, snapSizeY:.5 };
  const format = value => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };
  const pair = (x, y) => `[${format(x)}, ${format(y)}]`;

  function fitBoard(board) {
    const resize = () => board.resizeContainer(board.containerObj.clientWidth, board.containerObj.clientHeight, true);
    resize();
    window.addEventListener('resize', resize, { passive:true });
  }

  function initChain(root) {
    root.querySelectorAll('[data-vector-chain]').forEach(host => {
      if (host.dataset.initialized || !window.JXG) return;
      host.dataset.initialized = 'true';
      const panel = host.closest('[data-fullscreen-panel]');
      const readout = panel?.querySelector('[data-vector-chain-readout]');
      const view = [-2, 6.5, 8, -3.5];
      const board = JXG.JSXGraph.initBoard(host.id, {
        boundingbox:view, axis:true, grid:true, keepAspectRatio:true,
        showNavigation:false, showCopyright:false, pan:{enabled:false}, zoom:{enabled:false}
      });
      const P = board.create('point',[.5,.5],{name:'P',fillColor:colors.sum,strokeColor:colors.sum,...draggable});
      const Q = board.create('point',[3,2],{name:'Q',fillColor:colors.a,strokeColor:colors.a,...draggable});
      const R = board.create('point',[5.5,4],{name:'R',fillColor:colors.b,strokeColor:colors.b,...draggable});
      board.create('arrow',[P,Q],{strokeColor:colors.a,strokeWidth:5,...fixed});
      board.create('arrow',[Q,R],{strokeColor:colors.b,strokeWidth:5,...fixed});
      board.create('arrow',[P,R],{strokeColor:colors.sum,strokeWidth:4,dash:2,...fixed});
      board.create('text',[()=> (P.X()+Q.X())/2,()=> (P.Y()+Q.Y())/2+.35,'a = [PQ]'],{color:colors.a,fontSize:18,...fixed});
      board.create('text',[()=> (Q.X()+R.X())/2,()=> (Q.Y()+R.Y())/2+.35,'b = [QR]'],{color:colors.b,fontSize:18,...fixed});
      board.create('text',[()=> (P.X()+R.X())/2,()=> (P.Y()+R.Y())/2-.45,'a + b = [PR]'],{color:colors.sum,fontSize:18,...fixed});
      const update = () => {
        if (readout) readout.textContent = `a = ${pair(Q.X()-P.X(),Q.Y()-P.Y())}; b = ${pair(R.X()-Q.X(),R.Y()-Q.Y())}; a + b = ${pair(R.X()-P.X(),R.Y()-P.Y())}`;
      };
      P.on('drag',update); Q.on('drag',update); R.on('drag',update); update(); fitBoard(board);
    });
  }

  function initSubtraction(root) {
    root.querySelectorAll('[data-vector-subtraction]').forEach(host => {
      if (host.dataset.initialized || !window.JXG) return;
      host.dataset.initialized = 'true';
      const panel = host.closest('[data-fullscreen-panel]');
      const buttons = [...panel.querySelectorAll('[data-subtraction-step]')];
      const readout = panel.querySelector('[data-vector-subtraction-readout]');
      const board = JXG.JSXGraph.initBoard(host.id,{boundingbox:[-3,6,8,-5],axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
      const O = board.create('point',[0,0],{name:'O',size:3,fillColor:colors.sum,strokeColor:colors.sum,...fixed});
      const A = board.create('point',[4.5,2],{name:'A',fillColor:colors.a,strokeColor:colors.a,...draggable});
      const B = board.create('point',[2,3.5],{name:'B',fillColor:colors.b,strokeColor:colors.b,...draggable});
      const negBPoint = board.create('point',[()=>-B.X(),()=>-B.Y()],{name:'−B',visible:false,fillColor:colors.opposite,strokeColor:colors.opposite,...fixed});
      const D = board.create('point',[()=>A.X()-B.X(),()=>A.Y()-B.Y()],{name:'D',visible:false,fillColor:colors.sum,strokeColor:colors.sum,...fixed});
      const a = board.create('arrow',[O,A],{strokeColor:colors.a,strokeWidth:5,...fixed});
      const b = board.create('arrow',[O,B],{strokeColor:colors.b,strokeWidth:5,...fixed});
      const negB = board.create('arrow',[O,negBPoint],{strokeColor:colors.opposite,strokeWidth:5,visible:false,...fixed});
      const negBAtA = board.create('arrow',[A,D],{strokeColor:colors.opposite,strokeWidth:5,visible:false,...fixed});
      const difference = board.create('arrow',[O,D],{strokeColor:colors.sum,strokeWidth:5,visible:false,...fixed});
      const check = board.create('arrow',[D,A],{strokeColor:colors.b,strokeWidth:4,dash:2,visible:false,...fixed});
      const controlled = [negBPoint,D,negB,negBAtA,difference,check];
      let step = 'opposite';
      const setVisible = (object,value) => object.setAttribute({visible:value});
      const update = () => {
        const ax=A.X(), ay=A.Y(), bx=B.X(), by=B.Y();
        readout.textContent = step === 'opposite'
          ? `b = ${pair(bx,by)}; −b = ${pair(-bx,-by)}; b + (−b) = ${pair(0,0)}`
          : step === 'add'
            ? `a + (−b) = ${pair(ax,ay)} + ${pair(-bx,-by)} = ${pair(ax-bx,ay-by)}`
            : `(a − b) + b = ${pair(ax-bx,ay-by)} + ${pair(bx,by)} = ${pair(ax,ay)} = a`;
      };
      const select = next => {
        step = next; controlled.forEach(object=>setVisible(object,false));
        if (step==='opposite') [negBPoint,negB].forEach(object=>setVisible(object,true));
        if (step==='add') [D,negBAtA,difference].forEach(object=>setVisible(object,true));
        if (step==='check') [D,difference,check].forEach(object=>setVisible(object,true));
        buttons.forEach(button=>button.classList.toggle('is-active',button.dataset.subtractionStep===step));
        update(); board.fullUpdate();
      };
      buttons.forEach(button=>button.addEventListener('click',()=>select(button.dataset.subtractionStep)));
      A.on('drag',update); B.on('drag',update); select('opposite'); fitBoard(board);
    });
  }

  const initialize = root => { initChain(root); initSubtraction(root); };
  if (window.MathematicalStories) window.MathematicalStories.register(initialize);
  else document.addEventListener('DOMContentLoaded',()=>initialize(document));
})();
