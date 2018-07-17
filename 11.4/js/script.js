'use strict'



function phone(brand, model, price, color, status) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
	this.status = status;
}

phone.prototype.printInfo = function() {
	console.log("The brand " + this.brand + " presents "+ this.model +" in color " + this.color + " and total price of  " + this.price + " for " + this.status + " customers. ");
}

var GalaxyS6 = new phone ("Samsung", "Samsung Galaxy S6", 2100, "black", "prepaid");
var iPhone6s = new phone ("iPhone", "iPhone 6s", 2300, "white", "subscribtion");
var OnePlusOne = new phone ("OnePlus", "OnePlus One", 2000, "silver", "prepaid");

GalaxyS6.printInfo ();
iPhone6s.printInfo ();
OnePlusOne.printInfo ();