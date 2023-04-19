const form = document.querySelector('.search-form');
const input = document.querySelector('input[type="text"]');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // заборонити стандартну поведінку форми
    const searchQuery = input.value;
    const filteredProducts = products.filter((product) => {
        return product.name.includes(searchQuery);
    });
    updateProductList(filteredProducts);
});