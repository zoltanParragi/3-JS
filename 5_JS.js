
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

const xhr3 = new XMLHttpRequest;
xhr3.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr3.send();
xhr3.onreadystatechange = () => {
    if (xhr3.status === 200 && xhr3.readyState === 4) {
        const data = JSON.parse(xhr3.response)

        document.querySelector('body>div:nth-child(3)>div').innerHTML += `
        <table>
            <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>                 
        </table>`

        data.forEach(e => {
            document.querySelector('body>div:nth-child(3)>div>table').innerHTML += `
                <tr>
                    <td>${e.userId}</td>
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                    <td>${e.completed}</td>
                </tr>
            `
        })
    }
}

