// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, 
// успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів



class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }
    print(text) {
        let res = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ' && this.ink > 0) {
                res += text[i];
                this.ink -= 0.5;
            } else if (text[i] === ' ') {
                res += ' ';
            }
        }
        return console.log('%c' + res, `color: ${this.color}`);
    }
}

const marker = new Marker('green', 5);
marker.print('Hello Worlddd !');


class FuelMarker extends Marker {
    constructor(color, ink, capacity) {
        super(color, ink);
        this.capacity = capacity;
    }

    fuel(amount) {
        this.ink = this.ink + amount;
        if (this.ink > this.capacity) {
            return console.log("Enough");
        }
        return console.log(`Ink level: ${this.ink}`);
    }

}

const marker2 = new FuelMarker('green', 5, 100);
marker2.fuel(7)
