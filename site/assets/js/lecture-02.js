(() => {
  const sectionFiles = [
    'sections/01-from-points.html',
    'sections/02-addition.html',
    'sections/03-scaling.html',
    'sections/04-length-direction.html',
    'sections/05-tests.html',
    'sections/06-angle.html',
    'sections/07-projection.html',
    'sections/08-basis.html',
    'sections/09-exercises.html'
  ];

  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.body.appendChild(script);
  });

  async function loadLecture() {
    const target = document.querySelector('[data-lecture-sections]');
    if (!target) return;

    const fragments = await Promise.all(sectionFiles.map(async path => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Unable to load ${path}`);
      return response.text();
    }));

    target.innerHTML = fragments.join('\n');
    if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise([target]);

    await loadScript('../assets/js/fullscreen.js');
    await loadScript('../assets/js/jsx-board-layout.js');
    await loadScript('../assets/point-arithmetic.js?v=20260720-2');
    await loadScript('../assets/vector-equivalence.js');
    await loadScript('../assets/vector-addition.js?v=20260720-3');
    await loadScript('../assets/vector-scaling.js');
    await loadScript('../assets/vector-direction.js');
    await loadScript('../assets/vector-tests.js');
    await loadScript('../assets/vector-projection.js');
    await loadScript('../assets/vector-basis.js');
  }

  loadLecture().catch(error => {
    console.error(error);
    const target = document.querySelector('[data-lecture-sections]');
    if (target) target.innerHTML = '<p class="lecture-load-error">The lecture content could not be loaded.</p>';
  });
})();