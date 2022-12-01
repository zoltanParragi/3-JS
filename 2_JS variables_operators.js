var a = 2;
let b = 3;
const c = [1, 2, 3, 4];
c.push(5); // Konstans direkt értékadással nem változtatható, de tömbhöz lehet elemet adni, törölni, ...!!!
b++;
console.log("A c utolsó eleme már: " + c[c.length - 1]);
// var -> beépített bug - nem használjuk, let -> változóértéke átírható, const -> konstans - majdnem

b = "megváltozott"
console.log(b);

let d = {}
let e = 10 > 20

console.log("Típusok, a: " + typeof (a) + ", b: " + typeof (b) + ", c: " + typeof (c) + ", d: " + typeof (d) + ", e: " + typeof (e));

// prototpus, pl. az array prototípus tartalmazza a length property-t
console.log("A c tömb hossza: " + c.length);

// feltételes kiíratás
10 === 10 && console.log("feltételes kiíratás")

document.write("Some text with document.write()");