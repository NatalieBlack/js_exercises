document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("div");
  var button = document.getElementById("filter");
  var button_2 = document.getElementById("filter_2");
  var input = document.getElementById("max");
  var input_2 = document.getElementById("min")
  var divsArray = Array.from(divs);

  populateDivs();

   button.addEventListener("click", function() {
     var max = parseFloat(input.value);

     var tooBig = divsArray.filter(function(div){
       return parseFloat(div.innerText) > max;
     });

     for (var i = 0; i < tooBig.length; i++) {
       tooBig[i].classList.add("tooBig");
     }
   });

   button_2.addEventListener('click', function(){
     var min = parseFloat(input_2.value);
     var tooSmall = divsArray.filter(function(div){
        return parseFloat(div.innerText) < min;
     });

     for (var i =0; i < tooSmall.length; i++){
       tooSmall[i].classList.add("tooSmall");
     }


   })

   function populateDivs(){
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerText = Math.random() * 10;
    }
  }
});
