const filterBtn = document.querySelector('.filter-btn');
const colorSelect = document.querySelector('#color-select');

filterBtn.addEventListener('click', () => {
    const selectedColor = colorSelect.value;
    let filteredProducts = products;

    if (selectedColor) {
        filteredProducts = products.filter((product) => product.color === selectedColor);
    }

    updateProductList(filteredProducts);
});


const countBtn = document.querySelector('.count-btn');
countBtn.addEventListener('click', () => {
    const productCards = document.querySelectorAll('.product-card');
    let totalPrice = 0;
    productCards.forEach(card => {
        const priceText = card.querySelector('p:nth-child(2)').textContent;
        const price = parseFloat(priceText.split(' ')[1]);
        totalPrice += price;
    });
    const countElement = document.querySelector('.count p');
    countElement.textContent = `Count total price: ${totalPrice}`;
});

