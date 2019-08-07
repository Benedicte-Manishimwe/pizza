$(document).ready(function(){
//business logic
function order(size,crust,topping,qte){
    this.Size=size;
    this.Crust=crust;
    this.Topping=topping;
    this.Quantities=qte;
};
order.prototype.placeOrder=function(){
    return"you are ordering "+ this.Quantities+" pizza have the size:"+this.Size+ ",with crust: "+this.Crust+" , and the topping : "+this.Topping);
};
//User Interface logic
$("")
});