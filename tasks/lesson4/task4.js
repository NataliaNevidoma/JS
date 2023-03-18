// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
//  Функція повертає назву місяця відповідно до введеного номера місяця.
//  У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name
    }
}

function showMonthName(month) {
    let arr = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]
    try {
        for (let i = 1; i <= arr.length; i++) {
            if (month > 0 && month <= arr.length) {
                return arr[month - 1]
            }
            throw new MonthException("Incorrect month number")
        }
    } catch (error) {
        return `${error.name} ${error.message}`
    }
}

console.log(showMonthName(1))

//instance = new MonthException("Incorrect month number")
//console.log(instance.name)
//console.log(instance)