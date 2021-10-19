import { plants } from '../data/plants.js';

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
        orderTotal = orderTotal + plant.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart() {
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id) {
    const cart = getCart();
    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart() {
    localStorage.setItem('CART', JSON.stringify('CART'));
    localStorage.removeItem('CART');
}

export function getProducts() {
    let localProducts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(localProducts);
    
    if (!products) {
        const plantString = JSON.stringify(plants);
        localStorage.setItem('PRODUCTS', plantString);
    }
    return products || plants; 
}


export function addProduct(newPlant) {
    let products = getProducts();
    products.push(newPlant);

    let productsString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productsString);
}

// export function removeProduct(newPlant) {
//     let lsProducts = getProducts();
    
// }