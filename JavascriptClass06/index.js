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

// Slice(Return a piece of Array)
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// let piece_of_Array = fruits.slice(1,-4)
// console.log(piece_of_Array);


//Splice()

// let months = ["January", "February", "Monday", "Tuesday", "Saturaday"];
// let days = months.splice(2,0, "March");
// console.log(days);
// console.log(months);

// splice(start, remove, new )

//Slice
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Slicing from index 1 to the end
let piece1 = fruits.slice(1)
console.log(piece1); // Output: ["Orange", "Lemon", "Apple", "Mango"]

// Slicing from index -2 (second last) to the end
let piece2 = fruits.slice(-2);
console.log(piece2); // Output: ["Apple", "Mango"]

// Slicing from index 1 to index 3 (exclusive)
let piece3 = fruits.slice(1, 3);
console.log(piece3); // Output: ["Orange", "Lemon"]

// Slicing the entire array
let piece4 = fruits.slice();
console.log(piece4); // Output: ["Banana", "Orange", "Lemon", "Apple", "Mango"]

// Slicing with negative indices
let piece5 = fruits.slice(-3, -1);
console.log(piece5); // Output: ["Lemon", "Apple"]

// Slicing with no parameters (same as slice())
let piece6 = fruits.slice(0, fruits.length);
console.log(piece6); // Output: ["Banana", "Orange", "Lemon", "Apple", "Mango"]
