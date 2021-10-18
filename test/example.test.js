// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { plants } from '../data/plants.js';
import { renderPlants } from '../renderPlants.js';
// import { cart } from '../data/cart-data.js';
import { getCart, clearCart, addProduct, getProducts, findById, addItem} from '../utilities/utils.js';

const test = QUnit.test;

test('renderPlants should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="plant-card"><h2>Anthurium Regale</h2><img src="./assets/AnthuriumRegale.jpeg"><h4>$120.00</h4><button id="1" class="buy-button">Add to Cart</button></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const AnthuriumRegale = plants[0];

    //Expect
    // Make assertions about what is expected versus the actual result
    const actual = renderPlants(AnthuriumRegale).outerHTML;

    expect.equal(actual, expected);
});

test('findById should return the item and matching Id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: '1', 
        name: 'Anthurium Regale',
        img: './assets/AnthuriumRegale.jpeg',
        price: 120
    };
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    const actual = findById('1', plants);

    expect.deepEqual(actual, expected);
});

// test('calcOrderTotal should return the order total', (expect) => {
//     const expected = '<td id="order-total"></td>';

//     const actual = calculatorOrderTotal(cart, plants);

//     expect.deepEqual(actual, expected);
// });

// test('renderLineItems should return the cart line item', (expect) => {
//     const expected = '<tr><td>Anthurium Regale</td><td>$120.00</td><td>2</td><td>$240.00</td></tr>';

//     const cartItem = cart[0];
//     const plantData = plants[0];
//     const actual = renderLineItems(cartItem, plantData).outerHTML;

//     expect.deepEqual(actual, expected);
// });

test('getCart will return the cart if it exists', (expect) => {
    localStorage.removeItem('CART');
    const testCart = [
        { id: '1', qty: 2 },
        { id: '4', qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(testCart));

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});

test('getCart will return empty array if it does not exist', (expect) => {
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);
});

test('addItem will increment an item that is in the cart', (expect) => {
    localStorage.removeItem('CART');

    const testCart = [
        { id: '1', qty: 2 },
        { id: '4', qty: 1 }
    ];

    localStorage.setItem('CART', JSON.stringify(testCart));
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 3 },
        { id: '4', qty: 1 }
    ];
    expect.deepEqual(cart, expected);
});

test('addItem will add a new item if not in the cart', (expect) => {
    localStorage.removeItem('CART');
    const expected = [
        { id: '1', qty: 1 }
    ];
    addItem('1');

    const cart = getCart();
    expect.deepEqual(cart, expected);
});

test('clearCart will clear the cart', (expect) => {
    const testCart = [
        { id: '1', qty: '1' },
        { id: '4', qty: '2' }
    ];
    localStorage.setItem('CART', JSON.stringify(testCart));
    clearCart();
    const cart = [];
    const expected = getCart();
    expect.deepEqual(cart, expected);
});

test('addProduct should add product to arry', (expect) => {
    let products = getProducts();
    const newProduct = {
        id: '7', 
        name: 'Philodendron Melanochrysum',
        img: './assets/PhilodendronMelanochrysum.jpg',
        price: 60
    }
    addProduct(newProduct);

    products = getProducts();
    expect.equal(products.length, 7);
});