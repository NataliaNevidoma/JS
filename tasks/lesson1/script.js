console.log("Nevidoma")

// 3.
//   a) оголосіть дві змінні;
//   b) запишіть у змінні будь-які значення;
//   c) виведіть на екран значення змінних;
//   d) скопіюйте значення однієї змінної в іншу;
//   e) виведіть на екран значення змінних.
let a = 5;
let b = 7;
document.write("Значення змінних: ", a, " ", b)
a = b;
document.write("<br \/> Після копіювання значення: ", a, " ", b)

// 4.
// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”.
//  Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

const cat = {
    name: "Dina",
    age: 10,
    likeToEat: true,
    likeToSleep: undefined,
    likeToPlay: null
};

// 5. 
// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку.
//  Результат запишіть в змінну isAdult і виведіть в консоль.

const isAdult = confirm("Are you is adult?");
console.log(isAdult)

// 6.
// В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
//         - ваше ім’я
//         - ваше прізвище
//         - навчальна група
//         - ваш рік народження.
// Присвойте змінним відповідні значення.
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.


let myName = "Natalia";
let myLastName = "Nevidoma";
let groupJS = true;
let myYear = 1993;
let goodCharacter = null;
let likeBeer;

console.log(myYear, groupJS, myName, myLastName)
console.log(typeof goodCharacter, typeof likeBeer)

// 7.
// За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін,
// імейл та пароль, і виводить на екран повідомлення із введеними даними.
//  Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
const login = prompt("Write your login");
const mail = prompt("Write your mail");
const yourPassword = prompt("Write your password");
alert(`Dear ${login} your email is ${mail} your password is ${yourPassword}`);

// 8.
// Напишіть скрипт, який вираховує кількість секунд в годині,
//  в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран

const secInAMin = 60;
const minInAnHour = 60;
const secInAnHour = secInAMin * minInAnHour;
const hoursInADay = 24;
const secInADay = secInAnHour * hoursInADay;
const daysInAMonth = 30;
const secInAMonth = secInADay * daysInAMonth;
document.write("<br \/> Kількість секунд в годині: ", secInAnHour, "<br \/> Kількість секунд в добі: ", secInADay,
    "<br \/> Kількість секунд в місяці: ", secInAMonth)

