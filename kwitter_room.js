const firebaseConfig = {
      apiKey: "AIzaSyBOoJy5HqhlNd8Lb707JlAjxTWddCs4pwI",
      authDomain: "kwitter-b2959.firebaseapp.com",
      databaseURL: "https://kwitter-b2959-default-rtdb.firebaseio.com",
      projectId: "kwitter-b2959",
      storageBucket: "kwitter-b2959.appspot.com",
      messagingSenderId: "408735342421",
      appId: "1:408735342421:web:4f92aa5e87bd11a00bd9dc"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
