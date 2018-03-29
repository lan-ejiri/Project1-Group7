$(document).ready(function(){


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDB7TGHzA9LfmcKOcrYnvZ6aLxBNf9JJnw",
  authDomain: "project-1-group-7.firebaseapp.com",
  databaseURL: "https://project-1-group-7.firebaseio.com",
  projectId: "project-1-group-7",
  storageBucket: "project-1-group-7.appspot.com",
  messagingSenderId: "138612540434"
};
firebase.initializeApp(config);

database = firebase.database();

function logIn() {
  var userEmail = $("#user").val().trim();
  var userPass = $('#pass').val.trim();

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    alert("Error: " + errorMessage);

    // ...
  });

}; //closing logIn function

//logs out
function logOut() {
  firebase.auth().signOut();
}; //closing logout function

//firebase authentication
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    $("#user-div").attr('display', 'block');
    $("#login-div").attr('display', 'none');

  } else {
    // No user is signed in.
    $("#user-div").attr('display', 'none');
    $("#login-div").attr('display', 'block');

  }
});


}); //closing doument ready function 
