(() => {
  const initializers = new Set();

  window.MathematicalStories = {
    register(initializer) {
      initializers.add(initializer);
      initializer(document);
    },
    initialize(root = document) {
      initializers.forEach(initializer => initializer(root));
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetClear?.([root]);
        window.MathJax.typesetPromise([root]).catch(console.error);
      }
    }
  };

  function setupFullscreen(root) {
    root.querySelectorAll('[data-fullscreen-panel]').forEach(panel => {
      if (panel.dataset.fullscreenReady) return;
      panel.dataset.fullscreenReady = 'true';
      const button = panel.querySelector('[data-fullscreen]');
      if (!button) return;
      button.addEventListener('click', async () => {
        if (document.fullscreenElement === panel) await document.exitFullscreen();
        else await panel.requestFullscreen();
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  window.MathematicalStories.register(setupFullscreen);

  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => window.MathematicalStories.initialize(document));
  } else {
    document.addEventListener('DOMContentLoaded', () => window.MathematicalStories.initialize(document));
  }
})();
