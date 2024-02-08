var rect = document.querySelector('#center');

rect.addEventListener("mousemove", function (details) {
    // console.log(rect.getBoundingClientRect());
    var rectangleLocation = rect.getBoundingClientRect();
    var xPosition = details.clientX;
    var yPosition = details.clientY;
    var insideRectValue = xPosition - rectangleLocation.left;
    const middle = rectangleLocation.width / 2;

    if (insideRectValue < middle) {
        var redColor = gsap.utils.mapRange(0, middle, 255, 0, insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${redColor})`,
            ease: Power4,
        })
    }
    else {
        var blueColor = gsap.utils.mapRange(middle, rectangleLocation.width, 0, 255, insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(0,${blueColor}, 0)`,
            ease: Power4,
        })
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: '#b23548e1'
    })
})