console.log("I'm in second.js");

var perry = "penguin";
var nellie = "owl";

console.log("Perry is a " + perry);
console.log("Nellie is a " + nellie);

var quote = "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create. things."

var numberOfCharacters = quote.length;

console.log("length of quote: " + numberOfCharacters + " characters.");

//Built in Methods 

// .indexOf()
// .charAt()
// .replace()


// First quote
console.log(quote.indexOf("things")); // will give the index of the beginning of the string (first encounter)
console.log(quote.charAt(50)); // will give the character at the specified index
var quote = quote.replace(/things/g, "robots");

document.getElementById("quote").innerHTML = quote;



// second quote
var element = document.getElementById("secondQuote"); // reading from HTML
var jsString = element.innerHTML;
console.log(jsString);
