(() => {
  window.LectureJSX = window.LectureJSX || {};

  const boxedTextStyle = (options = {}) => ({
    display: 'html',
    cssClass: 'vector-label-chip',
    anchorX: 'middle',
    anchorY: 'middle',
    fixed: true,
    highlight: false,
    ...options
  });

  window.LectureJSX.vectorLabelStyle = boxedTextStyle;
  window.LectureJSX.diagramLabelStyle = boxedTextStyle;
  window.LectureJSX.pointLabelStyle = (options = {}) => ({
    display: 'html',
    cssClass: 'vector-label-chip',
    ...options
  });
})();
