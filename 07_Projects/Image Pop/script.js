

const throttleFunction = (func, delay) => {
    let prev = 0;

    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


const center = document.querySelector('#center');

center.addEventListener("mousemove",
    throttleFunction((details) => {
        const div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = details.clientX + 'px';
        div.style.top = details.clientY + 'px';
        div.style.overflow = "hidden";

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1635046252882-910febb5c729?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xCZm4talB2YWxib3x8ZW58MHx8fHx8")
        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1.ease,
            duration: .5
        });

        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2
        });

        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 500));














