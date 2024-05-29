const user = {
    username: "Romeo",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="Romeo"
//     console.log(this.username); // we cant use this keyword in function
// }

// chai()

// const chai = function (){
//     let username = "Romeo"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "Romeo"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"Romeo"})

console.log(addTwo(5, 4));

const myArray = [2,4,6,8,10]

// myArray.forEach(() => {})