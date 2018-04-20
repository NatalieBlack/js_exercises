document.addEventListener("DOMContentLoaded", function() {
  var title = document.getElementById('post_title');
  var body = document.getElementById('post_body');
  var form = document.getElementById('new_post');
  var display = document.getElementById('display');
  // console.log(display)
  form.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);

    var token = document.querySelector("meta[name=csrf-token]").content;
    var headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('X-CSRF-Token', token);

    fetch(this.action,{
      method: this.method,
      headers,
      body: formData,
      credentials: 'same-origin'
    })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var post_title = myJson.title;
    var post_body = myJson.body
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    h2.innerText = post_title;
    p.innerText= post_body;

    display.prepend(p);
    display.prepend(h2);
  })





  })

})
