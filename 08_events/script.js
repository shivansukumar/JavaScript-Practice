// document.getElementById('owl').onclick = function () {
//     alert("Owl Clicked");
// }
// aattackEvent()
// jQuery -  on


// IMPORTANT EVENT LISTENERS
// type, timeStamp, defautlPrevented
// target, toElement, sourceElement.
// clientX, clientY, screenX, screenY --> Interview perspective.

// document.getElementById('images').addEventListener('click', function (e) {
//     console.log('clicked inside the ul');
//     alert('owl clcked Again');
// }, false)

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log('owl clicked');
//     e.stopPropagation(); //stop the bubbling effect.
// }, false)

// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     // console.log("google clicked")
// }, false)

document.querySelector('#images').addEventListener('click', function (e) {
    // console.log(e);
    if (e.target.tagName == 'IMG') {
        console.log(e.target.parentNode);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
})

