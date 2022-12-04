// if, else, else if

//switch

let a = 3;

switch (a) {
    case a < 10:
        console.log("a kisebb mint 10");
        break;
    case a < 20:
        console.log("a kisebb mint 20");
        break;
    case a < 30:
        console.log("a kisebb mint 30");
        break;
    default:
        console.log("a nagyobb vagyegyenlő mint 30")
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