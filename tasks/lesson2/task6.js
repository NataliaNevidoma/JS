// 6. 
// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.


if (new Date().getHours() >= 5 && new Date().getHours() <= 11) {
    document.getElementById("greeting").innerHTML = "Доброго ранку!";
}
if (new Date().getHours() > 11 && new Date().getHours() <= 17) {
    document.getElementById("greeting").innerHTML = "Доброго дня!";
}
if (new Date().getHours() > 17 && new Date().getHours() <= 23) {
    document.getElementById("greeting").innerHTML = "Доброго вечора, ми з України!";
}

// Другий спосіб з тернарним оператором:

// document.getElementById("greeting").innerHTML =
//     new Date().getHours() >= 5 && new Date().getHours() <= 11
//         ? "Доброго ранку!"
//         : new Date().getHours() > 11 && new Date().getHours() <= 17
//             ? "Доброго дня!"
//             : new Date().getHours() > 17 && new Date().getHours() <= 23
//                 ? "Доброго вечора, ми з України!"
//                 : "";

