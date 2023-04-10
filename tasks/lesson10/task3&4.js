// 10-3.
// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(/* ваш код */) {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0


function mul(...args) {
    let argsFilter = args.filter(n => typeof n === 'number')
    console.log(argsFilter)
    return argsFilter.length ? argsFilter.reduce((acc, val) => acc * val) : 0;

}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


// 10-4.
// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback((function () {
//          return this.data + "";
//       }).bind(this));
//    }
// };
// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//    },
//    notification: function () {
//       return (function (callback) {
//          this.result = callback();
//       }).bind(this);
//    }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "");
    }
};

let client = {
    server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => {
            this.result = callback();
        };
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

