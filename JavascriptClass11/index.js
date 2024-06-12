// document.write("Counting: ")
// for(let i = 1; i <= 15; i++){
//     document.write (i + ",");
    
//     }

//     document.write("<br><br>"+"Reverse counting : ")
//     for(let i = 10; i >= 1; i--){
//         document.write (i + ",");
        
//     }

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/maam : ");

// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   document.write("cookie is available at index 2 in our bakery");
// } else {
//   document.write("We are sorry. pastry is not available in our bakery");
// }


let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

let found = bakeryItems.includes(userInput);

if (found) {
  document.write(userInput +  " is available in our bakery.");
} else {
  document.write("Sorry, " + userInput + " is not available in our bakery.");
}
