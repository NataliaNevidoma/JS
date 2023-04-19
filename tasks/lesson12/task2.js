// 12-2.
// Необхідно створити власний модуль personalmodule.js, який містить функцію,
// що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера.
// Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports.
//         Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:
// Изображение



const http = require('http');
const personalmodule = require('./personalmodule');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const date = new Date().toString();
    const message = personalmodule.greetUser();
    res.write(`Date of request : ${date}<br>`);
    res.write(message);
    res.end();
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});


// const http = require('http');
// const greeting = require('./personalmodule');
// const os = require("os");

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     let userName = os.userInfo().username;

//     res.write(`Date of request : ${greeting.date}<br>`);
//     res.write(greeting.showMessage(userName));

//     res.end();
// }).listen(8000);