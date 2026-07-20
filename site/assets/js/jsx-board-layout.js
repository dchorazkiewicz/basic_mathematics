(() => {
  const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

  window.LectureJSX = window.LectureJSX || {};

  window.LectureJSX.keepBoardFitted = ({ board, host, boundingBox }) => {
    const stage = host.closest('.jsx-stage') || host.parentElement;
    let scheduled = false;
    let resizing = false;

    const fit = async () => {
      if (scheduled || resizing) return;
      scheduled = true;
      await nextFrame();
      await nextFrame();
      scheduled = false;

      if (!stage || !host.isConnected) return;
      resizing = true;

      /* JSXGraph writes pixel dimensions inline. Remove stale fullscreen
         dimensions before measuring the CSS-controlled stage. */
      host.style.removeProperty('width');
      host.style.removeProperty('height');

      const rect = stage.getBoundingClientRect();
      const styles = getComputedStyle(stage);
      const width = Math.max(1, rect.width - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight));
      const height = Math.max(1, rect.height - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom));

      board.resizeContainer(Math.round(width), Math.round(height));
      board.setBoundingBox(typeof boundingBox === 'function' ? boundingBox() : boundingBox, true);
      board.fullUpdate();
      resizing = false;
    };

    const observer = new ResizeObserver(() => fit());
    observer.observe(stage);
    window.addEventListener('resize', fit);
    document.addEventListener('fullscreenchange', fit);

    fit();
    return fit;
  };
})();
