2.
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const container = document.getElementById('myDiv');
const title = document.querySelector('h1');
const myList = document.getElementById('myList');
const span = document.querySelector('span');

title.style.backgroundColor = 'lightgreen';

container.children[0].style.fontWeight = "900";
container.children[1].style.color = "red";
container.children[2].style.textDecorationLine = "underline";
container.children[3].style.fontStyle = "italic";

myList.style.display = 'flex';
myList.style.flexDirection = 'row';
myList.style.listStyleType = 'none';

span.style.display = 'none';

