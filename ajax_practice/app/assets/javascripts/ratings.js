document.addEventListener("DOMContentLoaded", function(){
var ratings = document.querySelectorAll('.new_rating');
// console.log(ratings);

for(var i=0; i<ratings.length; i++){
  var rating = ratings[i]
  rating.addEventListener('change', function(e){
    e.preventDefault();
    var inputs = this.querySelectorAll('input');
    const formData = new FormData(this);

    var token = document.querySelector("meta[name=csrf-token]").content;
    var headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('X-CSRF-Token', token);

    var form = this;

    fetch(this.action, {
      method: this.method,
      headers,
      body: formData,
      credentials: 'same-origin'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var current_form = form.parentElement
      var rating_p = current_form.querySelector('.rating')
      var stars = myJson.stars
      rating_p.innerText = stars

    })


  })
}

});
