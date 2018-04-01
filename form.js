document.addEventListener("DOMContentLoaded", function() {
  var submitButtons = document.querySelectorAll("input[type=submit]");

for(var i=0; i < submitButtons.length; i++){
  var submitButton = submitButtons[i];
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    this.value = "Submitted"
    var inputs = this.parentNode.querySelectorAll("input");
    console.log(inputs);
    for( var j=0; j < inputs.length; j++){
      inputs[j].disabled = true;
    }
  })

}

})
