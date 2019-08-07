$("document").ready(function(){
//business logic
function order(size,crust,topping,qte){
    this.Size=size;
    this.Crust=crust;
    this.Topping=topping;
    this.Quantities=qte;
};
order.prototype.placeOrder=function(){
    return("you are ordering "+ this.Quantities+" pizza have the size:"+this.Size+ ",with crust: "+this.Crust+" , and the topping : "+this.Topping);
};
//User Interface logic

$("#send").click(function(){
$("#order").submit(function(event){
    event.preventDefault();
    var size=$("#Size").val();
    var crust=$("#Crust").val();
    console.log(size);
    var toppings=[];
    $("input[type=checkbox]:checked").each(function(){
        toppings.push($(this).val());
    });
    console.log(toppings);
    // var newOrder=new order(size,crust,topping,qte);
    // console.log(newOrder);
    var total=parseInt(size)+parseInt(crust)+parseInt(toppings);
     console.log(total);
    $("ul#view").append("<li>"+total.placeOrder()+"</li>");


});
});
})