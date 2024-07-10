//while loop
// let n = +prompt("Enter the value of n")
// let i = 45;1 to 100
// while(i>=n){   //n = 13 i = 0
//    document.write("<br>" + i)
//    i--;
// }


//Write a Program to display sum of numbers from .
// let sum = 0;
// let num = 1;
// while(num<=100){ //1 <= 100
//     sum += num; //sum = sum + num // 0 + 1 = 1, 3, 6,10,15, 6
//     num++; // (7)
// }
// document.write("Sum of 1 to 100: " + sum)

//Write a Program to display factorial of a number.
// let number = 4;
// let factorial = 1;
// while(number>0){
//     factorial = factorial * number; //4,12,24
//     number--;//(1)
// }
// document.write("Factorial of a number is: " + factorial)


//Write a Program to display finding the first 10 even number.
// let evenNumber = []
// let i = 0;
// while(evenNumber.length<10){
//     if(i%2===0){
//         evenNumber.push(i)
//     }
//     i++;
// }
// document.write("The first even number is: " + evenNumber)

//Write a Program to display user input Validation.
// let userInput;
// let password = "javascript123";
// while(userInput!==password){
//     userInput = prompt("Enter your Password");
// }
// document.write("Access Granted");

//Write a Program to display generating countdown.
// let countdown = 10;
// while(countdown>0){
//     document.write("<br>"+countdown)
//     countdown--;
// }
// document.write("<br>"+ "<h1>Happy New Year</h1>")


let n = +prompt("Enter the value of n")
let i = 10;
do{   
   document.write("<br>" + i)
   i++;
}while(i<=n) //n = 12

