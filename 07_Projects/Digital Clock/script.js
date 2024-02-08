const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    const time = date.toLocaleTimeString();
    clock.innerHTML = `<span>TIME: ${time}</span>`
}, 1000);