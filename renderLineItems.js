export function renderLineItems(cartItem, plantData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = plantData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${plantData.price}`;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.quantity;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${cartItem.quantity * plantData.price}`;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    
    return tr;
}