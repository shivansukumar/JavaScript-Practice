const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let intervalId;
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
    }

    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);


