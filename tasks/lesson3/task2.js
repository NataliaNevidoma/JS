// 2.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
    let arr = [];
    for (count = start; count <= end; count++) {
        arr.push(count)
    }
    return arr
}
let arr = createArray(2, 9);
console.log(arr);
