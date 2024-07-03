// function currentDateTime(){
//     let d = new Date();
//     document.write(d)
// }
// currentDateTime();

//Q2
// let firstName = prompt("Enter first name: ");
// let lastName = prompt("Enter last name: ")
// function greets(firstName, lastName){
//     document.write("Weclome " + " " + firstName + " " +lastName);
// }
// greets(firstName, lastName);

// //Write a function that adds two numbers (input by user)and returns the sum of two numbers.
// let x = +prompt("Enter a number:");
// let y = +prompt("Enter a number:");
// function sum(x, y){
//     return x + y;
// }
// console.log(sum(x, y));


// let num1 = +prompt("Enter the Number 1");
// let num2 = +prompt("Enter the Number 2");
// let operator = prompt("Enter the operator");
// function calculator(num1,num2, operator){
//     if(operator === "+"){
//         document.write(num1 + " " + operator + " " + num2 + " = " + (num1 + num2));
//     }
//     else if(operator === "-"){
//         document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2));
//     }
//     else if(operator === "*"){
//         document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2));
//     }
//     else if(operator === "/"){
//         document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2));
//     }
//     else if(operator === "%"){
//         document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2));
//     }
//     else{
//         document.write("Write some input");
//     }
// }
// calculator(num1,num2,operator);


// let start_number = +prompt("enter a starting number")
// let end_number = +prompt("enter an ending number")

// function counting(start_number , end_number){
//     if(start_number > end_number){
//         for (let i = start_number ; i >= end_number ; i--){
//             document.write(i + "<br>")
//         }
//     }
//     else if(start_number < end_number){
//         for (let i = start_number ; i <= end_number ; i++){
//             document.write(i + "<br>")
//         }
//     }
//     else if(start_number === end_number){
//         document.write("both numbers are equal")
//     }
// }

// counting(start_number , end_number);


// let num1 = +prompt("Enter a number:")
// let num2 = +prompt("Enter a number:")
// let operator = prompt("Enter a operator:")

// function calculator(num1, num2,operator){
//     if(operator === "+"){
//         document.write(num1 + " " + operator + " " + num2 + " "+ "=" + " " + (num1 + num2));
//     }
//     else if(operator === "-"){
//         document.write(num1 + " " + operator + " " + num2 + " "+ "=" + " " + (num1 - num2));
//     }
//     if(operator === "*"){
//         document.write(num1 + " " + operator + " " + num2 + " "+ "=" + " " + (num1 - num2));
//     }
   
// }
// calculator(num1,num2,operator)

// function square(num){
//     return num*num;
// }
// console.log(square(4));

// function areaOfRectangle(width, height){
//     return "Area of Rectangle is:"+ width * height
// }
// console.log(areaOfRectangle(6,8));
// console.log(areaOfRectangle(4,7));

let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number < end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number);

