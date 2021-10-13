// import functions and grab DOM elements

import { plants } from './data/plants.js';
import { renderPlants } from './renderPlants.js';
import { addItem } from './utilities/utils.js';

const productPage = document.getElementById('product-page');

for (let plant of plants) {
    const plantCard = renderPlants(plant);
    productPage.append(plantCard);
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const addButtons = document.querySelectorAll('.buy-button');
for (let addButton of addButtons) {
    addButton.addEventListener('click', ()=> {
        addItem(addButton.id);
        alert('Added item to cart');
    });
}
