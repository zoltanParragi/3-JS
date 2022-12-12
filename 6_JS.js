//a.) It returns a js promise object:
console.log("a:");
const a = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(a);

//b.) Here the promise object is converted into json, then shown in the console
console.log("b:");
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json()) // res is the returned value of the finished call
    .then((data) => console.log(data)) //data is the returned value of the previous .then() method

//c.) Sending data with POST and calculating response in the php file

console.log("c:");
document.forms[0].onsubmit = (e) => {
    e.preventDefault() // <-- if the button stays inside a form, the form is submitted and the page is reloaded. When the page is reloaded usually the current state of the form inputs is lost.

    const data = {
        email: document.getElementById("email").value,
        pw1: document.getElementById("pw1").value,
        pw2: document.getElementById("pw2").value
    }
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //The JSON.stringify() method converts a JavaScript value to a JSON string. Data can be sent to a server in the format of JSON string only.  https://www.w3schools.com/js/js_json_stringify.asp
    }
    fetch('6_JS.php', config)
        .then(res => res.json()) //res.json() helyén: response object, res.json() ezt adja vissza: fulfilled Promise, 
        .then(res => {  //itt jelenik meg BE-ből jövő obj/tömb eredeti formában a => után
            document.querySelectorAll(".error-message").forEach(e => {
                e.innerText = ""
            })
            if (res.status === 'ok') {
                alert("ok")
            } else {
                for (let attr in res) {
                    document.querySelector("." + attr).innerText = res[attr]
                }
            }
        })
}
