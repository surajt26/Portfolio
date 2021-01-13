var email;
var alertText;
function validationForm() {
  email = document.getElementById("email").value;
  alertText = document.getElementById("validationText");
  var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email == "") {
    alertText.innerHTML = "no email address, no submission";
    alertText.style.color = "#8080ff";
  }
  else if(email.match(pattern) && email != "") {
    alertText.innerHTML = "Wait for submission...";
    alertText.style.color = "#8080ff";
    document.getElementById("email").value = "";
    setTimeout(function() {
      alertText.innerHTML = "Your email address is submited.";
    },2000);
    setTimeout(function() {
      alertText.innerHTML = "";
    },4000);
  } else {
      alertText.innerHTML = "Please enter a valid email address.";
      alertText.style.color = "red";
    }
}

function emptyCheck() {
  alertText.innerHTML = "";
}