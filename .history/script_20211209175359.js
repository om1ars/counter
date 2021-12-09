var dbStats =   new Firebase("https://brilliant-fire-863.firebaseio.com/Stats");
var dbThreads = new Firebase("https://brilliant-fire-863.firebaseio.com/Threads");
var hits = 0;
var counterBtn = $("#hitCounter");

dbThreads.push({
  "name":"Example Thread",
  "content": "hello, world!",
  "image": "http://placehold.it/150x150.png"
});


function setHits() {
  counterBtn.text("Hits: " + hits);
}

dbStats.on("child_changed",function(e,prev){
  hits = e.val().Hits;
  setHits();
});

dbStats.on("value",function(e){
  hits = e.val().Hits;
  setHits();
});

dbThreads.on("value",function(e){
  var threads = e.val();
  for(var key in threads)
  {
    var img = $("<img />",{src:threads[key].image});
    var list = $("<li />",{html:threads[key].name});
    var contents = $("<p />",{text:threads[key].content});
    list.appendTo("#threads");
    contents.appendTo(list);
    img.appendTo(list);
    
  }
});

counterBtn.on("click",function(e){
  hits++;
  dbStats.set({"Hits":hits});
  setHits();
});
