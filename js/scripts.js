$("document").ready(function() {
  //business logic
  function order(size, crust, toppings, qte) {
    this.Size = size;
    this.Crust = crust;
    this.Topping = toppings;
    this.Quantities = qte;
  }
  order.prototype.placeOrder = function() {
    return (
      "you are ordering " +
      this.Quantities +
      " pizza have the size:" +
      this.Size +
      ",with crust: " +
      this.Crust +
      " , and the topping : " +
      this.Topping
    );
  };
  // function person(names, address, phone) {
  //   this.fullname = names;
  //   this.location = address;
  //   this.tel = phone;
  // }
  // client = new person(names, address, phone);
  //User Interface logic

  $("#send").click(function() {
    $("#order").submit(function(event) {
      event.preventDefault();
      var size = $("#Size").val();
      var crust = $("#Crust").val();
      var qte = $("#quantities").val();
      var toppings = [];
      $("input[type=checkbox]:checked").each(function() {
        toppings.push($(this).val());
        console.log(toppings);

        var newOrder = new order(size, crust, toppings, qte);
        console.log(newOrder);
        $("ul#view").append("<li>" + newOrder() + "</li>");
        if (delivery === true) {
          alert("the delivery cost is 2000");
        };
        if ((crust === crispy) && (topping === ham)) {
          $("#hamCrispy").fadeIn();

      };
       if ((crust === crispy) && (topping === beef)) {
          $("#beefCrispy").fadeIn();
      };
      if ((crust === crispy) && (topping === vegetables)) {
          $("#hamStuffed").fadeIn();
      };
      if ((crust === stuffed) && (topping === ham)) {
          $("#beefStuffed").fadeIn();

      };
      if ((crust === stuffed) && (topping === beef)) {
          $("#vegCrispy").fadeIn();
      };
      if ((crust === stuffed) && (topping === veg)) {
          $("#vegStuffed").fadeIn();
      };
      if ((crust === gluten - free) && (topping === ham)) {
          $("#beefGluten").fadeIn();
      };
      if ((crust === gluten - free) && (topping === beef)) {
          $("#beefGluten").fadeIn();
      };
      if ((crust === gluten - free) && (topping === veg)) {
          $("#vegStuffed").fadeIn();
      };
    });
        $("#comfirm").submit(function() {
          var total =
            parseInt(size) + parseInt(crust) + parseInt(toppings) + delivery;
          console.log(total);
          $("#price").append(total);
          var names = $("#fullname").val();
          var address = $("#location").val();
          var phone = $("#tel").val();
          var client = new person(names, address, phone);
          $("#motivation").append(client, "thank youm to shop with us!!");
        });
      });
    
  });
});

