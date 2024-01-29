// array

const  myArr =[ 1, 2, 3 ,4, 5];
// console.log(myArr);

const arr = new Array(5,4,3,2,1);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.unshift(21);
// myArr.shift();
// console.log(myArr)

// console.log(myArr.includes(41))
// console.log(myArr.includes(5))

const newArr = myArr.join(); //converts whole array into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr));

// slice, spice
const myA = myArr.slice(1,3);
// console.log(myA);
// console.log("B", myArr);

const myB = myArr.splice(1,3)
// console.log(myB);
console.log("A", myArr);
