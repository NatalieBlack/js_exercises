document.addEventListener("DOMContentLoaded", function() {

  var firstRowSquares = document.querySelectorAll("tr:first-child td");
  for (var i = 0; i < firstRowSquares.length; i++) {
    var square = firstRowSquares[i];
    var piece = createPiece();
    square.appendChild(piece);
    };

  var allSquares = document.querySelectorAll('td');

  for(var i =0; i<allSquares.length; i++){
    var singleSquare = allSquares[i];

    singleSquare.addEventListener('click', function(){
      piece = createPiece();
      if(this.hasChildNodes() === true){
       this.removeChild(this.firstChild);
      }else{
        this.appendChild(piece);
      }
    })
  }


 function createPiece(){
   var piece = document.createElement("div");
   piece.classList.add("piece");
   return piece;
 }

})
