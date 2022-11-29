var a = 2;
let b = 3;
const c = [1, 2, 3, 4];
c.push(5); // konstans direkt értékadással nem változtatható!!!
b++;
console.log(typeof (c) + ", utolsó elem: " + c[c.length - 1]);