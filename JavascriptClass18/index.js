// // let a = 23;
// // let b = 45;
// let a = 89;
// function sum(a){
//   let a = 78;
//   return a;
// }
// console.log(sum(a));

// function even(number){
//     return number % 2 === 0;
// }
// console.log(even(6));


//switch Statement
let dayOfWeek = "Saturday";
switch(dayOfWeek){
    case "Monday":
    document.write("Today is Monday")
    break;
    case "Tuesday":
    document.write("Today is Tuesday")
    break;
    case "Wednesday":
    document.write("Today is Wednesday")
    break;
    case "Thursday":
    document.write("Today is Thursday")
    break;
    case "Friday":
    document.write("Today is Friday")
    break;
    case "Saturday":
    document.write("Today is Saturday")
    break;
    case "sunday":
    document.write("Today is Sunday")
    break;

    default:
    document.write("Enter the correct day")
}


// let dayOfWk = 5;
// switch(dayOfWk) {
//     case 1 : case 2:
//      alert("Whoopee");
//      break;
//      case 3 : case 4:
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }
    

function calculateDiscount(productType, price) {
    let discount; 

    switch(productType) {
        case "Electronic":
            discount = price * 0.01;
            break;
        case "Clothing":
            discount = price * 0.2;
            break;
        case "Book":
            discount = price * 0.15;
            break;
        default:
            console.log("Original price");
            break;
    }

    let discountedPrice = (price - discount).toFixed(2); 

    return discountedPrice;
}

console.log(calculateDiscount("Electronic", 80)); 
console.log(calculateDiscount("Electronic", 400)); 
console.log(calculateDiscount("Clothing", 350));
console.log(calculateDiscount("Book", 120));  

