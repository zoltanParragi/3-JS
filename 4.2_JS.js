
function calculateLogarithm() {
    let a = document.getElementById('logBase').value
    let b = document.getElementById('logArg').value
    let logValue = Math.log(b) / Math.log(a)
    document.getElementById('logResult').innerText = logValue
}

document.querySelector('body > div#log > div > button').onclick = () => { calculateLogarithm() };