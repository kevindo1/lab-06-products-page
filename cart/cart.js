import { plants } from '../data/plants.js';
import { cart } from '../data/cart-data.js'
import { calculatorOrderTotal, findById, toUSD} from '../utilities/utils.js';
import { renderLineItems } from '../renderLineItems.js';

const tbody = document.getElementById('table-body');
const tdOrderTotal = document.getElementById('order-total')

for (let cartItem of cart) {
    const plantData = findById(cartItem.id, plants);

    const tr = renderLineItems(cartItem, plantData);

    tbody.appendChild(tr);
}

const orderTotal = calculatorOrderTotal(cart, plants);
tdOrderTotal.textContent = toUSD(orderTotal);
