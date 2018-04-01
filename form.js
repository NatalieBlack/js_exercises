document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector("input[type=submit]");
  var inputs = document.querySelectorAll("input");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    this.value = "Submitted"
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
  })
})