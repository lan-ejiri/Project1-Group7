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
        $("#showshit").attr('style','display: block')

    }); //buttonclick close

    //on click of "show people" button
    $("#showshit").click(function () {
        var ref = firebase.database().ref();
        $(".inputthing").empty();

        ref.orderByChild("city").equalTo("test").on("child_added", function (snapshot) {
            // console.log(snapshot.val().id);
            userArray = snapshot.val().id;
            console.log(userArray);
            $("#testingstuff").append("<div><button id =" + snapshot.key + ">" + snapshot.val().id + "</button></div>");

        });

    });

});//docutment ready close  