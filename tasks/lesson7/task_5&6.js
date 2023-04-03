// 7-5. 
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення 
// "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".


const buttonLive = document.getElementById("myBtn");
const text = document.getElementById("text");

buttonLive.addEventListener("mouseover", myMouseover);
buttonLive.addEventListener("mousedown", myMousedown);
buttonLive.addEventListener("mouseout", myMouseout);

function myMouseover() {
    text.innerHTML += "Mouse on me!<br>";
}

function myMousedown() {
    text.innerHTML += "I was pressed!<br>";
}

function myMouseout() {
    text.innerHTML += "Mouse is not on me!<br>";
}

// 7-6.
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
// і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

function mySize() {
    document.getElementById("sizes").innerHTML =
        "Width: " + window.innerWidth + ", " + "Height: " + window.innerHeight;
}

