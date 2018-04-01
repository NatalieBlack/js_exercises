document.addEventListener("DOMContentLoaded", function() {
  var colours = document.querySelectorAll(".colours div");
  var brushes = document.querySelectorAll(".brushes div");
  var canvasSquares = document.querySelectorAll(".canvas div");
  var currentColour;
  var currentBrush;
  var cleanButton = document.querySelector("#clean");

  cleanButton.addEventListener("click", function() {
    for (var i = 0; i < brushes.length; i++) {
      brushes[i].style.backgroundColor = "white";
    }
  })

  for (var i = 0; i < colours.length; i++) {
    var colour = colours[i];
    colour.addEventListener("click", function() {
       currentColour = window.getComputedStyle(this).backgroundColor;
    })
  }

  for (var i = 0; i < brushes.length; i++) {
    brushes[i].addEventListener("click", function() {
      currentBrush = this;
    })
  }

  for (var i = 0; i < canvasSquares.length; i++) {
    var square = canvasSquares[i];


    square.addEventListener("click", function() {
      var blob = document.createElement("div");
      blob.classList.add("blob");
      blob.classList.add(currentBrush.classList[0] + "Brush");
      this.innerHTML = "";
      this.appendChild(blob);
      blob.style.backgroundColor = currentBrush.style.backgroundColor;
    })
  }



})
