document.addEventListener("DOMContentLoaded", function() {
 var colours = document.getElementsByClassName('colour_option');
 var palettes = document.getElementsByClassName('space');
 var eraser = document.querySelector('.eraser');
 var currentColour;
 resetColour();
 pickColour();
 applyColour();


  function pickColour(){
    for(var i=0; i<colours.length; i++){
      var colour=colours[i];
      colour.addEventListener('click', function(){
        currentColour = window.getComputedStyle(this).backgroundColor;
      })
    }
  }

 function applyColour(){
   for(var i=0; i<palettes.length; i++){
     var palette=palettes[i];
       palette.addEventListener('click',function(){
         this.style.backgroundColor = currentColour;
       })
     }
   }

  function resetColour(){
    eraser.addEventListener('click', function(){
      currentColour = "white";
    })
  }
})
