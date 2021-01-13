var switchValue = 0;
function scrollOnOff() {
  if(switchValue == 0) {
    switchValue = 1;
    document.getElementById('navBackCover').style.display = "block";
    setTimeout(function() { 
      document.getElementById('navBackCover').style.opacity = "1";
    }, 100);
  } else {
    switchValue = 0;
    document.getElementById('navBackCover').style.opacity = "0";
    setTimeout(function() { 
      document.getElementById('navBackCover').style.display = "none";
    }, 1000);
    
  }
}

function hideNavByCover() {
  switchValue = 0;
  document.getElementById('navBackCover').style.opacity = "0";
  setTimeout(function() { 
    document.getElementById('navBackCover').style.display = "none";
  }, 1000);

  menuBtn.classList.remove('open');
  menuOpen = false;
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (window.innerWidth < 801) {
    if(switchValue == 0){
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-66px";
      }
      prevScrollpos = currentScrollPos;
    }
  } else {
      var menubar = document.getElementById("navbar");
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        menubar.style.display = "block";
      } else {
        menubar.style.display = "none";
      }
    }
};