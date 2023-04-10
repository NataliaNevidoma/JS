// 10-5.
// Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини.
//  Використовуючи ці масиви, функція повинна створювати об'єкт типу Map,
//   ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"


let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keysArray, valuesArray) {
    let obj = new Map();;
    for (let i = 0; i < keysArray.length; i++) {
        obj.set(keysArray[i], valuesArray[i]);
    }
    return obj
}

let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"



// 10-6.
// За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції.
// Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
// На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику).
// var arr = [];

// for (var i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2




let arr = [];

for (let i = 0; i <= 2; i++) {
    arr[i] = function () {
        console.log(i);
    };
}

arr[0](); // 0
arr[arr.length - 1](); // 2