//  if
const isUserloggedInt = true;
const temperature = 41;

// if(2=="2") {
//     console.log("If statemte")
// }

// console.log("temperature is greater than 40")

const month = 3;

switch(month) {
    case 1 :
        console.log("Januaray");
        break;
    case 2 :
        console.log("Feburary");
        break;
    case 3 :
        // console.log("March");
        break;
    default:
        console.log("Default case mathc");
        break;
}

// falsy vlaues
// false, 0, -0, BigInt )n, "", nul, undefined, NaN

// truue values are those which are not false

// Nullis Coalesccing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

// Terniary Operator



console.log(val1);