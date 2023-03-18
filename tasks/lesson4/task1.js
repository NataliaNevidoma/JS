// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) –
//  порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
//  Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву.
//  Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
    try {
        if (typeof first !== "number" || typeof second !== "number") {
            throw new TypeError("First та second повинні бути числами.");
        } else if (first >= arr.length || second >= arr.length) {
            throw new RangeError("Числа довщі за масив");
        } else {
            return arr[first - 1] + arr[second - 1];
        }
    } catch (exception) {
        return exception.message;
    }
}

const result = sumSliceArray([1, 5, 3, 4, 5], 1, 7);
console.log(result);
