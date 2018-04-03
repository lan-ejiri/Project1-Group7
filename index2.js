function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#welcome").text(profile.getEmail());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    window.location.href = "index.html";
  });
}
