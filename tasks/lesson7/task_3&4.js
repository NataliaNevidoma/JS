// 7-3. 
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.

const container = document.querySelector(".box");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    container.style.backgroundColor = "blue";
});

const btn2 = document.getElementById("btn2");


btn2.addEventListener("dblclick", function () {
    container.style.backgroundColor = "pink";
});

const btn3 = document.getElementById("btn3");

btn3.addEventListener("mousedown", function () {
    container.style.backgroundColor = "brown";
});

btn3.addEventListener("mouseup", function () {
    container.style.backgroundColor = "white";
});


const link = document.getElementById("link");

link.addEventListener("mouseover", function () {
    container.style.backgroundColor = "yellow";
});


link.addEventListener("mouseout", function () {
    container.style.backgroundColor = "white";
});



// 7-4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
//  Можуть видалятися всі елементи в будь-якому порядку.

const select = document.getElementById("mySelect");
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
    select.remove(select.selectedIndex);
});

