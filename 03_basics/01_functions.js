// console.log("S");
// console.log("u");
// console.log("b");
// console.log("o");
// console.log("d");
// console.log("h");

function sayMyName() {
    console.log("S");
    console.log("u");
    console.log("b");
    console.log("o");
    console.log("d");
    console.log("h");
}

// sayMyName()


// function addNumbers (num1,num2){
//     console.log(num1 + num2)
// }

// function addNumbers (num1,num2){
//    let result = (num1 + num2)
//     return result
// }

function addNumbers(num1, num2) {
    return num1 + num2
}

const result = addNumbers(3, 4)
// console.log("result: ", result);

// function loginUserMsg (username){
//     if(username === undefined){
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged in`
// }


// function loginUserMsg (username){
//     if(!username){
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMsg(username = "Romeo") {
    if (!username) {
        console.log("Please enter a username: ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Subodh"));  //output Subodh just logged in
console.log(loginUserMsg("Subodh"));         //output undefined just logged in


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(2, 4, 6, 8, 10));

const user = {
    username: "Subodh",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNew = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNew));
console.log(returnSecondvalue([100,2,35,40]));