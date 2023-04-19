
const products = JSON.parse(localStorage.getItem('products')) || [];
const currentProductIndex = localStorage.getItem('currentProductIndex');
const currentProduct = products[currentProductIndex];

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productColorSelect = document.getElementById('product-color');

productNameInput.value = currentProduct.name;
productPriceInput.value = currentProduct.price;
productColorSelect.value = currentProduct.color;

const editBtn = document.getElementById('edit');
editBtn.addEventListener('click', () => {
    const updatedProduct = {
        name: productNameInput.value,
        price: productPriceInput.value,
        color: productColorSelect.value,
    };

    products[currentProductIndex] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'myproduct.html';
});






