const accountID = 1;
let accountEmail = "hc@hc.com"
var accountPassword="12345"
accountCity="Abc"

//accountID=2   //not allowed

accountEmail ="snp42u@gmail.com"

accountPassword="56789"
/*
prefer not to use var 
because of issues in block scope and functional scope

*/
accountCity="Bhiwandi"
console.log(accountID)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.table([accountID,accountEmail,accountPassword,accountCity])