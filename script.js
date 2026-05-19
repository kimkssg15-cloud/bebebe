// === Глобальная корзина ===
let cart = [];


// === СОХРАНЕНИЕ в LocalStorage ===
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// === ЗАГРУЗКА из LocalStorage ===
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCart();
    }
}


// === Подсчёт суммы (стрелочная функция) ===
const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => total += item.price);
    return total;
};


// === Удаление товара ===
const removeFromCart = (index) => {
    cart.splice(index, 1);
    renderCart();
    saveCartToLocalStorage();
};


// === Очистка корзины ===
const clearCart = () => {
    cart = [];
    renderCart();
    saveCartToLocalStorage();
};


// === Отрисовка корзины ===
const renderCart = () => {
    const cartList = document.querySelector("#cart-items");
    const totalElement = document.querySelector("#total");

    if (!cartList || !totalElement) return;

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price} руб. `;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.addEventListener("click", () => {
            removeFromCart(index);
        });

        li.appendChild(deleteBtn);
        cartList.appendChild(li);
    });

    totalElement.textContent = "Итого: " + calculateTotal() + " руб.";
};


// === Добавление товара ===
const addToCart = (product) => {
    cart.push(product);
    renderCart();
    saveCartToLocalStorage();
};


// === Обработчики кнопок "Добавить" ===
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.closest(".product");

        const product = {
            name: productElement.dataset.name,
            price: Number(productElement.dataset.price)
        };

        addToCart(product);
    });
});


// === Кнопка "Очистить корзину" ===
const clearCartButton = document.querySelector("#clear-cart");
if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
}


// === Кнопка "Оплатить" ===
const payButton = document.querySelector("#pay-button");
if (payButton) {
    payButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Корзина пуста!");
        } else {
            alert("Покупка прошла успешно!");
            clearCart();
        }
    });
}


// === ФИЛЬТР товаров ===
const filter = document.querySelector("#categoryFilter");
const products = document.querySelectorAll(".product");

if (filter) {
    filter.addEventListener("change", () => {
        const selected = filter.value;

        products.forEach(product => {
            const category = product.dataset.category;

            if (selected === "all" || category === selected) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}


// === ЗАГРУЗКА при старте страницы ===
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
});