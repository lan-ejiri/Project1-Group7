function onSignIn(googleUser) {
  window.location.replace("login.html");
  return 0;
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    $("#login-nav").css("display", "block");
    $("#signup-nav").css("display", "block");
    alert("You have been successfully signed out");
    $(".g-signin2").css("display", "block");
    $("#not-gmail-login").css("display", "block");
    $("#post-login").css("display", "none");
  });
}
