function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $("#not-gmail-login").css("display", "none");
  $("#post-login").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(profile.getEmail());
  $("#login-nav").css("display", "none");
  $("#signup-nav").css("display", "none");
  window.location.replace = "https://lan-ejiri.github.io/Project1-Group7";
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
