document.addEventListener("DOMContentLoaded", function() {
    var h2Elements = document.querySelectorAll('.content h2');
    var svgIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 82.64 82.64"><path d="m81.06,42.78c-23.98,7.18-31.09,14.3-38.28,38.28-.43,1.45-2.49,1.45-2.92,0-7.18-23.98-14.3-31.09-38.28-38.28-1.45-.43-1.45-2.49,0-2.92,23.98-7.18,31.09-14.3,38.28-38.28.43-1.45,2.49-1.45,2.92,0,7.18,23.98,14.3,31.09,38.28,38.28,1.45.43,1.45,2.49,0,2.92Z"/></svg>';
  
    h2Elements.forEach(function(element) {
      var svgWrapper = document.createElement('span');    
      var svgElement = document.createElement('span');
      svgElement.innerHTML = svgIcon;
      svgElement.classList.add('inline-svg'); 
      svgWrapper.appendChild(svgElement);
      element.prepend(svgWrapper.firstChild);
    });
  });