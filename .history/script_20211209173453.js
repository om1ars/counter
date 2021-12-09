const config = {
  apiKey: "AIzaSyAhnax7xubJqkHqEBhibwuT6i7s1-MGKlk",
  authDomain: "counter-a480c.firebaseapp.com",
  projectId: "counter-a480c",
  storageBucket: "counter-a480c.appspot.com",
  messagingSenderId: "543028620616",
  appId: "1:543028620616:web:65adfc3b7f50b71acf177d"
};
  firebase.initializeApp(config);
  console.log('Jsib');
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