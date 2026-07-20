(() => {
  const panels = document.querySelectorAll('[data-fullscreen-panel]');
  panels.forEach((panel) => {
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
  });

  document.querySelectorAll('[data-sequence]').forEach((sequence) => {
    const steps = [...sequence.querySelectorAll('[data-step]')];
    const previous = sequence.querySelector('[data-previous]');
    const next = sequence.querySelector('[data-next]');
    const play = sequence.querySelector('[data-play]');
    const reset = sequence.querySelector('[data-reset]');
    const status = sequence.querySelector('[data-status]');
    let current = 0;
    let timer = null;

    const render = () => {
      steps.forEach((step, index) => step.classList.toggle('visible', index <= current));
      if (status) status.textContent = `Step ${current + 1} of ${steps.length}`;
      if (previous) previous.disabled = current === 0;
      if (next) next.disabled = current === steps.length - 1;
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
      if (play) play.textContent = 'Play';
    };

    const advance = () => {
      if (current < steps.length - 1) {
        current += 1;
        render();
      } else {
        stop();
      }
    };

    previous?.addEventListener('click', () => { stop(); current = Math.max(0, current - 1); render(); });
    next?.addEventListener('click', () => { stop(); advance(); });
    reset?.addEventListener('click', () => { stop(); current = 0; render(); });
    play?.addEventListener('click', () => {
      if (timer) { stop(); return; }
      if (current === steps.length - 1) current = 0;
      render();
      play.textContent = 'Pause';
      timer = window.setInterval(advance, 1300);
    });

    sequence.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); stop(); advance(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); stop(); current = Math.max(0, current - 1); render(); }
      if (event.key.toLowerCase() === 'f') sequence.querySelector('[data-fullscreen]')?.click();
      if (event.key === ' ') { event.preventDefault(); play?.click(); }
    });

    render();
  });
})();
