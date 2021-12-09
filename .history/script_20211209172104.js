const firebaseConfig = {
    apiKey: "AIzaSyCmd_tQ0ftvmpmXclfVAdrI7M2dLhsM5LA",
    authDomain: "fir-counter-68656.firebaseapp.com",
    projectId: "fir-counter-68656",
    storageBucket: "fir-counter-68656.appspot.com",
    messagingSenderId: "149221596448",
    appId: "1:149221596448:web:ffc089d9b665a83a7e8b45"
  };
  firebase.initializeApp(config);
  
  // Create a variable to reference the database
  var database = firebase.database();
  
  var counter = 20;
  var initialValue = 20;
  
  database.ref('counter').on('value', function(snapshot) {
    if (snapshot.val() && snapshot.val().clickCounter) {
      counter = snapshot.val().clickCounter;
    }
    
    renderCounter();
  }, function(errorObject) {
    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });
  
  
  if (!counter) {
    counter = initialValue;
  } else {
    counter = parseInt(counter);
  }
  
  function renderCounter() {
    $('#counter').html(counter);
  }
  
  $('.decrease').on('click', function() {
    counter--;
  
    if (counter === 0) {
      counter = initialValue;
    }
    
    database.ref('counter').set({
      clickCounter: counter
    })
    renderCounter();
  })