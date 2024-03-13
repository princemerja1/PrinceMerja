document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
  
    // Hide the loader and display the content when the page has fully loaded
    window.addEventListener('load', function () {
      loader.style.display = 'none';
      content.style.display = 'block';
    });
  });
  