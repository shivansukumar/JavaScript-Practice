// var c = 300
let a = 100

if(true) {
    let a = 10;
    // const b = 20;
     c = 30;
    //  console.log("Inner: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "Shivansu";
    // console.log("Inside function one");

    function two() {
        const webSite = "youtube"
        console.log(userName);
    }
    // console.log(webSite);
    two();
}
// one();

if(true) {
    const userName = "Shivansu";
    if(userName === "Shivansu") {
        const website =  "youtube"
        // console.log(userName +" "+ website);
    }
}

// +++++++++++++ Intriguing ++++++++++++
  console.log(addOne(5));

  function addOne(num) {
    return num+1;
  }

  addTow(5);
  const addTow = function(num) {
    return num+2;
  }