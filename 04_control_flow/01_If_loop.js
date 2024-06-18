// / If

// const isUserLoggedIn = true
// const temp = 41

// if (temp === 50) {
//      console.log("Less than fifty");
// }else{
//     console.log("Temperature is greater than 50");
// }

// const score = 200

// if (score>10) {
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }


const balance = 1000

// if (balance > 500) console.log("Test"), console.log("Test2");


// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance<750) {
//     console.log("less than 750");
    
// }else if (balance<900) {
//     console.log("less than 900");
    
// }else{
//     console.log("Less than 1200");
// }

const debitcard =true
const isUserLoggedIn=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true



if (isUserLoggedIn && debitcard) {
    console.log("Allow to buy course");

}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in");
}