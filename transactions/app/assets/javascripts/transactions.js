  var form = document.getElementById('form');

document.addEventListener("DOMContentLoaded", function(e) {
  const formData = new FormData(this);

  var token = document.querySelector("meta[name=csrf-token]").content;
  var headers = new Headers();
  headers.set('Accept', 'application/JSON');
  headers.set('X-Requested-With', 'XMLHttpRequest');
  headers.set('X-CSRF-Token', token);

  fetch( "/json_data",{
    method: "get",
    headers,
    credentials: 'same-origin'
  })
.then(function(response) {
  return response.json();
})
.then(function(json) {
  var sales_ul = document.querySelector(".sales");
  var purchases_ul = document.querySelector(".purchases");


 var transactions = json.transactions
  var sales_li = transactions.filter(function(index, type){
     return index.type === "sale";
   });

  var purchase_li = transactions.filter(function(index, type){
    return index.type ==="purchase"
  });

  for (var i = 0; i < sales_li.length; i++) {
    var li = document.createElement("li");
    li.innerText = sales_li[i]["customer"] + " - " + sales_li[i]["type"];
    sales_ul.appendChild(li);
  }

  for(var i =0; i < purchase_li.length; i++){
    var li = document.createElement("li");
    li.innerText = purchase_li[i]["vendor"] + "-" + purchase_li[i]["type"];
    purchases_ul.appendChild(li);
  }



  var name_field = document.getElementById('name_filter');
  var name_filter_btn = document.getElementById('filter_button');


  name_filter_btn.addEventListener('click', function(e){
    e.preventDefault();
    sales_ul.innerHTML =""
    purchases_ul.innerHTML =""
    var name = name_field.value;
    var name_li = transactions.filter(function(index, type){
       if(index.customer === undefined){
         return index.vendor === name
       }else if (index.vendor === undefined) {
         return index.customer === name
       }
     });

     for(var i=0; i< name_li.length; i++){
        if(name_li[i].customer === name){
         var li = document.createElement("li");
         li.innerText = name_li[i]["customer"] + " - " + name_li[i]["type"]
         sales_ul.appendChild(li);

       }else if(name_li[i].vendor === name){

         var li = document.createElement("li");
         li.innerText = name_li[i]["vendor"] + " - " + name_li[i]["type"]
         purchases_ul.appendChild(li);
       }
     }
   });
});

var new_sales_form = document.getElementById('fetch_new_sale_form');
var new_purchase_form = document.getElementById('fetch_new_purchase_form');

  new_sales_form.addEventListener('click', function(){
    const formData = new FormData(this);

    var token = document.querySelector("meta[name=csrf-token]").content;
    var headers = new Headers();
    headers.set('Accept', 'text/html');
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('X-CSRF-Token', token);

    fetch( "/new_sale",{
      method: "get",
      headers,
      credentials: 'same-origin'
    })
    .then(function(response){
      var new_area = document.querySelector('.new_sales');
      var t = response.text();
      var promise_t = Promise.resolve(t);
      promise_t.then(function(response){
        new_area.innerHTML=response;
      })
    })



  })


})
