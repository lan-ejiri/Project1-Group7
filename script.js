function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $("#not-gmail-login").css("display", "none");
  $("#post-login").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(profile.getEmail());
  //window.location = 'asdasdasd.html';
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("You have been successfully signed out");

    $(".g-signin2").css("display", "block");
    $("#not-gmail-login").css("display", "block");
    $("#post-login").css("display", "none");
  });
}
