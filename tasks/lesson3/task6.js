// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.


function calc(a, b, op) {
    if (Number.isInteger(op)) {
        switch (op) {
            case 1:
                result = a - b;
                break;
            case 2:
                result = a * b;
                break;
            case 3:
                result = a / b;
                break;
            default:
                return result = a + b;
        }
        if (result != undefined)
            return result;
    }
}

console.log(calc(10, 5, 3))