window.onload = function() {
  document.getElementById('windowLoadContainer').style.opacity = "0";
  setTimeout(function() { 
    document.getElementById('windowLoadContainer').style.display = "none";
  }, 2000);
};
