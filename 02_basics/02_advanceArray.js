const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros]

// console.log(allNewHeros);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real = arr.flat(Infinity)

console.log(real);

// console.log(Array.isArray("Subodh"));
// console.log(Array.from("Subodh"));
// console.log(Array.from({name: "Subodh"})); //interesting from keys or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
