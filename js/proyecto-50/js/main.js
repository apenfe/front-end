window.addEventListener("DOMContentLoaded", () => {

    let layoutProducts = document.querySelector(".layout__products");

    let products = [
        {
            id: 0,
            title: "camiseta",
            img: "./img/product-1.jpg",
            stock: 5,
            price: 14.99
        },
        {
            id: 1,
            title: "camara",
            img: "./img/product-2.jpg",
            stock: 7,
            price: 49.99
        },
        {
            id: 2,
            title: "portatil",
            img: "./img/product-3.jpg",
            stock: 8,
            price: 499.99
        },
        {
            id: 3,
            title: "zapatillas",
            img: "./img/product-4.jpg",
            stock: 3,
            price: 29.99
        },
    ];

    let cart = [];

    function addCart(id) {

        let cartProduct = findCart(id);
        let product = findProduct(id);

        if (cartProduct == null) {

            cart.push({
                id: id,
                quantity: 1
            });

        } else {
            cartProduct.quantity++;

            if (cartProduct.quantity > product.stock) {
                alert("solo tenemos " + product.stock + " disponnibles.");
                cartProduct.quantity = product.stock;
            }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);

    }

    function findCart(id) {

        let exists = cart.findIndex(productCart => productCart.id == id);

        if (exists != -1) {
            return cart[exists];
        } else {
            return null;
        }

    }

    function findProduct(id) {
        return products.find(product => product.id == id);
    }

    function showPoducts() {

        products.forEach(producto => {
            layoutProducts.innerHTML += `
            <article class="products__product">

                <div class="product__container-img">
                    <img class="product__img" src="${producto.img}" />
                </div>

                <div class="product__title">${producto.title}</div>
                <div class="product__price">${producto.price}</div>

                <button class="product__btn" data-id="${producto.id}">Comprar</button>
            </article>
            `;
        });

        let allBtnBuy = document.querySelectorAll(".product__btn");

        allBtnBuy.forEach(btn => {

            btn.addEventListener("click", () => {

                let productId = parseInt(btn.getAttribute("data-id"));

                let product = findProduct(productId);

                if (product.stock > 0) {

                    addCart(productId);

                }

            });

        });

    }

    showPoducts();

});