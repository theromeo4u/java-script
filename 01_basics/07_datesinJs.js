// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2024,0,23,5,3);
let myCreatedDate = new Date("07-16-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()/1000);


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}));