// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”


// var ds = "Добрый День и Добрый Вечер";
// var ns = ds.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3$2$1');

let str = "Java Script";
let strChange = str.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3,$2$1');

console.log(strChange)