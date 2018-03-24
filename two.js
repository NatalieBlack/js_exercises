document.addEventListener('DOMContentLoaded', function() {

  var textBox = document.querySelector('#board_size');
  var boardContainer = document.querySelector('.board');
  var main = document.querySelector('main');
  var startButton = document.getElementById('start_button');
  var form = document.querySelector('form');

  textBox.addEventListener('input', reDrawBoard);
  startButton.addEventListener('click', startGame);

  function reDrawBoard(){
    var size = parseInt(textBox.value);
    removeBoard();
    removeWarning();
  //  displayWarning(size);
    drawCells(size);
  }


  function drawCells(size) {
    if(size>=3){
      for (var i = 0; i < size; i++) {
        var row = document.createElement('tr');
        boardContainer.appendChild(row);

        for (var j = 0; j < size; j++) {
          var cell = document.createElement('td');
          cell.classList.add("cell");
          row.appendChild(cell);

        }

      }

    }else{
      displayWarning()
    }

  }

  function removeBoard(){
    boardContainer.innerHTML = "";
  }

  function removeWarning(){
    var warning = document.querySelector('.warning');
    if(warning) {
      warning.remove();
    }
  }

  function displayWarning(){
    var warning = document.createElement('p');
    warning.classList.add("warning")
    warning.innerText = "Invalid board size";
    main.prepend(warning);
  }

  /*  disable form once start button is clicked */

  function disableForm(){
    form.style.display = "none"

  }

  function makeCellsClickable() {
    var cells = document.querySelectorAll(".cell");
    var lastCell;

    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      cell.addEventListener('click', function(){
        if( lastCell === undefined  || lastCell.innerText === "O" ){
            this.innerText="X"
        }else{
          this.innerText="O"
        }
      lastCell = this;
      });
    }

  }

  function startGame() {
    disableForm();
    makeCellsClickable();
  }

  /* tic tac toe */


});
