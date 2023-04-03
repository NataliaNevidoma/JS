// 8-6. 
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів,
//  що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку,
//   включаючи числа з плаваючою комою (наприклад, 3.4).

// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// checkLogin('ee1*1ret3');
// false 
// //1, 1, 3

function checkLogin(str) {

    const regex = /^(?=.{2,10}$)[a-zA-Z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)*$/;
    const match = str.match(/\d+(\.\d+)?/g);

    if (regex.test(str)) {

        console.log(`${match.join(', ')}`);
        return true;
    } else {

        console.log(`${match.join(', ')}`);
        return false;
    }
}
console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));




// /^[a-zA-z]{1}([a-zA-Z]|\d+(?:\.\d+)?){1,9}$/;     /^(?=.{2,10}$)[a-zA-Z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)*$/