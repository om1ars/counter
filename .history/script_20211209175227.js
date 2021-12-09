// We've already loaded firebase from Google CDN 
// https://www.gstatic.com/firebasejs/5.7.0/firebase.js 
// and here just initialize it :
var config = {
  apiKey: "AIzaSyAE-uA-7cqHfHklNumb4KbjPKaU2cwszzs",
  authDomain: "fir-demo-ef13f.firebaseapp.com",
  databaseURL: "https://fir-demo-ef13f.firebaseio.com",
  projectId: "fir-demo-ef13f",
  storageBucket: "fir-demo-ef13f.appspot.com",
  messagingSenderId: "551428965639"
};
firebase.initializeApp(config);

// Now let's listen to the value of the counter and write it 
// to the counter DOM element
const counter = document.getElementsByClassName("app__counter")[0];
const counterRef = firebase.database().ref("incremental_counter");
counterRef.on("value", (snapshot) => {
  counter.textContent = snapshot.val();
});


// Note that we don't update the counter value on the page manually.
// This is where "Realtime" comes into play: 
// the new value will be synced across all the clients (line 18)
const incrementButton = document.getElementsByClassName("app__increment")[0];
incrementButton.addEventListener("click", () => {  
  counterRef.transaction(val => val + 1, (err) => {
    if (err) {
      alert(err);
    }
  });
}, false);