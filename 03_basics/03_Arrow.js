const user = {
    userName : "Shivansu",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "Abhinav"
// user.welcomeMessage();
// console.log(user.welcomeMessage);

// console.log(this);

// function fun() {
//     console.log(this);
// }
// fun();

const chai = () => {
    let userName = "Shivansu" 
    console.log(this);
}

// chai();

const addTow = (num1, num2) => {
    return num1+num2;
}

// console.log(addTow(2,5));

const add = (num1, num2) => num1+num2;
// console.log(add(6,7));

const sub = (num1, num2) => (num1 - num2);
// console.log(sub(4,2))

const obj = (num1, num2) => ({userName: "Shivansu"})
console.log(obj(1,2));
