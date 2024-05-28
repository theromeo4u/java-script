const tinderUser = new Object()

// const tinderUser = {}
tinderUser.id = 123
tinderUser.name = "Dinesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Subodh",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)//{} => target obj1, obj2 are source

const obj3 = {...obj1,...obj2}

// console.log(obj3);


const users = [
    { 
        id: 1,
        email: "abc@gmail.com"
    },
    { 
        id: 1,
        email: "abc@gmail.com"
    },
    { 
        id: 1,
        email: "abc@gmail.com"
    },
    { 
        id: 1,
        email: "abc@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructing of objects


const course = {
    courseName: "js in hindi",
    price:"999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: con} = course
// console.log(courseInstructor);
console.log(con);


// {
//     name: "Subodh",
//     courseName:"js in hindi",
//     price: "free"
// }

