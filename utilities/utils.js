export function findById(id, items) {
    for (let item of items) { 
        if (item.id === id) {
            return item;
        }
    }
}

export function calculatorOrderTotal(cart, plants) {
    // initialize a variable to add the total 
    // loop through cart items
    // get the plant item from the list
    // add the quantity * price
    
    let orderTotal = 0;
    for (let item of cart) {
        const plant = findById(item.id, plants);
        orderTotal = orderTotal + plant.price * item.quantity;
    }
    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}
