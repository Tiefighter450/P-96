var firebaseConfig = {
    apiKey: "AIzaSyBJgRbwCCBCvYivVksdQvRkCwKEoMCof7I",
    authDomain: "me-chat-ff80a.firebaseapp.com",
    databaseURL: "https://me-chat-ff80a-default-rtdb.firebaseio.com",
    projectId: "me-chat-ff80a",
    storageBucket: "me-chat-ff80a.appspot.com",
    messagingSenderId: "858101402528",
    appId: "1:858101402528:web:10a933a2906d74525cb2c5",
    measurementId: "G-9EL1LLHVQQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    roomNames = childKey;
   //Start code

   //End code
   });});}
getData();
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html"
}