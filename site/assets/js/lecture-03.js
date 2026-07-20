(() => {
  const sections = [
    'sections/01-line-construction.html',
    'sections/02-cartesian-consequences.html',
    'sections/03-line-tests-distance.html',
    'sections/04-plane-generation.html',
    'sections/05-plane-normal.html',
    'sections/06-three-points.html',
    'sections/07-plane-relations.html',
    'sections/08-exercises.html'
  ];
  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script'); script.src = src;
    script.onload = resolve; script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.body.appendChild(script);
  });
  async function loadLecture() {
    const target = document.querySelector('[data-lecture-sections]');
    const fragments = await Promise.all(sections.map(async path => {
      const response = await fetch(path); if (!response.ok) throw new Error(`Unable to load ${path}`); return response.text();
    }));
    target.innerHTML = fragments.join('\n');
    if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise([target]);
    await loadScript('../assets/js/fullscreen.js');
    await loadScript('../assets/js/jsx-board-layout.js');
    await loadScript('../assets/line-descriptions.js');
    await loadScript('../assets/line-distance.js');
    await loadScript('../assets/plane-generation.js');
    await loadScript('../assets/plane-relations.js');
  }
  loadLecture().catch(error => { console.error(error); const target = document.querySelector('[data-lecture-sections]'); if (target) target.innerHTML='<p class="lecture-load-error">The lecture content could not be loaded.</p>'; });
})();