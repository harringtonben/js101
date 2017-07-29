console.log("Hello World");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

// Example of 'separatedingle Responsibility Principle'

function nugFactory (animal) {
	// chickens are cut up
	cutUpInput(animalInput);
	// chickens are separated into chunks
	// take the chunks and fry them
	// package the nugs
}

function cutUpInput (input) {
	var output = input * 20;
	return output;
	
}

// Function Declarations
var summation;
var constant = 40;

function doesAddition(numberOne, numberTwo) {
	summation = numberOne + numberTwo + constant;
}

doesAddition(2, 3)


console.log(summation);

var additionAction = function(first, second) {
	return first + second;
}

console.log(additionAction(4, 9));