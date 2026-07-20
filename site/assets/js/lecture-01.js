(() => {
  const sectionFiles = [
    'sections/01-before-coordinates.html',
    'sections/02-cartesian-construction.html',
    'sections/03-coordinates.html',
    'sections/04-distance.html',
    'sections/05-graphs.html'
  ];

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.body.appendChild(script);
  });

  async function loadLecture() {
    const target = document.querySelector('[data-lecture-sections]');
    if (!target) return;

    const fragments = await Promise.all(sectionFiles.map(async (path) => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Unable to load ${path}`);
      return response.text();
    }));

    target.innerHTML = fragments.join('\n');

    if (window.MathJax?.typesetPromise) {
      await window.MathJax.typesetPromise([target]);
    }

    await loadScript('../assets/js/fullscreen.js');
    await loadScript('../assets/cartesian-construction.js');
    await loadScript('../assets/distance-geometry.js');
    await loadScript('../assets/equation-families.js');
  }

  loadLecture().catch((error) => {
    console.error(error);
    const target = document.querySelector('[data-lecture-sections]');
    if (target) target.innerHTML = '<p class="lecture-load-error">The lecture content could not be loaded.</p>';
  });
})();