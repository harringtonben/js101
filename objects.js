// how to define an object

var x = "humidity";

var weather = {
	currentTemp: 82, 
	isRaining: false,
	humidity: "too much",
	'is-sunny': true
};

console.log(weather);
// assigning a property to an object
weather.location = "Nashvegas";
weather['zipCode'] = 37212;

console.log(weather);

console.log(weather.isRaining);
console.log(weather['is-sunny']);

console.log("humidity is " + weather[x]);
console.log(weather.x);

