$(document).ready(function () {

    //initialize firebase shit
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

    //initialize variables
    var newUserId, newUserCity;
    var userArray;

    $("#buttonthing").click(function () {

        newUserCity = $("#cityinput").val().trim();
        newUserId = $("#usernameinput").val().trim();

        database.ref().push({

            id: newUserId,
            city: newUserCity

        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });

        $("#makethisdisappear").empty();
        $("#showshit").attr('style', 'display: block')

    }); //buttonclick close

    //on click of "show people" button
    $("#showshit").click(function () {
        var ref = firebase.database().ref();
        $(".inputthing").empty();

        ref.orderByChild("city").equalTo(newUserCity).on("child_added", function (snapshot) {
            // console.log(snapshot.val().id);
            userArray = snapshot.val().id;
            $("#testingstuff").append("<div><button class= 'butt' id =" + snapshot.key + ">" + snapshot.val().id + "</button></div>");
            console.log("buttons are done");
        });

    });


    $(document).on("click", ".butt", function () {


        var buttId = $(this).attr('id');
        console.log(buttId);

        $("#testingstuff").empty();
        $("#testingstuff").html("<h4 style = 'text align: center'>" + buttId + "</h4><h5> at the moment this is showing the user's 'unique id' but if this app was actually deployed it would probably show some sort of profile or contact information that the user opted to share </h5>" );

    }); //closing button click function

});//document ready close  