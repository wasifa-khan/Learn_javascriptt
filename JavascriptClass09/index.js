//For loop 


// let cleanestCities = ["Calgary","New York", "Honolulu", "Adelaide", "Helsinki", "Minneapolis"];
// let cityToCheck = "New York"; 
// let matchFound = "yes";

// for (let i = 0; i <= 5; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = "yes";
//         alert("It's one of the cleanest cities");
//         // Exit the loop once a match is found
//         break;
//     }

//     else if (matchFound === "no") {
//         alert("It's not on the list");
        
//     }
// }


// let cleanestCities = ["Calgary", "Honolulu", "Adelaide", "Helsinki", "Minneapolis"];
// let cityToCheck = "New York"; 
// let matchFound = false; // Initialize matchFound as "no"

// for (let i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         // Exit the loop once a match is found
//         break;
//     }
// }

// // This block executes after the loop finishes
// if (matchFound === false) {
//     alert("It's not on the list");
// }

// let cleanestCities = ["Calgary", "Honolulu", "Adelaide", "Helsinki", "Minneapolis"];
// let cityToCheck = "New York"; 

// let matchFound = false;

// for (let i = 0; i < cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         // Exit the loop once a match is found
//         break;
//     }
// }

// if (matchFound === false) {
//     alert("It's not on the list");
// }

// for(let a = 1; a <= 5; a++){
//   for(let b = 1; b <=a; b++){
//     document.write(b + " ")
//   }
//   document.write("<br>")
// }

// for(let a = 5; a >=1; a--){
//   for(let b = a; b >= 1; b-- ){
//     document.write(b + " ")
// }
// document.write("<br>")
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// // Print full names
// for (var k = 0; k < fullNames.length; k++) {
//     console.log(fullNames[k]);
// }

document.write("<h2>The Geometrizer</h2>");
let radius = 20;
let circumference = 2*(3.142)*radius;
let result1 = circumference;
// let area = 3.142 * radius * radius;
// let result2 = area;
document.write("Radius of a circle : " + radius);
document.write("<br>The circumference is : " + result1);
// document.write("<br>The area is : " + result2);

