let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// In javaScript month start from 0 i.e 0=Januarary
let date = new Date(2023, 0, 21);
// let date = new Date(2024, 4, 4, 5, 65);
// console.log(date.toString())


let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(Math.floor(Date.now()/1000))

let ourDate = new Date();
console.log(ourDate.getMonth()+1);
console.log(ourDate.getDay());

ourDate.toLocaleString('defalut', {
    weekDay: "long",
})