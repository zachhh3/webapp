var firebaseConfig = {
    apiKey: "AIzaSyCX3s-d3nZHSf1A9EOhPHx0_ykg2zvPwFc",
    authDomain: "web-app-d856b.firebaseapp.com",
    databaseURL: "https://web-app-d856b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-app-d856b",
    storageBucket: "web-app-d856b.appspot.com",
    messagingSenderId: "874536225827",
    appId: "1:874536225827:web:9678c284bed85ef1c0b596",
    measurementId: "G-CC337Q4BLT"
  };
 
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;
  
  
  $("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
 
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessave = error.message;

            console.log(errorCode);
            console.log(errorMessage)
            window.alert("Message : " + errorMessage)
        });
    }
    else {
        window.alert("Please enter email and password")
    }
 });

  $("#btn-logout").click(function(){
     firebase.auth().signOut();
  });

  $("#btn-signup").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#confirmPassword").val();

    if(email != "" && password != "" && cpassword != "")
    {
        if(password == cpassword){
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage)
                window.alert("Message : " + errorMessage)
        });
        }
        else {
            window.alert("Password does not match.")
        }
    }
    else {
        window.alert("Please enter email and password")
    }
 });


$("#btn-resetPassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();
    
    if(email != ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email has been send to you, Please check and verify.");
            
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
            
        });
    }else{
        window.alert("Please enter your email");
    }
});

$("#btn-update").click(function(){
    var phone = $("#phone").val();
    var address = $("#address").val();
    var bio = $("#bio").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users")
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);
    
    if(firstName !="" && lastName !="" && phone !="" && gender !="" && address !="" && bio !=""){
        var userData = {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "gender": gender,
            "address": address,
            "bio": bio,
        };

        usersRef.set(userData, function(){
            if(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage)
                window.alert("Message : " + errorMessage)
            }else{
                window.location.href = "MainPage.html"
            }
        });
    } else {
        windows.alert("Please fill out all fields.")
    }
 });