document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("button");
  var main = document.querySelector("main");
  var magicMakeover = document.querySelector("#makeover");
  var makeoverArea = magicMakeover.getBoundingClientRect();
  var count = 0;

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  button.addEventListener("click", function() {
    var innerShape = document.createElement("div");
    innerShape.classList.add("innerShape");
    var outerShape = document.createElement("div");
    outerShape.appendChild(innerShape);
    outerShape.classList.add(this.id);
    outerShape.id = count;
    count++;
    main.appendChild(outerShape);

    outerShape.addEventListener("mousedown", function() {
      var pickedUp = this;
      pickedUp.classList.add("picked");

      document.addEventListener("mousemove", function(event) {
        if(pickedUp !== null) {
          outerShape.style.left = event.clientX + "px";
          outerShape.style.top = event.clientY + "px";
          if(insideMakeoverBooth(event)){
            outerShape.style.backgroundColor = randomColour();
            outerShape.style.border = randomBorder();
            outerShape.innerHTML = "";
          }
        }
      });
      document.addEventListener("mouseup", function() {
        pickedUp = null;
      })
    })

  })
}

  function insideMakeoverBooth(event){
      return event.clientX < makeoverArea.right &&
      event.clientX > makeoverArea.left &&
      event.clientY > makeoverArea.top &&
      event.clientY < makeoverArea.bottom;
  }

})



function random(below){
  return Math.floor(Math.random() * below);
}

function randomColour(){
  var colours = ["tomato", "lavender", "seagreen", "yellowgreen", "thistle", "aqua", "aquamarine", "chartreuse", "coral", "cornflowerblue", "deepskyblue", "fuchsia", "mediumorchid"];
  return colours[random(colours.length)];
}

function randomBorder(){
  var styles = ["solid", "dotted", "dashed", "double", "groove", "inset"];
  var width = random(6) + 1;
  var style = styles[random(styles.length)];
  var colour = randomColour();
  return width + "px " + style + " " + colour;
}
