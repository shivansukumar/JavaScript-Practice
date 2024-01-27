// Primitive
//7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const id = Symbol('123')
const moreId = Symbol('123')
// console.log(id)
// console.log(moreId)
// console.log(id === moreId)

// Non Primitive (Reference)
// Array, Object, Functions

const heroes = ["shaktiman", "doga", "krish"]

let myObj = {
    name : "Shiva",
    age : "24",
}

const myFunction = function() {
    // console.log("Hellow world")
}

//++++++++++++++++++++++++++++

let userOne = {
    email: "user@google.com",
    upi : "user@abc"
}
let userTwo = userOne
userTwo.email = "advasd@abc.com"

console.log(userTwo); 
console.log(userOne); 

console.log(userTwo==userOne)
console.log(userTwo===userOne)

