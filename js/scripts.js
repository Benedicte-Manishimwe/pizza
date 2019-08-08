$(document).ready(function () {
  //business logic
  function Firstorder(size, crust, toppings, qte) {
    this.choiceSize = size;
    this.choiceCrust = crust;
    this.choiceTopping = toppings;
    this.choiceQuantities = qte;

  }
  Firstorder.prototype.placeOrder = function () {
    return ("you are ordering " + this.choiceQuantities + " pizza have the size:" + this.choiceSize + ",with crust: " + this.choiceCrust +
      " ,and the topping : " + this.choiceTopping);
  };
  this.choiceDelivery = delivery;

  // function person(names, address, phone) {
  //   this.fullname = names;
  //   this.location = address;
  //   this.tel = phone;
  // }
  // client = new person(names, address, phone);
  //User Interface logic

  $("#send1").click(function () {
    $("#order").submit(function (event) {
      event.preventDefault();
      var size = $("#sizeSelector").val();
      
      var crust = $("#crustSelector").val();
      
      var qte = $("#quantitiesSelector").val();
      //  console.log(size);
      var toppings = [];
      $("input[type=checkbox]:checked").each(function () {
        toppings.push($(this).val());
      });
     
      var anotherOrder = new Firstorder(size, crust, toppings, qte);
      console.log(anotherOrder);

      $("ol#view").append("<li>" + anotherOrder.placeOrder() + "</li>");
    });
    $("#clear").click(function(){
      $("#order")[0].reset();
    });
    // function myFunction() {
    //   document.getElementById("myForm").reset();
    // }
    $("#confirm").submit(function () {
      
      $("#deli").show(function () {
        alert("choose mode of delivery");
        var delivery = $("#deliverySelector").val();
        if (delivery === true) {
          alert("the delivery cost is Rwf 2000");
        };
        var size = $("#sizeSelector").val();
        var sizePrice;
        if (size === "Large") {
          return sizePrice = 4000;
        }
        else if (size === "Medium") {
          sizePrice = 3000;
        }
        else if (size === "Small") {
          sizePrice = 2000;
        }
        var crust = $("#crustSelector").val();
        var crustPrice;
        if ((crust === "Crispy") || (crust === "Stuffed")) {
          crustPrice = 500;
        }
        else {
          crustPrice = 800;
        }
        var qte = $("#quantitiesSelector").val();
        //  console.log(size);
        var toppings = [];
        $("input[type=checkbox]:checked").each(function () {
          toppings.push($(this).val());
        });
        // console.log(toppings);

        for (var topp = 0; topp < toppings.length; topp++) {
          var addToppings = 0;
          if (toppings[topp] === "Beef") {
            addToppings += 1000;
          }
          else if (toppings[topp] === "Ham") {
            addToppings += 1500;
          }
          else if ((toppings[top] === "Vegetables")) {
            addToppings += 2000;
          }
          else {
            addToppings += 500;
          }
        }
        var total = (addToppings + sizePrice + crustPrice) * qte;
        var price = total + delivery;
        $("#price").text("the price is: " + price);


      });
      // $("#comfirm").submit(function () {
      //   var total = parseInt(size) + parseInt(crust) + parseInt(toppings[i]) + delivery;
      //   console.log(total);
      //   $("#price").append(total);
      //   var names = $("#fullname").val();
      //   var address = $("#location").val();
      //   var phone = $("#tel").val();
      //   var client = new person(names, address, phone);
      //   $("#motivation").append(client, "thank youm to shop with us!!");
      // });
    });


  });
});
// using js function to reset the form
// function clear(){
//   document.getElementById("order").reset();
// }

