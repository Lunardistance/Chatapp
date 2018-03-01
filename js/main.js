  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_3_GCv86nZObylHJJ4dGAk-cRIle927Q",
    authDomain: "fir-chat-1e9b2.firebaseapp.com",
    databaseURL: "https://fir-chat-1e9b2.firebaseio.com",
    projectId: "fir-chat-1e9b2",
    storageBucket: "",
    messagingSenderId: "670908790433"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();

  function googlelogin(){
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...

    console.log('user', user);

    $('#login-screen').fadeOut("slow", function(){
        $('body').append('<div id="chatscreen">Chat Screen</div>')
    });

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

  $('#googicon').click(googleLogin);