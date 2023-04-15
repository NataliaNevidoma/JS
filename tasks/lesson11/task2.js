// 11-2.
// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел.
// Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву,
// якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"


function calcArrProduct(arr) {
    return new Promise(function (resolve, reject) {
        const checkAge = (arr) => typeof arr === "number";
        if (!arr.every(checkAge)) {
            reject('Error! Incorrect array!');
        } else {
            resolve(arr.reduce(
                (a, b) => a * b));

        }

    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
