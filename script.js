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
        S: 8.99,
        M: 11.99,
        L: 14.99
    };

    const priceElement = document.getElementById(`price_${pizzaId}`);
    priceElement.textContent = `Цена: ${prices[size]}р`;
}