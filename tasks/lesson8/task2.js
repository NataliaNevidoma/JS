// 8 - 2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true


function checkEmail(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));