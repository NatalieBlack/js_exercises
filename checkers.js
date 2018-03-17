document.addEventListener("DOMContentLoaded", function() {

  var firstRowSquares = document.querySelectorAll("tr:first-child td");
  for (var i = 0; i < firstRowSquares.length; i++) {
    var square = firstRowSquares[i];
    var piece = document.createElement("div");
    piece.classList.add("piece");
    square.appendChild(piece);

    piece.addEventListener('click', function(){
      this.classList.remove("piece");
    });

    square.addEventListener('click', function(){
      console.log('hello');
    })
  }
  var allSquares = document.querySelectorAll("tr td");
  for (var i=0; i<allSquares.length; i++){
    var piece = document.createElement("div");
    var singleSquare = allSquares[i];
    singleSquare.addEventListener('click', function(){
      this.classList.add("piece");
    })
  }


})
