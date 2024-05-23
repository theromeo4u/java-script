const name = "Subodh "
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('Romeo-YT')
console.log(gamename);
// console.log(gamename[1]);
// console.log(gamename.charAt(0));
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());

const newString = gamename.substring(0,6)
console.log(newString);

const anotherString = gamename.slice(-8, 7)
const anotherString1 = gamename.slice(0, 8)
console.log(anotherString);
console.log(anotherString1);

const newString2 = "    Romeo      "
console.log(newString2);
console.log(newString2.trim());

const url = "https://subodh.com/subodh%20kumar"

console.log(url.replace('%20', '-'));
console.log(url.includes('Romeo'));

console.log(gamename.split('-'));