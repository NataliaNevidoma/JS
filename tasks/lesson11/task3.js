
// 11-3.
// Створіть наступний асинхронний ланцюжок promise:
// new Promise(function (resolve, reject) {
//    // Запитуємо у користувача number за допомогою prompt()
//    // Якщо користувач ввів не число - викликаємо reject()
//    // Якщо користувач ввів число- викликаємо resolve(number)
// }).catch(function (error) {
//    return new Promise(function (resolve, reject) {
//       // Запитуємо у користувача number, до тих пір, поки він його не введе
//       // Після вводу числа - викликаємо resolve(number)
//    });
// }).then(function (result) {
//    // Вивід number у консоль
// });


new Promise(function (resolve, reject) {
    const number = prompt("Введіть число:");
    if (isNaN(number)) {
        reject("Має бути введено число!");
    } else {
        resolve(Number(number));
    }
})
    .catch(function (error) {
        console.error(error);
        return new Promise(function (resolve, reject) {
            let number;
            do {
                number = prompt("Введіть число:");
            } while (isNaN(number));
            resolve(Number(number));
        });
    })
    .then(function (result) {
        console.log("Вaше число:", result);
    });