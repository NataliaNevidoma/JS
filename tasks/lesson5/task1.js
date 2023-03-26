// 1. 
// Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    static getLength2(radius) {
        return 2 * Math.PI * radius;
    }

    getObject() {
        return new Circle(this.x, this.y, this.radius);
    }

    static getCircleByParams(x, y, radius) {
        return new Circle(x, y, radius);
    }

    pointInCircle(x, y, radius) {
        const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        if (distance <= this.radius ** 2) {
            return true
        } return false
    }

    toString() {
        return `Circle: (x=${this.x}, y=${this.y}), radius=${this.radius}`;
    }
}


let circle = new Circle(1, 1, 2);
console.log(circle.toString());

console.log(circle.getLength());

console.log(Circle.getLength2(2));

console.log(circle.pointInCircle(1, 1, 2))

let copy = circle.getObject();
console.log(copy.toString()); 