var config = {
    apiKey: "AIzaSyAAjDBeVj92tvR5NnKouT4pE31Qb7v-gag",
    authDomain: "ucb-clickcount.firebaseapp.com",
    databaseURL: "https://ucb-clickcount.firebaseio.com",
    projectId: "ucb-clickcount",
    storageBucket: "ucb-clickcount.appspot.com",
    messagingSenderId: "321461348082"
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