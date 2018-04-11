document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("div");
  var button = document.querySelector("#filter");
  var input = document.querySelector("input[type=text]");

  populateDivs();

   button.addEventListener("click", function() {
     var max = parseInt(input.value);
     var divsArray = Array.from(divs);

     var tooBig = divsArray.filter(function(div){
       return parseFloat(div.innerText) > max;
     });

     for (var i = 0; i < tooBig.length; i++) {
       tooBig[i].classList.add("tooBig");
     }
   })

   function populateDivs(){
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerText = Math.random() * 10;
    }
  }
});