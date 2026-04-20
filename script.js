let cart = [];

const addButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector("#cart-items");
const totalElement = document.querySelector("#total");
const clearCartButton = document.querySelector("#clear-cart");
const payButton = document.querySelector("#pay-button");
const categoryFilter = document.querySelector("#categoryFilter");
const products = document.querySelectorAll(".product");

const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
};

const renderCart = () => {
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.name + " — " + item.price + " руб. ";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            removeFromCart(index);
        });

        li.appendChild(deleteButton);
        cartItems.appendChild(li);
    });

    totalElement.textContent = "Итого: " + calculateTotal() + " руб.";
};

const addToCart = (product) => {
    cart.push(product);
    renderCart();
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    renderCart();
};

const clearCart = () => {
    cart = [];
    renderCart();
};

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.closest(".product");

        const product = {
            name: productElement.dataset.name,
            price: Number(productElement.dataset.price)
        };

        addToCart(product);
    });
});

clearCartButton.addEventListener("click", () => {
    clearCart();
});

payButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Корзина пуста");
    } else {
        alert("Покупка прошла успешно!");
        clearCart();
    }
});

categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;

    products.forEach(product => {
        const productCategory = product.dataset.category;

        if (selectedCategory === "all" || productCategory === selectedCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});