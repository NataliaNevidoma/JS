// 2. 
// Є такий код:

// let x = 1;
// let y = 2;

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""

// let res3 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""

let x = 1;
let y = 2;

let res1 = (x).toString() + (y).toString();
console.log(res1);
console.log(typeof res1);

let res2 = (y > x).toString();
console.log(res2);
console.log(typeof res2);

let res3 = (y).toString() > (x).toString();
console.log(res3);
console.log(typeof res3);

let res4 = Number.isNaN(x) + Number.isNaN(y);
console.log(res4);
console.log(typeof res4);