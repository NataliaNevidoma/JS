// 7-1. 
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.
let newWin;
function newWind() {
    newWin = window.open("", "", "width=300,height=300");
    setTimeout(function () {
        newWin.resizeTo(500, 500);
        newWin.moveBy(200, 200);
    }, 2000);

}

function closeWind() {
    setTimeout(function () {
        newWin.close();
    }, 2000);
}


// 7-2.
// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p>
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і
// змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px,
//шрифт сімейства "Comic Sans MS".

function changeCSS() {
    const paragraph = document.getElementById("text");
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Comic Sans MS";
}