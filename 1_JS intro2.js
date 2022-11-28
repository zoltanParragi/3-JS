
function showMessage5(name) {
    alert("Button 7 message: Hi, " + name + "!");
}

window.onload = function () {
    document.querySelectorAll('button')[6].onclick = function () {
        showMessage5("Mr HEAD");
    };
}