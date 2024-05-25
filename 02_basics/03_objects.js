// singleton

// object literals
//Object.create

const mySym = Symbol("keys1");

const jsUser = {
    name: "Subodh",
    "fullname": "Subodhkumar",
    [mySym]: "Hehe",
    age: 25,
    location: "Bhiwandi",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "snp42u@gmail.com"

// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "abc@g.com"
// console.log( jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}


jsUser.greeting2 = function(){
    console.log(`Hello js User,${this.name}`);
}
jsUser.greeting()
jsUser.greeting2()
// console.log(jsUser.greeting());