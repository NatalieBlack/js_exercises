document.addEventListener("DOMContentLoaded", function() {
  var forms = document.querySelectorAll("form");
  var textBoxes = document.querySelectorAll("input[type=text]")

  for (var i = 0; i < textBoxes.length; i++) {
    var textBox = textBoxes[i];
    textBox.addEventListener("input", function() {
      var form = this.parentNode;

      var emptyInputs = Array.from(form.querySelectorAll("input[type=text]")).filter(function(input){
        return input.value === "";
      });

      var submitButton = form.querySelector("input[type=submit]");

      if(emptyInputs.length === 0){
        submitButton.removeAttribute("disabled");
      }
    })
  }

  for(var i=0; i < forms.length; i++){
    var form = forms[i];

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      this.querySelector("input[type=submit]").value = "Submitted"
      var inputs = this.querySelectorAll("input");

      for( var j=0; j < inputs.length; j++){
        inputs[j].disabled = true;
      }
    })

  }

})
