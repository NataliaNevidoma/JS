// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив,
// занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ... // 5
// ...
// console.log(arr) // [4, 2, 1, 6, 3, 2]



let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Визначаємо найбільш повторюваний елемент
let data = "";
let maxCount = 0;
for (let i = 0; i < arr.length; i++) {
    let count = arr.filter(el => el === arr[i]).length;
    if (count > maxCount) {
        data = arr[i];
        maxCount = count;
    }
}
console.log(data)
// Видаляємо найбільш повторюваний елемент
let newArr = arr.filter(el => el !== data);

console.log(newArr)