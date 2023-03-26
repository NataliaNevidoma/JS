// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock


const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.arr');
    const arr = [];
    for (let i = 0; i < inputs.length; i++) {
        arr.push(`${inputs[i].getAttribute('data-form')}: ${inputs[i].value}`);
    }

    outBlock.innerHTML = arr;
});
