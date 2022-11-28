
function showMessage4(name) {
    alert("Button 6 message: Hi, " + name + "!");
}
document.querySelectorAll('button')[5].onclick = function () {
    showMessage4("Mr Garfield");
};