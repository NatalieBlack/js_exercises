document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");
  var main = document.querySelector("main");
  var blob = document.createElement("div");
  
  button.addEventListener("click", function() {
    blob.classList.add("blob");
    main.appendChild(blob);
  })
})