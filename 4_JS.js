const claculatorButtonTexts = [...Array(10).keys(), "+", "-", "(", ")", "*", "/", ".", "Del", "C", "="]
claculatorButtonTexts.forEach((text) => {
    document.querySelector('body > div > div:last-child').innerHTML += `<button>${text}</button>`
})

let btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
        const display = document.querySelector('input')
        const clickedBtnText = btns[i].innerText
        if (clickedBtnText === "C") {
            display.value = ""
        } else if (clickedBtnText === "=") {
            try {
                display.value = eval(display.value)
            } catch (error) {
                alert('No hacking!')
                display.value = ''
            }
        } else if (clickedBtnText === "Del") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btns[i].innerText
        }
    }
}


console.log('getElementById: ')
console.log(document.getElementById('divToModify'));
console.log('getElementsByTagName: ')
console.log(document.getElementsByTagName('div'));
console.log('querySelector: ')
console.log(document.querySelector('div'))
console.log('querySelectorAll: ')
console.log(document.querySelectorAll('div'))
console.log('Array.from(): ')
console.log(Array.from(document.querySelectorAll('div')))


let divToModify = document.getElementById('divToModify')
divToModify.title = "divToModify"
divToModify.innerText = "divToModify text, Click me!"
divToModify.onclick = () => { alert("divToModify onclick") }
console.log("Array(10) result:");
console.log(Array(10));

