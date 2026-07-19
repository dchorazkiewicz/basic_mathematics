(() => {
  const NS='http://www.w3.org/2000/svg';
  const E=(n,a={},t='')=>{const e=document.createElementNS(NS,n);Object.entries(a).forEach(([k,v])=>e.setAttribute(k,v));if(t)e.textContent=t;return e};
  const svg=()=>{const s=E('svg',{viewBox:'0 0 700 450',role:'img','aria-hidden':'true'});s.classList.add('chapter-figure-svg');return s};
  const line=(s,x1,y1,x2,y2,c='main',dash='')=>s.append(E('line',{x1,y1,x2,y2,class:c,'stroke-dasharray':dash}));
  const dot=(s,x,y,l,dx=10,dy=-10)=>{s.append(E('circle',{cx:x,cy:y,r:4,class:'dot'}));s.append(E('text',{x:x+dx,y:y+dy,class:'label'},l));};
  const box=s=>{const d=document.createElement('div');d.className='chapter-figure';d.append(s);return d};
  function onLine(){const s=svg();line(s,70,230,630,230,'main');s.append(E('circle',{cx:350,cy:230,r:120,class:'construction'}));s.append(E('circle',{cx:230,cy:230,r:195,class:'construction c1'}));s.append(E('circle',{cx:470,cy:230,r:195,class:'construction c1'}));line(s,350,40,350,410,'main');[['A',230,230],['P',350,230],['B',470,230],['Q',350,80],['R',350,380]].forEach(([l,x,y])=>dot(s,x,y,l));s.append(E('path',{d:'M365 230 v-18 h-15',class:'helper',fill:'none'}));return s}
  function outside(){const s=svg();line(s,70,260,630,260,'main');s.append(E('circle',{cx:350,cy:100,r:230,class:'construction'}));s.append(E('circle',{cx:220,cy:260,r:210,class:'construction c1'}));s.append(E('circle',{cx:480,cy:260,r:210,class:'construction c1'}));line(s,350,35,350,420,'main');[['P',350,100],['Q',350,405],['A',220,260],['B',480,260]].forEach(([l,x,y])=>dot(s,x,y,l));s.append(E('path',{d:'M365 260 v-18 h-15',class:'helper',fill:'none'}));return s}
  document.querySelectorAll('h3').forEach(h=>{
    const t=h.textContent.trim();
    if(t==='A perpendicular through a point on a line') h.parentNode.insertBefore(box(onLine()),h.nextSibling);
    if(t==='A perpendicular through a point outside a line') h.parentNode.insertBefore(box(outside()),h.nextSibling);
  });
})();
