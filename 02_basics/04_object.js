// const bumble = new Object();
const bumble = {};

bumble.id = "213abc"
bumble.name = "John"
bumble.isLoggedIn = false;

// console.log(bumble);

const user = {
    eamil : "abc@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Rohan",
            lastName: "Mishra"
        }
    }
}

// console.log(user["fullName"]["userFullName"]["firstName"]);
// console.log(user.fullName.userFullName.lastName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( obj1, obj2); --> Assign obj2 to obj1 and then obj1 is assigned to obj3, so obj1 got changed.
// const obj3 = Object.assign({}, obj1, obj2); //obj1 and obj2 is assigned to empty obj and that empty obje is assigned to bj3.

const obj3 = {...obj1, ...obj2} // -->most used syntax for combining objects

// console.log(obj1);
// console.log(obj3);

// console.log(bumble);
// console.log(Object.keys(bumble));   
// console.log(Object.values(bumble));   
// console.log(Object.entries(bumble));   

// console.log(bumble.hasOwnProperty('isLoggedIn'));


const course ={
    name: "java means Shivansu",
    price: "2000",
    instructor: "Shivansu Kumar"
}

// course.courseInstructor

const {instructor} = course
const {price : p} = course
console.log(instructor);
console.log(p);

