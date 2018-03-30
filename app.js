$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDB7TGHzA9LfmcKOcrYnvZ6aLxBNf9JJnw",
    authDomain: "project-1-group-7.firebaseapp.com",
    databaseURL: "https://project-1-group-7.firebaseio.com",
    projectId: "project-1-group-7",
    storageBucket: "",
    messagingSenderId: "138612540434"
  };

  firebase.initializeApp(config);

  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
  }
});

// login modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$("#logo").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#p").offset().top
    },
    "slow"
  );
});
