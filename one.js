document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll("td");

  for (var i = 0; i < boxes.length; i++) {
    var currentBox = boxes[i];
    currentBox.addEventListener("click", clickBox);
  }

  function clickBox() {
    this.style.backgroundColor = "salmon";
    this.innerText = i;
    currentBox.style.border = "4px dotted turquoise";
  }
})