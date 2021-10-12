import { plants } from '../data/plants.js';
import { cart } from '../data/cart-data.js'
import { findById } from '../utilities/findById.js';
import { renderLineItems } from '../renderLineItems.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart) {
    const plantData = findById(cartItem.id, plants);

    const tr = renderLineItems(cartItem, plantData);
    
    tbody.appendChild(tr);
}