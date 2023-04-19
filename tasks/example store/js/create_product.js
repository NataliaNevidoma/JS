function handleCreateButtonClick() {

    // 1
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const color = document.getElementById('product-color').value;

    const product = { name, price, color };
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    products.get

    localStorage.setItem('products', JSON.stringify(products));

    window.location.href = "myproduct.html";
}

const createButton = document.getElementById('create-btn');
createButton.addEventListener('click', handleCreateButtonClick);
