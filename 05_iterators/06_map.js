// const code = ["Java", "ruby", "Python", "javaScript", "Cpp"];

// const values = code.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7];

// const newNum = myNums.filter((num) => {
//     return num>4;
// })
// console.log(newNum);

// const newNums = [];

// myNums.forEach((num) => {
//     if(num> 4) {
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.map((num) => num+10);
// console.log(arr);
// console.log(newArr);

const newArr = arr.map((num) => {
    return num*10;
}).map((num) => {
    return num+1;
}).filter((num) => num>=40);
console.log(arr);
console.log(newArr);