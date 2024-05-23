// Primitive

/* 7 Types 
    String,
    Number,
    Boolean,
    null,
    undefined,
    Symbol,
    BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3659874563221n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"] //Array


let myObj = {
    name: "Romeo",                             //Object
    age: 25
}

const myFunction = function(){
    console.log("Hello World");                // Function
}


// *************************** Stack and Heap**********

// Stack (Primittive)   Heap (Non Primitive)

let myYoutubeName = "RomeoYT"
let anotherName = myYoutubeName

anotherName = "SubodhYT"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@ybl"

}

let userTwo = userOne

userTwo.email = "snp42u@gmail.com"
userTwo.upi = "theromeo4u@ybl"

console.log(userTwo);
console.log(userOne);