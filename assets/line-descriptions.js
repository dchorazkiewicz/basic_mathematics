(() => {
  const host=document.querySelector('[data-line-descriptions]'); if(!host||!window.JXG)return;
  const VIEW=[-6,6,7,-5];
  const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:VIEW,axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
  const P0=board.create('point',[1,1],{name:'P₀',size:5,fillColor:'#3f735f',strokeColor:'#3f735f',snapToGrid:true,snapSizeX:.5,snapSizeY:.5});
  const V=board.create('point',[4,3],{name:'P₀+v',size:5,fillColor:'#2f6f9f',strokeColor:'#2f6f9f',snapToGrid:true,snapSizeX:.5,snapSizeY:.5});
  const line=board.create('line',[P0,V],{strokeColor:'#17324d',strokeWidth:4,fixed:true,highlight:false});
  board.create('arrow',[P0,V],{strokeColor:'#2f6f9f',strokeWidth:4,fixed:true,highlight:false});
  const normalEnd=board.create('point',[()=>P0.X()-(V.Y()-P0.Y()),()=>P0.Y()+(V.X()-P0.X())],{visible:false,fixed:true});
  board.create('arrow',[P0,normalEnd],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false});
  const param=document.querySelector('[data-line-parametric]'); const normal=document.querySelector('[data-line-normal]'); const slope=document.querySelector('[data-line-slope]');
  function fmt(x){return Math.abs(x)<1e-9?'0':Number(x.toFixed(2)).toString();}
  function update(){const x0=P0.X(),y0=P0.Y(),u=V.X()-x0,v=V.Y()-y0,a=-v,b=u,c=a*x0+b*y0;param.textContent=`P = (${fmt(x0)}, ${fmt(y0)}) + t[${fmt(u)}, ${fmt(v)}]`;normal.textContent=`${fmt(a)}x + ${fmt(b)}y = ${fmt(c)}`;slope.textContent=Math.abs(u)<1e-8?`vertical line: x = ${fmt(x0)}`:`m = ${fmt(v/u)}`;}
  board.on('update',update); update();
  window.LectureJSX?.keepBoardFitted?.({board,host,boundingBox:VIEW});
})();