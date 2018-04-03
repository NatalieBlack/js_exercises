document.addEventListener("DOMContentLoaded", function() {
  var forms = document.querySelectorAll("form");

  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      this.querySelector("input[type=submit]").value = "Submitted"
      var inputs = this.querySelectorAll("input");

      $.ajax({ url: this.action,
        method: this.method,
        data: $(this).serialize(),
        dataType: 'JSON'
      }).done(function(response){
        console.log(response);
      });
    })
  }
})