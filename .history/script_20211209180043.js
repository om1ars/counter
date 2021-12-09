var dbStats =   new Firebase("https://side-p.firebaseio.com/Stats");

var dbThreads = new Firebase("https://side-p.firebaseio.com/Threads");
var hits = 0;

function setHits() {
  console.log(hits)
}

function setHitsfun() {
  document.getElementById("hitCounterfun").innerHTML = "hits: " + hits;
}

dbStats.on("child_changed",function(e,prev){
  hits = e.val().Hits;
  setHitsfun();
});

dbStats.on("value",function(e){
  hits = e.val().Hits;
  setHitsfun();
});


function hitCounter() {
  hits++
  dbStats.set({"Hits":hits})
  setHitsfun();
  console.log("test")
}