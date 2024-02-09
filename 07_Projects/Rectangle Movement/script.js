
// let ste = 1;
let mouseActive = true;

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(details) {
    var rect = document.querySelector(".rectangle");

    if (mouseActive) {
        var xVal = gsap.utils.mapRange(
            0,
            window.innerWidth,
            100 + rect.getBoundingClientRect().width / 2,
            window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
            details.clientX
        );

        gsap.to(rect, {
            left: xVal,
            // up: details.clientY + "px",
            ease: Power3,
        });
    }
}

var code = document.querySelector(".rectangle"); // Selecting the element with the class "rectangle"

window.addEventListener("click", function () {
    mouseActive = !mouseActive;
    if (mouseActive == false) {
        code.innerHTML = "<h3><em>Color Changing Rectangle</em ></h3 > "; // Fixing the case of innerHTML and closing tags
    } else {
        code.innerHTML = "";
    }
});
