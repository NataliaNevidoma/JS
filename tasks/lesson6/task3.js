// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML - сторінки таку структуру з тегів і їх атрибутів.
// < body >
//     <main class="mainClass check item" >
//         <div id="myDiv">
//             <p>First paragraph</p>
//         </div>
//  </main >
// </body >


let main = document.createElement("main");
let box = document.createElement("div");
let paragraph = document.createElement("p");

main.setAttribute("class", "mainClass check item");
box.setAttribute("id", "myDiv");
paragraph.innerHTML = "First paragraph";

box.appendChild(paragraph);
main.appendChild(box);
document.body.appendChild(main);