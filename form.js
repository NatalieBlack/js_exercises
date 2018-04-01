document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector("input[type=submit]");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    this.value = "Submitted"
    var inputs = this.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
  })
})