// if, else, else if

//switch
console.log("Be careful with  switch. Here are two usage.")
console.log("switch 1:");
let a = 4;

switch (a) {
    case 3:
        console.log("a === 3");
        break;
    case 4:
        console.log("a === 4");
        break;
    case 5:
        console.log("a === 5");
        break;
    default:
        console.log("a nem 3 vagy 4 vagy 5")
}


console.log("switch 2:");
let b = 15;

switch (true) {
    case b < 10:
        console.log("b kisebb mint 10");
        break;
    case b < 20:
        console.log("b kisebb mint 20");
        break;
    case b < 30:
        console.log("b kisebb mint 30");
        break;
    default:
        console.log("b nagyobb vagyegyenlő mint 30")
}

let arr = ["element1", "element2", "element3", "element4",]

console.log("for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("while loop:");
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("forEach");
arr.forEach(function (e) {
    console.log(e);
})

console.log("map");
let result = arr.map(function (e) {
    return (e + "map")
}).join("**")
console.log(result);