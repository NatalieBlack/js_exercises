document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");
  var main = document.querySelector("main");

  button.addEventListener("click", function() {
    var outerBlob = document.createElement("div");
    var blob = document.createElement("div");
    blob.classList.add("blob");
    outerBlob.appendChild(blob);
    outerBlob.classList.add("outerBlob");
    main.appendChild(outerBlob);

    outerBlob.addEventListener("mousedown", function() {
      var pickedUp = this;
      pickedUp.classList.add("picked");

      document.addEventListener("mousemove", function(e) {
        if(pickedUp !== null) {
          pickedUp.style.left = e.clientX + "px";
          pickedUp.style.top = e.clientY + "px";
        }
      });
      document.addEventListener("mouseup", function() {
        pickedUp = null;
      })
    })

  })


})
