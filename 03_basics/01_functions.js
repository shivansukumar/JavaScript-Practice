
function syaMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("U");
}

// syaMyName()

// function addNumber(num1, num2) {
//     console.log(num1+num2);
// }
// addNumber(2,9);


function addNumber(num1, num2) {
    let result = num1+num2;
    return result;
}
const result = addNumber(2,5);
// console.log(result);


function message(username) {
    if(username===undefined) {
        return console.log("Please enter a username")
    }
    return `${username} just logged in`
}

// const msg = message("Shivansu");
// console.log(msg);
// console.log(message(""));

function calculateCartPrice(val1, val2, val3, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 1000, 2000));

const user = {
    username : "Shivnasu",
    sallary : 20000000,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and sallary is ${anyObject.sallary}`)
}

handleObject(user)
handleObject({
    username : "Anshu",
    sallary : 3000000,
})

const array = [200, 400, 100, 600];

function returnSecondValue(array) {
    return array[1];
}


