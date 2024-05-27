// //Array Method 
// //concat()
 
// let myGirls = ["Raviya", "Laiba"];
// let myBoys = ["Rafay", "Saad", "Talha"];
// let myChildren = myBoys.concat(myGirls);
// console.log(myBoys);
// console.log(myChildren);

// //unshift(push at start)
// let fruitss = ["Banana", "Orange", "Apple", "Mango", "Peach"];
// fruitss.unshift("Lemon", "Juice", 45);
// console.log(fruitss);

// //shift(delete at start)
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.shift());
// fruits.shift();
// console.log(fruits);

//Slice(Return a piece of Array)
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// let piece_of_Array = fruits.slice(1,-4)
// console.log(piece_of_Array);


//Splice()

let months = ["January", "February", "Monday", "Tuesday", "Saturaday"];
let days = months.splice(2,0, "March");
console.log(days);
console.log(months);

// splice(start, remove, new )
