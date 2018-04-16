document.addEventListener("DOMContentLoaded", function() {
  var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
  ];

  var sales_ul = document.querySelector(".sales_list");
  var purchases_ul = document.querySelector(".purchases_list");
  var transaction_btn = document.getElementById('transaction_filter_button');


transaction_btn.addEventListener('click', function(){

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

});


  var name_field = document.getElementById('name_filter');
  var name_filter_btn = document.getElementById('filter_button');


  name_filter_btn.addEventListener('click', function(e){
    e.preventDefault();
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
