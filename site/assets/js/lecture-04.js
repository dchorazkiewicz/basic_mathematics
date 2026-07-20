(() => {
  const sections = [
    'sections/01-why-conics.html','sections/02-classical-conics.html','sections/03-polar-coordinates.html','sections/04-polar-graphs.html','sections/05-focus-directrix.html','sections/06-polar-family.html','sections/07-orientation.html','sections/08-exercises.html'
  ];
  const loadScript = src => new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error(`Unable to load ${src}`));document.body.appendChild(s);});
  async function loadLecture(){
    const target=document.querySelector('[data-lecture-sections]');
    const fragments=await Promise.all(sections.map(async path=>{const r=await fetch(path);if(!r.ok)throw new Error(`Unable to load ${path}`);return r.text();}));
    target.innerHTML=fragments.join('\n');
    if(window.MathJax?.typesetPromise) await window.MathJax.typesetPromise([target]);
    await loadScript('../assets/js/fullscreen.js');
    await loadScript('../assets/js/jsx-board-layout.js');
    await loadScript('../assets/classical-conics.js');
    await loadScript('../assets/polar-coordinate.js');
    await loadScript('../assets/polar-graph.js');
    await loadScript('../assets/polar-conic-family.js');
  }
  loadLecture().catch(error=>{console.error(error);const target=document.querySelector('[data-lecture-sections]');if(target)target.innerHTML='<p class="lecture-load-error">The lecture content could not be loaded.</p>';});
})();