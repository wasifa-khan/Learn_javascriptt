//Chap 31: Getting current date and time
// let rightNow = new Date();
// document.write(rightNow);

// var dateString = rightNow.toString();
// document.write("<br>" + dateString)

// let rightNow = new Date();
// let theDay = rightNow.getDay();
// console.log(theDay);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfToday = dayNames[theDay];
// console.log(nameOfToday);

// let dt = new Date();
// let currentMonth = dt.getMonth();
// console.log(currentMonth);
// var dayOfMonth = dt.getDate();
// console.log(dayOfMonth);
// var currYr = dt.getFullYear();
// console.log(currYr);


// let today = new Date();
// let theday = new Date("June 30, 2014");
// console.log(theday);

// let msToday = today.getTime();
// let msDoomsday = theday.getTime();
// console.log(msToday);
// console.log(msDoomsday);
// let msDiff = msDoomsday - msToday;
// console.log(msDiff);


// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// console.log(dDiff);
// console.log(Math.floor(dDiff));

let rightNow = new Date("June 30, 2035,15:58:98").getTime() - new Date().getTime();
console.log(rightNow);
var days = Math.floor(rightNow / (1000 * 60 * 60 * 24));
console.log(days);