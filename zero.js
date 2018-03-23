document.addEventListener("DOMContentLoaded", function() {
  var topDivs = document.querySelectorAll(".top div");
  var bottomDivs = document.querySelectorAll(".bottom div");
  var counter = 0;

  for (var i = 0; i < topDivs.length; i++) {
    var currentDiv = topDivs[i];
    currentDiv.addEventListener("click", function() {
      console.log(this);
      this.innerText = counter;
      counter++;
    })
  }

  for (var i = 0; i < bottomDivs.length; i++) {
    var currentDiv = bottomDivs[i];
    currentDiv.addEventListener("click", function() {
      console.log(this);
      this.innerText = counter;
      counter++;
    })
  }
})
