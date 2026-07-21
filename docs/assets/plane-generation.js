(() => {
  const host=document.querySelector('[data-plane-generation]'); if(!host||!window.JXG)return;
  const panel=host.closest('[data-fullscreen-panel]');
  const sSlider=panel.querySelector('[data-plane-s-slider]'),tSlider=panel.querySelector('[data-plane-t-slider]');
  const sOut=panel.querySelector('[data-plane-s]'),tOut=panel.querySelector('[data-plane-t]');
  const VIEW=[-5,5,7,-5];
  const board=JXG.JSXGraph.initBoard(host.id,{boundingbox:VIEW,axis:false,grid:false,keepAspectRatio:true,showNavigation:false,showCopyright:false,pan:{enabled:false},zoom:{enabled:false}});
  const P0=[0,0],u=[3,.7],v=[1.4,2.3];
  const corner=(a,b)=>[P0[0]+a*u[0]+b*v[0],P0[1]+a*u[1]+b*v[1]];
  board.create('polygon',[corner(-1.4,-1.2),corner(1.4,-1.2),corner(1.4,1.2),corner(-1.4,1.2)],{fillColor:'#2f6f9f',fillOpacity:.09,borders:{strokeColor:'#2f6f9f',strokeWidth:2},vertices:{visible:false},fixed:true,highlight:false});
  const O=board.create('point',P0,{name:'P₀',size:5,fillColor:'#17324d',strokeColor:'#17324d',fixed:true,highlight:false});
  board.create('arrow',[O,corner(1,0)],{strokeColor:'#2f6f9f',strokeWidth:4,fixed:true,highlight:false});
  board.create('arrow',[O,corner(0,1)],{strokeColor:'#b1782b',strokeWidth:4,fixed:true,highlight:false});
  const P=board.create('point',[()=>corner(Number(sSlider.value),Number(tSlider.value))[0],()=>corner(Number(sSlider.value),Number(tSlider.value))[1]],{name:'P₀+s u+t v',size:5,fillColor:'#3f735f',strokeColor:'#3f735f',fixed:true,highlight:false});
  board.create('segment',[O,P],{strokeColor:'#3f735f',strokeWidth:4,fixed:true,highlight:false});
  function update(){sOut.value=sSlider.value;tOut.value=tSlider.value;board.fullUpdate();}
  sSlider.addEventListener('input',update);tSlider.addEventListener('input',update);update();
  window.LectureJSX?.keepBoardFitted?.({board,host,boundingBox:VIEW});
})();