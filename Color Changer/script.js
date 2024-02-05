const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        const colors = ["grey", "red", "blue", "green", "violet"];

        if (colors.includes(e.target.id)) {
            body.style.backgroundColor = e.target.id;
        }
        else {
            body.style.backgroundColor = "#212121";
        }
    })
})