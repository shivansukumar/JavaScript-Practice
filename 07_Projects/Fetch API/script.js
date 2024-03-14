const URL = "https://cat-fact.herokuapp.com/facts"
let promise = fetch(URL);
console.log(promise);

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data....")
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     // console.log(data[1].text);
//     factPara.innerText = data[1].text;
// }

function getFacts() {
    fetch(URL).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            factPara.innerText = data[2].text;
        });
}
btn.addEventListener("click", getFacts);
// getFacts();