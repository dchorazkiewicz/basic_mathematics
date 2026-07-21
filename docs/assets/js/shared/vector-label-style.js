(() => {
  window.LectureJSX = window.LectureJSX || {};

  window.LectureJSX.vectorLabelStyle = (options = {}) => ({
    display: 'html',
    cssClass: 'vector-label-chip',
    anchorX: 'middle',
    anchorY: 'middle',
    fixed: true,
    highlight: false,
    ...options
  });
})();
