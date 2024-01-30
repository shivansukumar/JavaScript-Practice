// Singleton

// object literal
// Object.lterlas

const mySum = Symbol("Key");

const user = {
    name:  "Shivansu",
    "full name": "Shivansu Kumar",
    age: 24,
    [mySum] : "myKey1",
    location: "Noida",
    email : "shviahis@gmai.com",
    isLoggedIn : true,
    lastLogInDays : ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof(user[mySum]));

user.email = "Shivanus@google.com"
// Object.freeze(user);
user.email = "Shivansu@microsoft.com"
// console.log(user);

user.greeting = function() {
    console.log("Good Mornign");
}
user.greetingOne = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingOne());


