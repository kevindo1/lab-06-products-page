import { toUSD } from './utilities/utils.js';

export function renderLineItems(cartItem, plantData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = plantData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(plantData.price);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = toUSD(cartItem.qty * plantData.price);

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    
    return tr;
}
