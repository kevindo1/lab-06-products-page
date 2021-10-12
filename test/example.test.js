// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { plants } from '../data/plants.js';
import { renderPlants } from '../renderPlants.js';
import { findById, calculatorOrderTotal } from '../utilities/utils.js';
import { cart } from '../data/cart-data.js';
import { renderLineItems } from '../renderLineItems.js';

const test = QUnit.test;

test('renderPlants should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="plant-card"><h2>Anthurium Regale</h2><img src="./assets/AnthuriumRegale.jpeg"><h4>120</h4><button>Add to Cart</button></div>';
    
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

test('calcOrderTotal should return the order total', (expect) => {
    const expected = 530;

    const actual = calculatorOrderTotal(cart, plants);

    expect.deepEqual(actual, expected);
});

test('renderLineItems should return the cart line item', (expect) => {
    const expected = '<tr><td>Anthurium Regale</td><td>$120.00</td><td>2</td><td>$240.00</td></tr>';

    const cartItem = cart[0];
    const plantData = plants[0];
    const actual = renderLineItems(cartItem, plantData).outerHTML;

    expect.deepEqual(actual, expected);
});
