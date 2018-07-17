'use strict'



function phone(brand, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}
phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var GalaxyS6 = new phone ("Samsung", "Samsung Galaxy S6", 2100, "black");
var iPhone6s = new phone ("iPhone", "iPhone 6s" 2300, "white");
var OnePlusOne = new phone ("OnePlus", "OnePlus One", 2000, "silver");

GalaxyS6.printInfo ();
iPhone6s.printInfo ();
OnePlusOne.printInfo ();