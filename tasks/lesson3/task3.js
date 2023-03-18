// 3.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно,
//  при цьому a виводится 1 раз, число а+1 - два рази і т.д.


function numbersFromTo(a, b) {
    if (a < b) {
        for (let count = a; count <= b; count++) {
            for (let j = 0; j < count - a + 1; j++) {
                console.log(count);
            }
        }
    }
}


numbersFromTo(1, 3);