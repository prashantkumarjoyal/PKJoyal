function myFunction() {
  var x = document.getElementById("show");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

 var attempt = 3;
  function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "prashantkumarjoyal@gmail.com" && password == "12345") {
  alert("Welcome to The PKJoyal.");
  window.location = "home.html";
  return true;
  }
  else {
  attempt--;
  alert("You have left " + attempt + " attempt;");
  if (attempt == 0) {
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
  return false;
  }
  }
  }