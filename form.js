document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector("input[type=submit]");
  var inputs = document.querySelectorAll("input");
<<<<<<< HEAD
=======

>>>>>>> 3ebcccb27018b2d5e1e72abab2dd6754a6b0a767
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    this.value = "Submitted"
    for (var i = 0; i < inputs.length; i++) {

      inputs[i].disabled = true;
    }
  })
})
