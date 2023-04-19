
function updateProductList(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    for (const [index, product] of products.entries()) {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <article class="product-card">
          <p>Name: ${product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Color: ${product.color}</p>
          <button class="btn delete-btn" data-index="${index}" type="button">Delete</button>
          <a href="edit.html"><button class="btn edit-btn" data-index="${index}" type="button">Edit</button></a>
        </article>
      `;

        //........Видалення
        const deleteBtn = productElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            const productIndex = deleteBtn.dataset.index;
            products.splice(productIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
            updateProductList(products);
        });


        //........Редагування
        const editButtons = productElement.querySelectorAll('.edit-btn');
        editButtons.forEach((button) => {
            const productIndex = button.dataset.index;
            button.addEventListener('click', () => {
                localStorage.setItem('currentProductIndex', productIndex);
            });
        });

        productList.appendChild(productElement);
    }

}

const products = JSON.parse(localStorage.getItem('products')) || [];
updateProductList(products);



