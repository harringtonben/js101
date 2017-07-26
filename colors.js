var colors = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";

var colorsArray = colors.split(", ");
colorsArray.sort();
console.log(colorsArray);


for(i = 0; i < colorsArray.length; i++) {
	console.log("The color at " + i + " is " + colorsArray[i]);
} 





