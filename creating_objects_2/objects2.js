// Modify your VehicleConstructor (from earlier) to use this & new (and follow the JS conventions talked about in the previous chapters). To recap, here were the requirements from Part I:

// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers 
// Each vehicle should have a makeNoise method Using the constructor, create a Bike 
// redefine the Bike’s makeNoise method to print “ring ring!” Using the constructor, create a Sedan 
// redefine the Sedan’s makeNoise method to print “Honk Honk!” Using the constructor, create a Bus 
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count 

// Then make the following modifications:
// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute 
// Create a private variable called distance_travelled that starts at 0 
// Create a private method called updateDistanceTravelled that increments distance traveled by speed 
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise 
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, numberPassengers, speed){

	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, wheels, numberPassengers, speed);
	}

	// Private

	var distance_travelled = 0;
	var self = this;
	function updateDistanceTravelled(){
		distance_travelled += self.speed;
		console.log(distance_travelled);
	}

	// public
	
	this.name = name  ||  "unicycle";
	this.wheels = wheels || 1;
	this.numberPassengers = numberPassengers || 1;
	this.speed = speed || 10;


	this.introduce = function(){
		console.log("Hi I am a " + this.name + ". I have " + this.wheels + " wheels" + ", and I can carry " + this.numberPassengers + " people" + " make speed is " + this.speed + " mph");
	};


	this.makeNoise = function(noise){
		var noise = noise || "pip pip"; 
		console.log(noise);
	};

	this.move = function(){
		this.makeNoise();
		updateDistanceTravelled();
	};

	this.checkMiles = function(){
		console.log(distance_travelled);
	};

}
var unicyle = new VehicleConstructor();
unicyle.introduce();
unicyle.makeNoise();
unicyle.move();
unicyle.checkMiles();
console.log(unicyle.speed);

// Step 2: Using the constructor, create a Bike 

var bike = new VehicleConstructor("bicycle", 2, 1, 15);
bike.introduce();


// Step 3: Redefine the Bike’s makeNoise method to print “ring ring!” 

var bike = new VehicleConstructor("bicycle", 2, 1, 15);
bike.makeNoise = function(){
	console.log("ring, ring");
}
// bike.introduce();
bike.makeNoise();


// Step 4: Create a Sedan 


var sedan = new VehicleConstructor("sedan", 4, 4, 80);
sedan.introduce();


// Step 5: Redefine the Sedan’s makeNoise method to print “Honk Honk!” 

var sedan = VehicleConstructor("sedan", 4, 4,80);
sedan.makeNoise = function(){
	console.log("Honk Honk!");
}
sedan.makeNoise();



// Step 6: Using the constructor, create a Bus 
// Step 7: Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​


var bus = VehicleConstructor("bus", 8, 2, 40);
bus.pickupPassengers = function(newPassengers){
	bus.numberPassengers += newPassengers;
}
bus.introduce();
console.log(bus.numberPassengers);
bus.pickupPassengers(8);
console.log(bus.numberPassengers);



// step 8: Using the constructor, create a car 

var car = new VehicleConstructor('car', 4, 2, 40);
car.introduce();
car.move();
car.checkMiles();
console.log(car.speed);
