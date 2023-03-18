// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height
//  і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
//  якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.


function calcRectangleArea(width, height) {
    try {
        if (typeof width !== "number" || typeof height !== "number") {
            throw new TypeError("width and height must be numbers.")
        }
        return width * height;
    } catch (exception) {
        return exception.message;
    }
}

console.log(calcRectangleArea());