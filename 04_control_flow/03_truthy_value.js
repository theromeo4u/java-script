const email ="snp"
if (email) {
    console.log("Got mail");
} else {
    console.log("Dont have email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', " ", [], {}, function(){}, 

if(email.length === 0){
    console.log("Empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator

let val1;
// val1 = 5 ?? 10
// Val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

const iceteaPrice = 100
iceteaPrice >= 80 ? console.log("More than 80"):console.log("less than 80");