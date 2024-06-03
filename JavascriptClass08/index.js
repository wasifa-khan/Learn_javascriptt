// for (let i = 50; i > 4; i = i - 5) {
//     console.log(i);
// }

// for(let i = 0;i < 100; i++){
//     document.write("Hello World");
// }

// for(let i = 14; i < 141; i = i + 14){
//     console.log(i);
// } 

// let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// let cityToCheck = "Great Falls";

// for (let i = 0; i <= 4;i++) {
//     if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
//     }
//     else{
//     alert("It's not one of the cleanest cities");
//     }
//     }

// let qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3>Qualification</h3>");
// document.write("<ol>");

// for (let i = 0;i <= 7; i++) {
//   document.write("<li> <b>" + qualificationInPakistan[i]+ "</b></li>");
//  }

// document.write("</ol>");


// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// // let color_to_add = prompt("Enter the Color Name which you want ");
// color.unshift("purple, pink");
// document.write("<br><br>Updated Array is : " + color);

// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// let index_to_add = +prompt("At which index color will be Add");
// let color_to_add = prompt("Enter the Color Name which you want ");
// color.splice(index_to_add, 0, color_to_add);
// document.write("<br><br>Updated Array is : " + color);

let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
document.write("Original Array is: " + color);
let index_to_delete = +prompt("At which index color will be Deleted");
let colorNo_to_delete = +prompt("Enter the Color Name that you want to delete ");
color.splice(index_to_delete,colorNo_to_delete);
document.write("<br><br>Updated Array is : " + color);








































