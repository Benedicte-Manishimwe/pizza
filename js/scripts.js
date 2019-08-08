$(document).ready(function () {
  //business logic
  function order(size, crust, toppings, qte) {
    this.choiceSize = size;
    this.choiceCrust = crust;
    this.choiceTopping = toppings;
    this.choiceQuantities = qte;


  }
  function client(name, location, phone) {
    this.choiceNames = name;
    this.choiceAddress = location;
    this.choiceTel = phone;


  }

  order.prototype.total = (this.choiceCrust + this.choiceSize + this.choiceTopping) * this.choiceQuantities;
  order.prototype.placeOrder = function () {
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

      var firstOrder = new order(size, crust, toppings, qte);
      console.log(firstOrder);

      var total = (toppings + size + crust) * qte;
      console.log(total);

      $("ol#view").append("<li>" + firstOrder.placeOrder() + " at " + total + "</li>");

      var name = $("#names").val();
      var location = $("#address").val();
      var phone = $("#tel").val();
      var person = new client(name, location, phone);
      $("#delivery").click(function () {
        alert("delivery charges is 2000Rwf");
        var finalTotal = total += 2000;



        $("#price").show(finalTotal);
        $("#motivation").append("Dear " + person + " , thank you for shopping with us! Your order will be delivered at " + location);
      });

      $("#pick").click(function () {
        var finalTotal = total;

        $("#price").show(finalTotal);
        $("#motivation").append("Dear " + person + " , thank you for shopping with us!");

      });
      //to reset the form 
      $("#clear").click(function () {
        $("#order")[0].reset();

      });
    });


  });
});






