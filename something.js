document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");
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

  button.addEventListener("click", function() {
    var outerBlob = document.createElement("div");
    var blob = document.createElement("div");
    blob.classList.add("blob");
    outerBlob.appendChild(blob);
    outerBlob.classList.add("outerBlob");
    outerBlob.id = count;
    count++;
    main.appendChild(outerBlob);

    outerBlob.addEventListener("mousedown", function() {
      var pickedUp = this;
      pickedUp.classList.add("picked");

      document.addEventListener("mousemove", function(event) {
        if(pickedUp !== null) {
          pickedUp.style.left = event.clientX + "px";
          pickedUp.style.top = event.clientY + "px";
          if(insideMakeoverBooth(event)){
            pickedUp.style.backgroundColor = randomColour();
            pickedUp.style.border = randomBorder();
            pickedUp.innerHTML = "";
            pickedUp.classList.add("madeOver");
          }
        }
      });
      document.addEventListener("mouseup", function() {
        pickedUp = null;
      })
    })

  })

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