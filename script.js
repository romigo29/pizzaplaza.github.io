//изменение цены кнопки
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const pizzaId = button.dataset.pizzaId;
        const size = button.dataset.size;

        changePrice(pizzaId, size);
    });
});

function changePrice(pizzaId, size) {
    const prices = {
        1: {
            S: 8.99,
            M: 11.99,
            L: 14.99
        },
        2: {
            S: 9.49,
            M: 12.49,
            L: 15.49
        },
        3: {
            S: 9.99,
            M: 13.99,
            L: 16.99
        },
        4: {
            S: 10.49,
            M: 14.49,
            L: 17.49
        },
        5: {
            S: 10.99,
            M: 15.99,
            L: 18.99
        },
        6: {
            S: 11.49,
            M: 16.49,
            L: 19.49
        }
    };

    const priceElement = document.getElementById(`price_${pizzaId}`);
    priceElement.textContent = `Цена: ${prices[pizzaId][size]}р`;
}

//увеличение товара
function increaseNumber(product) {
    var quantityElement = document.getElementById('quantity_' + product);
    var quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
}

function decreaseNumber(product) {
    var quantityElement = document.getElementById('quantity_' + product);
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantityElement.innerText = quantity - 1;
    }
}

//добавление в корзину
function showNotification() {
    window.alert('Ошибка! Извините, возможность заказать временно не работает по техническим причинам.');
}