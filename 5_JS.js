
const xhr = new XMLHttpRequest;

function displayTime() {
    xhr.open('GET', '5_JS_kiszolgalo.php');
    xhr.send();
    xhr.onload = function () {
        document.getElementById('display-time').innerText = xhr.response;
    }
    //setTimeout(displayTime, 1000)
}

document.getElementById('time-btn').onclick = displayTime;

const xhr2 = new XMLHttpRequest;

xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr2.send();
xhr2.onload = function () {
    const data = JSON.parse(xhr2.response)
    data.forEach(e => {
        document.querySelector('body>div:nth-child(2)>div').innerHTML += `<h3>${e.title}</h3>
        <p>${e.body}</p>`;
    });
}

