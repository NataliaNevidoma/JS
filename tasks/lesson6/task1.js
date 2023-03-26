// 1. 
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5

let list = document.getElementById("list");

let first = list.children[0].innerHTML;
let second = list.children[4].innerHTML;
let third = list.children[1].innerHTML;
let fourth = list.children[3].innerHTML;
let fifth = list.children[2].innerHTML;

let list2 = [first, second, third, fourth, fifth]

alert(list2)