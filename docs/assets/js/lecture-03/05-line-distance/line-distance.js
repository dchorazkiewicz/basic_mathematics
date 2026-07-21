(() => {
  const host=document.querySelector('[data-line-distance]'); if(!host||!window.JXG)return;
  const VIEW=[-5,6,7,-5];
  const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:VIEW,axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
  const P0=board.create('point',[-1,0],{name:'P₀',size:5,fillColor:'#3f735f',strokeColor:'#3f735f',snapToGrid:true,snapSizeX:.5,snapSizeY:.5});
  const D=board.create('point',[3,2],{name:'P₀+v',size:5,fillColor:'#2f6f9f',strokeColor:'#2f6f9f',snapToGrid:true,snapSizeX:.5,snapSizeY:.5});
  const P=board.create('point',[2,4],{name:'P',size:5,fillColor:'#b1782b',strokeColor:'#b1782b',snapToGrid:true,snapSizeX:.5,snapSizeY:.5});
  board.create('line',[P0,D],{strokeColor:'#17324d',strokeWidth:4,fixed:true,highlight:false});
  const Q=board.create('point',[()=>{const vx=D.X()-P0.X(),vy=D.Y()-P0.Y(),den=vx*vx+vy*vy||1,t=((P.X()-P0.X())*vx+(P.Y()-P0.Y())*vy)/den;return P0.X()+t*vx;},()=>{const vx=D.X()-P0.X(),vy=D.Y()-P0.Y(),den=vx*vx+vy*vy||1,t=((P.X()-P0.X())*vx+(P.Y()-P0.Y())*vy)/den;return P0.Y()+t*vy;}],{name:'Q',size:5,fillColor:'#7a3f73',strokeColor:'#7a3f73',fixed:true,highlight:false});
  board.create('segment',[P0,P],{strokeColor:'#a9b2ba',dash:2,strokeWidth:2,fixed:true,highlight:false});
  board.create('segment',[P0,Q],{strokeColor:'#2f6f9f',strokeWidth:4,fixed:true,highlight:false});
  board.create('segment',[Q,P],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false});
  const foot=document.querySelector('[data-foot-readout]'); const dist=document.querySelector('[data-distance-readout]');
  function fmt(x){return Number(x.toFixed(2)).toString();}
  function update(){foot.textContent=`Q = (${fmt(Q.X())}, ${fmt(Q.Y())})`;dist.textContent=`d(P,L) = ${fmt(Math.hypot(P.X()-Q.X(),P.Y()-Q.Y()))}`;}
  board.on('update',update); update();
  window.LectureJSX?.keepBoardFitted?.({board,host,boundingBox:VIEW});
})();