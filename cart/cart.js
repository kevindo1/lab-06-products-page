// import { plants } from '../data/plants.js';
// import { cart } from '../data/cart-data.js';
import { calculatorOrderTotal, findById, getProducts, toUSD, getCart } from '../utilities/utils.js';
import { renderLineItems } from '../renderLineItems.js';

const tbody = document.getElementById('table-body');
const tdOrderTotal = document.getElementById('order-total');

const cart = getCart();
const plants = getProducts();

for (let cartItem of cart) {
    const plantData = findById(cartItem.id, plants);

    const tr = renderLineItems(cartItem, plantData);

    tbody.appendChild(tr);
}

const orderTotal = calculatorOrderTotal(cart, plants);
tdOrderTotal.textContent = toUSD(orderTotal);

const placeOrder = document.getElementById('place-order');
placeOrder.addEventListener('click', ()=> {
    localStorage.removeItem('CART');
    window.location.replace('..');
});

if (cart.length <= 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.disabled = false;
}
