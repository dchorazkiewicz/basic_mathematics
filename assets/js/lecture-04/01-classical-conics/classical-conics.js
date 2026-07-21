(() => {
  const host=document.querySelector('[data-classical-conics]'); if(!host||!window.JXG)return;
  const panel=host.closest('[data-fullscreen-panel]'); const buttons=[...panel.querySelectorAll('[data-classical-mode]')];
  const VIEW=[-6,5,6,-5]; const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:VIEW,axis:true,grid:true,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
  const fixed={fixed:true,highlight:false}; const objects=[]; const add=o=>(objects.push(o),o);
  const curve=(fx,fy,a,b)=>add(board.create('curve',[fx,fy,a,b],{strokeColor:'#2f6f9f',strokeWidth:4,...fixed}));
  const circle=curve(t=>3*Math.cos(t),t=>3*Math.sin(t),0,2*Math.PI);
  const ellipse=curve(t=>4*Math.cos(t),t=>2.3*Math.sin(t),0,2*Math.PI);
  const parabola=curve(t=>0.5*t*t-1,t=>t,-3.5,3.5);
  const hypR1=curve(t=>2/Math.cos(t),t=>1.5*Math.tan(t),-1.1,1.1);
  const hypR2=curve(t=>-2/Math.cos(t),t=>-1.5*Math.tan(t),-1.1,1.1);
  const asym1=add(board.create('line',[[-4,-3],[4,3]],{strokeColor:'#a9b2ba',dash:2,strokeWidth:2,...fixed}));
  const asym2=add(board.create('line',[[-4,3],[4,-3]],{strokeColor:'#a9b2ba',dash:2,strokeWidth:2,...fixed}));
  function setMode(mode){objects.forEach(o=>o.setAttribute({visible:false})); if(mode==='circle')circle.setAttribute({visible:true}); if(mode==='ellipse')ellipse.setAttribute({visible:true}); if(mode==='parabola')parabola.setAttribute({visible:true}); if(mode==='hyperbola')[hypR1,hypR2,asym1,asym2].forEach(o=>o.setAttribute({visible:true})); buttons.forEach(b=>b.classList.toggle('is-active',b.dataset.classicalMode===mode)); board.fullUpdate();}
  buttons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.classicalMode))); setMode('circle'); window.LectureJSX?.keepBoardFitted?.({board,host,boundingBox:VIEW});
})();