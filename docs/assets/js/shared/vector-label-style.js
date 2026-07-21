(() => {
  window.LectureJSX = window.LectureJSX || {};

  const LABEL_CLASS = 'vector-label-chip';

  const boxedTextStyle = (options = {}) => ({
    display: 'html',
    cssClass: LABEL_CLASS,
    anchorX: 'middle',
    anchorY: 'middle',
    fixed: true,
    highlight: false,
    ...options
  });

  const pointLabelStyle = (options = {}) => ({
    display: 'html',
    cssClass: LABEL_CLASS,
    highlightCssClass: LABEL_CLASS,
    ...options
  });

  window.LectureJSX.vectorLabelStyle = boxedTextStyle;
  window.LectureJSX.diagramLabelStyle = boxedTextStyle;
  window.LectureJSX.pointLabelStyle = pointLabelStyle;

  // Point labels are created internally by JSXGraph. Set their shared
  // defaults before any lecture board is initialized so every named point
  // receives the same semi-transparent label box, even when a figure only
  // customizes its offset or font size.
  if (window.JXG?.Options?.point) {
    window.JXG.Options.point.label = {
      ...(window.JXG.Options.point.label || {}),
      ...pointLabelStyle()
    };
  }
})();
