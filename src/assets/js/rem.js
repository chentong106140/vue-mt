(function(d, w) {
  const doc = d.documentElement;
  var resizeEvt = 'orientationchange' in w ? 'orientationchange' : 'resize';
  function rem() {
   // const width = Math.min(doc.getBoundingClientRect().width, 768);
    const width = doc.getBoundingClientRect().width;
    doc.style.fontSize = width / 7.5 + 'px';
  }
  if(!w.addEventListener) return;
  w.addEventListener(resizeEvt, rem, false);
  d.addEventListener('DOMContentLoaded', rem, false);
})(document, window);
