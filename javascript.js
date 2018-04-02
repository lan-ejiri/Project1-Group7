$(document).ready(function () {
  //make sure to link the firebase script, jquery script, and this file script to wherever the log in page goes
  //make sure to change the <form> to a <div> or else you get an error
  //make sure to change username input to email
  //make sure to add a put stuff here div to see if its working
  //make sure to add a button with id signout
  //make sure the file is called index.html to test it with http-server .
  //make sure to disable cache int he console network thing
  
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
  
    var database = firebase.database();
  
  
    $("#log_in").click(function () {
  
      alert("submit clicked");
  
      var userEmail = $("#email1").val();
      var userPass = $('#password1').val();
  
  
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    });//ending submitbutton function
  
  
    function initApp() {
      firebase.auth().onAuthStateChanged(function (user) {
        //console.log(user);
        if (user) {
          // User is signed in.

          $("#putstuffhere1").empty();
          var header = $("<p>").html("You're Logged In! change this part to redirect ");
          $("#putstuffhere1").append(header);
          // window.location = 'asdasdasd.html';
          // return;
          // redirects but not very secure;
        } else {
          // No user is signed in.
        
          
          $("#putstuffhere1").empty();
          var header = $("<p>").html("You're NOT Logged In! change this part");
          $("#putstuffhere1").append(header);
        }
      });
    }
    initApp();
  
    $("#signout1").click(function () {
      firebase.auth().signOut().then(function () {

        $("#putstuffhere1").empty();
        var header = $("<p>").html("You're NOT Logged In! change this part");
        $("#putstuffhere1").append(header);
      }, function (error) {
        // An error happened.
      });
    });
  }); 