// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині.
//  Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
//  тип операційної системи, час роботи системи в хвилинах (використати модуль OS),
//  поточну робочу директорію і назву файлу сервера (використати модуль path).



const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>System information</h1>');

    const username = os.userInfo().username;
    const osType = os.type();
    const uptime = Math.floor(os.uptime() / 60);
    const currentDir = process.cwd();
    const serverFilename = path.basename(__filename);

    res.write(`<p>Current user name: ${username}</p>`);
    res.write(`<p>OS Type: ${osType}</p>`);
    res.write(`<p>System work time (minutes): ${uptime}</p>`);
    res.write(`<p>Current work directory: ${currentDir}</p>`);
    res.write(`<p>Server file name: ${serverFilename}</p>`);

    res.end();
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});