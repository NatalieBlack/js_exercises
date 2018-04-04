document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("#shapeMakers button");
  var showTime = document.querySelector("#showTime");
  var main = document.querySelector("main");
  var magicMakeover = document.querySelector("#makeover");
  var makeoverArea = magicMakeover.getBoundingClientRect();
  var count = 0;

  showTime.addEventListener("click", function() {
    var shapes = document.querySelectorAll("main > div");
    var notReadyShapes = Array.from(shapes).filter(function(shape){
      var shapeNotReady = !hasClass(shape, "madeOver");
      return shapeNotReady;
    });

    for (var i = 0; i < notReadyShapes.length; i++) {
      notReadyShapes[i].remove();
    }

    stageBackground();
  })
for (var j = 0; j < buttons.length; j++) {
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
            outerShape.classList.add("madeOver");
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

function hasClass(element, specificName){
  var matches = Array.from(element.classList).filter(function(className){
    if(className === specificName) {
      return true;
    }
  });
  return matches.length > 0;
}
function stageBackground() {
  document.body.style.backgroundImage = "url('http://actorsbreakthrough.com//actorsbreakthrough.com/wp-content/uploads/2013/04/Stage-Spotlights-Background-1024x719.png')"
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}
