var content = document.getElementById("sonnet").innerHTML;

console.log("orphans starts at character " + content.indexOf("orphans"));

console.log("This string is " + content.length + " Characters long.");

 content = content.replace("winter", "yuletide");

 content = content.replace(/the /ig, "a large ");

document.getElementById("sonnet").innerHTML = content;