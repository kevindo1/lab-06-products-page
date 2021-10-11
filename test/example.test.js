// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { plants } from '../plants.js';
import { renderPlants } from '../renderPlants.js';

const test = QUnit.test;

test('renderPlants should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="plant-card"><h2>Anthurium Regale</h2><img src="./assets/AnthuriumRegale.jpeg"><h4>$120</h4><button>Add to Cart</button></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const AnthuriumRegale = plants[0];

    //Expect
    // Make assertions about what is expected versus the actual result
    const actual = renderPlants(AnthuriumRegale).outerHTML;

    expect.equal(actual, expected);
});
