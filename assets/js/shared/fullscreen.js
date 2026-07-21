(() => {
  document.querySelectorAll('[data-fullscreen-panel]').forEach((panel) => {
    const button = panel.querySelector('[data-fullscreen]');
    if (!button) return;

    button.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await panel.requestFullscreen();
      } catch (error) {
        console.error('Fullscreen unavailable', error);
      }
    });

    panel.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'f') button.click();
    });
  });
})();
