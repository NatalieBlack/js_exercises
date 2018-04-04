document.addEventListener('DOMContentLoaded', function() {

  var textBox = document.querySelector('#board_size');
  var boardContainer = document.querySelector('.board');
  // var main = document.querySelector('main');

  textBox.addEventListener('input', reDrawBoard);

  function reDrawBoard(){
    removeBoard();
    var size = parseInt(textBox.value);

    drawCells(size);
  }


  function drawCells(size) {
    for (var i = 0; i < size; i++) {
      var row = document.createElement('tr');
      boardContainer.appendChild(row);

      for (var j = 0; j < size; j++) {
        var cell = document.createElement('td');
        cell.classList.add("cell");
        row.appendChild(cell);
      }

    }
  }

  function removeBoard(){
    boardContainer.innerHTML = "";
  }


});