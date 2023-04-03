// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"


function upperCase(str) {
    if (str[0] === str[0].toUpperCase()) {
        return "String's starts with uppercase character"
    } return "String's not starts with uppercase character"
}

console.log(upperCase('RegExp'))
console.log(upperCase('regexp'))



function upperCase2(str2) {
    if (/^[A-Z]/.test(str2)) {
        return "String's starts with uppercase character";
    } return "String's not starts with uppercase character";
}

console.log(upperCase2('RegExp'))
console.log(upperCase2('regexp'))



