// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
// У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
//  У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge(name, age, status) {
    try {

        if (!name) {
            throw new Error("The field is empty! Please enter your name");
        }
        if (!age) {
            throw new Error("The field is empty! Please enter your age");
        }
        if (isNaN(Number(age))) {
            throw new TypeError("Invalid age value!.");
        }
        if (!status) {
            throw new Error("The field is empty! Please enter your status");
        }
        if (status !== "admin" && status !== "moderator" && status !== "user") {
            throw new EvalError("Invalid status value!");
        }

        if (age < 18 || age > 70) {
            throw new RangeError("Invalid age value!");
        }
        return "Welcome to the movie!";

    } catch (exception) {
        return (exception.name + ": " + exception.message);
    }

}
const result = checkAge("Nat", 29, "dkjfh");
console.log(result);
