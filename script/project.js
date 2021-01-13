function allDisplay() {
  document.getElementById("all").style.color = "#8080ff";
  document.getElementById("development").style.color = "#000000";
  document.getElementById("webDesign").style.color = "#000000";

  if(window.innerWidth > 670) {
    document.getElementById("developmentBoxOne").style.display = "block";
    document.getElementById("developmentBoxTwo").style.display = "block";
    document.getElementById("developmentBoxThree").style.display = "block";
    document.getElementById("developmentBoxFore").style.display = "block";

    document.getElementById("designBoxOne").style.display = "block";
    document.getElementById("designBoxTwo").style.display = "block";

    document.getElementById("projectLoadMore").style.display = "none";
  } else {
    document.getElementById("developmentBoxOne").style.display = "block";
    document.getElementById("developmentBoxTwo").style.display = "block";
    document.getElementById("developmentBoxThree").style.display = "block";
    document.getElementById("developmentBoxFore").style.display = "none";

    document.getElementById("designBoxOne").style.display = "block";
    document.getElementById("designBoxTwo").style.display = "none";

    document.getElementById("projectLoadMore").style.display = "block";
  }
}

function developmentDisplay() {
  document.getElementById("all").style.color = "#000000";
  document.getElementById("development").style.color = "#8080ff";
  document.getElementById("webDesign").style.color = "#000000";
    
  document.getElementById("developmentBoxOne").style.display = "block";
  document.getElementById("developmentBoxTwo").style.display = "block";
  document.getElementById("developmentBoxThree").style.display = "block";
  document.getElementById("developmentBoxFore").style.display = "block";

  document.getElementById("designBoxOne").style.display = "none";
  document.getElementById("designBoxTwo").style.display = "none";

  document.getElementById("projectLoadMore").style.display = "none";
}

function designDisplay() {
  document.getElementById("all").style.color = "#000000";
  document.getElementById("development").style.color = "#000000";
  document.getElementById("webDesign").style.color = "#8080ff";

  document.getElementById("designBoxOne").style.display = "block";
  document.getElementById("designBoxTwo").style.display = "block";

  document.getElementById("developmentBoxOne").style.display = "none";
  document.getElementById("developmentBoxTwo").style.display = "none";
  document.getElementById("developmentBoxThree").style.display = "none";
  document.getElementById("developmentBoxFore").style.display = "none";

  document.getElementById("projectLoadMore").style.display = "none";
}

function loadMore() {
  document.getElementById("developmentBoxFore").style.display = "block";
  document.getElementById("designBoxTwo").style.display = "block";
  document.getElementById("projectLoadMore").style.display = "none";
}