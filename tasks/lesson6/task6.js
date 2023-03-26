// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const colors = document.querySelectorAll(".color");
const outprice = document.getElementById("outprice");
const sizes = document.querySelectorAll(".size");

colors.forEach((color) => {
    color.addEventListener("click", () => {

        price = color.getAttribute("data-price");
        outprice.innerHTML = price;

        colors.forEach((c) => {
            c.classList.remove("active");
        });
        color.classList.add("active");
    });
});

sizes.forEach((size) => {
    size.addEventListener("click", () => {
        outprice.innerHTML = parseInt(price);

        if (size.getAttribute("data-size") == 44) {
            outprice.innerHTML = parseInt(price) + 50;
        }

        sizes.forEach((s) => {
            s.classList.remove("active");
        });
        size.classList.add("active");
    });
});