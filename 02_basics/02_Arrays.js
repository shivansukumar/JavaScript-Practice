const wwe = ["JohnCena", "Rock", "UnderTaker"];
const fame = ["Recpect", "peopels", "DeadMan"];

// Array can store any data inside it, it can even store another array
// wwe.push(fame);
// console.log(wwe);
// console.log(wwe[3][2]);

// const star = wwe.concat(fame);
// console.log(star);

const allStar = [...wwe, ...fame];
// console.log(allStar);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[2,4]]];
// console.log(anotherArray);
// const realArry = anotherArray.flat(4);
// console.log(realArry);

console.log(Array.isArray("Shivasu"));
console.log(Array.from("Shivansu"));
console.log(Array.from({name: "Shivansu"}));

let id1 = 100;
let id2 = 200;
let id3 = 300;
let id4 = 400;

console.log(Array.of(id1, id2, id3, id4));
console.log(Array.of("S","H","V","A","N","S","U"));
