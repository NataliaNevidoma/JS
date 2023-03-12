//     (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка.
//  Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.



// Плацкартный вагон (54 места) Номера нижних мест — нечётные, а верхних — чётные. Места с 37 по 54 — боковые.


function carriage(n) {
    if (n >= 37 && n <= 54 && n % 2 === 0) {
        return " Ви маєте бокове верхнє місце та ваше купе номер " + (10 - Math.ceil((n - 36) / 2));
    }
    if (n >= 37 && n <= 54 && n % 2 !== 0) {
        return " Ви маєте бокове нижнє місце та ваше купе номер " + (10 - Math.ceil((n - 36) / 2));
    }
    if (n >= 1 && n <= 36 && n % 2 === 0) {
        return " Ви маєте верхнє місце та ваше купе номер " + Math.ceil(n / 4)
    }
    if (n >= 1 && n <= 36 && n % 2 !== 0) {
        return " Ви маєте нижнє місце та ваше купе номер " + Math.ceil(n / 4)
    }
}

console.log(carriage(39))