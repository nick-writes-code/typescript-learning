console.log('Hello TypeScript!');
function squareOf(n) {
    return n * n;
}
console.log(squareOf(2));
// console.log(squareOf('z'))
/* Unknown */
let a = 30;
let b = a === 123;
// let c = a + 10
if (typeof a === 'number') {
    let d = a + 10;
}
/* Type literals */
let bool;
// bool = false
let five = 5;
// five = 6 // Type '6' is not assignable to type '5'
/* Numbers */
let inf = Infinity;
inf /= 10000;
console.log(inf);
let pi = Math.PI;
pi = 3;
console.log('pi is now ' + pi);
console.log(53 / 2);
console.log(53n / 2n);
/* Symbols */
let e = Symbol('e');
const otherE = Symbol('e');
console.log(e === otherE);
