(() => {
  const host=document.querySelector('[data-plane-relations]'); if(!host||!window.JXG)return;
  const panel=host.closest('[data-fullscreen-panel]'); const buttons=[...panel.querySelectorAll('[data-plane-mode]')];
  const VIEW=[-6,5,7,-5];
  const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:VIEW,axis:false,grid:false,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
  const objects=[]; const add=(o,key)=>{o._key=key;objects.push(o);return o;};
  const poly=(pts,key,color)=>add(board.create('polygon',pts,{fillColor:color,fillOpacity:.11,borders:{strokeColor:color,strokeWidth:2},vertices:{visible:false},fixed:true,highlight:false}),key);
  poly([[-4,-1],[3,-1],[5,1.5],[-2,1.5]],'p1','#2f6f9f');
  poly([[-2,-3],[4,-.5],[3,3],[-3,.5]],'intersect','#b1782b');
  poly([[-4,1],[3,1],[5,3.5],[-2,3.5]],'parallel','#b1782b');
  poly([[-.6,-3],[1.2,-2.2],[1.2,3],[-.6,2.2]],'perpendicular','#b1782b');
  add(board.create('arrow',[[0,0],[0,3.2]],{strokeColor:'#2f6f9f',strokeWidth:4,fixed:true,highlight:false}),'n1');
  add(board.create('arrow',[[0,0],[-2.1,2.2]],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false}),'intersect');
  add(board.create('arrow',[[0,1.8],[0,4.2]],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false}),'parallel');
  add(board.create('arrow',[[0,0],[3.2,0]],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false}),'perpendicular');
  add(board.create('line',[[-5,.2],[5,.2]],{strokeColor:'#7a3f73',strokeWidth:5,fixed:true,highlight:false}),'intersect');
  function setMode(mode){objects.forEach(o=>o.setAttribute({visible:o._key==='p1'||o._key==='n1'||o._key===mode}));buttons.forEach(b=>b.classList.toggle('is-active',b.dataset.planeMode===mode));board.fullUpdate();}
  buttons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.planeMode))); setMode('intersect');
  window.LectureJSX?.keepBoardFitted?.({board,host,boundingBox:VIEW});
})();