document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");
  var main = document.querySelector("main");
  var magicMakeover = document.querySelector("#makeover");
  var makeoverArea = magicMakeover.getBoundingClientRect();
  var count = 0;

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
          if(insideMakeoverBooth()){
            pickedUp.style.backgroundColor = randomColour();
            pickedUp.style.border = randomBorder();
            pickedUp.innerHTML = "";
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