document.addEventListener("DOMContentLoaded", function() {
  var photos = document.querySelectorAll("img");
  var frames = document.querySelectorAll(".frame");
  var selection;
  var resetButton = document.querySelector("button");
  var options = document.querySelector(".options");

  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    photo.addEventListener("click", function() {
      // something
      selection = this;
    });
  }

  for (var i = 0; i < frames.length; i++) {
    var frame = frames[i];
    frame.addEventListener("click", function() {
       this.appendChild(selection);
      //something
    });

  }

  resetButton.addEventListener("click", function(){
    for (var i=0; i< photos.length; i++){
      var pic = photos[i]
        options.appendChild(pic);
    }
  })


})
