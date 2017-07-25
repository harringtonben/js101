// 1. How many hours are in a year
var secondsInMinute = 60;
var minutesPerHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
var decade = 10;
var myAge = 27;
var blankAge = 25;

console.log("There are ", hoursInDay * daysInYear , " hours in a year");

// 2. How many minutes are in a decade

console.log("There are ", minutesPerHour * hoursInDay * daysInYear * decade , " minutes in a decade");

// 3. How many seconds old I am

console.log("I am ", secondsInMinute * minutesPerHour * hoursInDay * daysInYear * myAge , " seconds old");

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (blankAge > 26) {
	console.log("Ok maybe not.");
} else {
	console.log("God I am old.");
}

