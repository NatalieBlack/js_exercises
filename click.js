document.addEventListener("DOMContentLoaded", function() {
  var photos = document.querySelectorAll("img");
  var frames = document.querySelectorAll(".frame");

  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    photo.addEventListener("click", function() {
      // something
    })
  }

  for (var i = 0; i < frames.length; i++) {
    var frame = frames[i];
    frame.addEventListener("click", function() {
      //something
    })
  }
})