(() => {
  const fixed = { fixed:true, highlight:false };
  const draggable = { size:5, snapToGrid:true, snapSizeX:.5, snapSizeY:.5 };
  const f = value => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };
  const pair = (x,y) => `(${f(x)}, ${f(y)})`;
  const fit = board => {
    const resize = () => board.resizeContainer(board.containerObj.clientWidth, board.containerObj.clientHeight, true);
    resize(); window.addEventListener('resize', resize, { passive:true });
  };

  function initArithmetic(root) {
    root.querySelectorAll('[data-point-arithmetic]').forEach(host => {
      if (host.dataset.initialized || !window.JXG) return;
      host.dataset.initialized = 'true';
      const panel = host.closest('[data-fullscreen-panel]');
      const buttons = [...panel.querySelectorAll('[data-point-operation]')];
      const readout = panel.querySelector('[data-point-operation-readout]');
      const lambdaControl = panel.querySelector('[data-point-lambda-control]');
      const slider = panel.querySelector('[data-point-lambda-slider]');
      const output = panel.querySelector('[data-point-lambda-output]');
      const board = JXG.JSXGraph.initBoard(host.id,{boundingbox:[-7,7,7,-7],axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
      const O = board.create('point',[0,0],{name:'O',size:4,fillColor:'#b1782b',strokeColor:'#b1782b',...fixed});
      const P = board.create('point',[2,1],{name:'P',fillColor:'#2f6f9f',strokeColor:'#2f6f9f',...draggable});
      const Q = board.create('point',[-1,3],{name:'Q',fillColor:'#7a3f73',strokeColor:'#7a3f73',...draggable});
      const sum = board.create('point',[()=>P.X()+Q.X(),()=>P.Y()+Q.Y()],{name:'P+Q',fillColor:'#3f7f68',strokeColor:'#3f7f68',...fixed});
      const opposite = board.create('point',[()=>-P.X(),()=>-P.Y()],{name:'−P',fillColor:'#b24c3a',strokeColor:'#b24c3a',...fixed});
      const difference = board.create('point',[()=>Q.X()-P.X(),()=>Q.Y()-P.Y()],{name:'Q−P',fillColor:'#17324d',strokeColor:'#17324d',...fixed});
      const scaled = board.create('point',[()=>Number(slider.value)*P.X(),()=>Number(slider.value)*P.Y()],{name:'λP',fillColor:'#b1782b',strokeColor:'#b1782b',...fixed});
      const results = [sum,opposite,difference,scaled];
      let mode = 'sum';
      const update = () => {
        const px=P.X(), py=P.Y(), qx=Q.X(), qy=Q.Y(), lambda=Number(slider.value);
        output.textContent=f(lambda);
        readout.textContent = mode==='sum' ? `P ${pair(px,py)} + Q ${pair(qx,qy)} = ${pair(px+qx,py+qy)}`
          : mode==='opposite' ? `P ${pair(px,py)}; −P ${pair(-px,-py)}`
          : mode==='difference' ? `Q ${pair(qx,qy)} − P ${pair(px,py)} = ${pair(qx-px,qy-py)}`
          : `λP = ${f(lambda)} · ${pair(px,py)} = ${pair(lambda*px,lambda*py)}`;
      };
      const select = next => {
        mode=next; results.forEach(object=>object.setAttribute({visible:false}));
        Q.setAttribute({visible:mode==='sum'||mode==='difference'});
        ({sum,opposite,difference,scalar:scaled}[mode]).setAttribute({visible:true});
        lambdaControl.hidden=mode!=='scalar';
        buttons.forEach(button=>button.classList.toggle('is-active',button.dataset.pointOperation===mode));
        update(); board.fullUpdate();
      };
      buttons.forEach(button=>button.addEventListener('click',()=>select(button.dataset.pointOperation)));
      slider.addEventListener('input',()=>{update();board.update();}); P.on('drag',update); Q.on('drag',update);
      select('sum'); fit(board);
    });
  }

  function initEquivalence(root) {
    root.querySelectorAll('[data-vector-equivalence]').forEach(host => {
      if (host.dataset.initialized || !window.JXG) return;
      host.dataset.initialized='true';
      const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:[-5.5,5.5,7.5,-4.5],axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
      const P=board.create('point',[-2.5,-1.5],{name:'P',fillColor:'#3f735f',strokeColor:'#3f735f',...draggable});
      const P2=board.create('point',[-.5,2],{name:"P'",fillColor:'#b1782b',strokeColor:'#b1782b',...draggable});
      const Q=board.create('point',[()=>P.X()+3,()=>P.Y()+2],{name:'Q',fillColor:'#3f735f',strokeColor:'#3f735f',...fixed});
      const Q2=board.create('point',[()=>P2.X()+3,()=>P2.Y()+2],{name:"Q'",fillColor:'#b1782b',strokeColor:'#b1782b',...fixed});
      board.create('arrow',[P,Q],{strokeColor:'#2f6f9f',strokeWidth:4,...fixed});
      board.create('arrow',[P2,Q2],{strokeColor:'#b1782b',strokeWidth:4,...fixed});
      board.create('segment',[P,P2],{strokeColor:'#a9b2ba',dash:2,...fixed});
      board.create('segment',[Q,Q2],{strokeColor:'#a9b2ba',dash:2,...fixed});
      board.create('segment',[P,Q2],{strokeColor:'#c5ccd2',dash:2,...fixed});
      board.create('segment',[Q,P2],{strokeColor:'#c5ccd2',dash:2,...fixed});
      fit(board);
    });
  }

  const initialize = root => { initArithmetic(root); initEquivalence(root); };
  if (window.MathematicalStories) window.MathematicalStories.register(initialize);
  else document.addEventListener('DOMContentLoaded',()=>initialize(document));
})();
