// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// /^(\d{4})-\d{4}-\d{4}-\d{4}$/   /^(\d{4}-){3}\d{4}$/;

function validCard(cardNumber) {

    const regex = /^\d{4}\-\d{4}-\d{4}-\d{4}$/;

    if (regex.test(cardNumber)) {
        return "Number is correct";
    } else {
        return "Number is incorrect";
    }
}

console.log(validCard("9999-9999-9999-9999"))