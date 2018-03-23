document.addEventListener("DOMContentLoaded", function() {

  var firstRowSquares = document.querySelectorAll("tr:first-child td");
  for (var i = 0; i < firstRowSquares.length; i++) {
    var square = firstRowSquares[i];
    var piece = document.createElement("div");
    piece.classList.add("piece");
    square.appendChild(piece);
    //

    };

    square.addEventListener('click', function(){
      var allSquares = document.querySelectorAll("tr td");
      for (var i=0; i< allSquares.length; i++){
        var piece = document.createElement("div");
        var singleSquare = allSquares[i];

        singleSquare.addEventListener('click', function(){
         if(this.hasChildNodes() === false){
           var square = this.querySelector("div");
           this.appendChild(piece);
           square.classList.add("piece");
         }
       });
        square.addEventListener('click', function(){
          if(this.hasChildNodes()){
            this.removeChild(this.child);
           }
        });
      }
    })




})
