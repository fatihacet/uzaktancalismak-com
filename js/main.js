window.addEventListener('load', function() {
  var links = document.querySelectorAll('a');
  links.forEach(function(a) {
    if (a.getAttribute('href').indexOf('http') == 0) {
      a.setAttribute('target', '_blank');
    }
  });
}, false);
