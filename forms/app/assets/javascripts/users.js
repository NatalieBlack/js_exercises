document.addEventListener("DOMContentLoaded", function() {
  var forms = document.querySelectorAll("form");

  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      this.querySelector("input[type=submit]").value = "Submitted"
      var inputs = this.querySelectorAll("input");
      const formData = new FormData(this);

      var token = document.querySelector("meta[name=csrf-token]").content;
      var headers = new Headers();
      headers.set('Accept', 'application/json');
      headers.set('X-Requested-With', 'XMLHttpRequest');
      headers.set('X-CSRF-Token', token);

      fetch(this.action, {
      method: this.method,
      headers,
      body: formData,
      credentials: 'same-origin'

    })

    })
  }
})