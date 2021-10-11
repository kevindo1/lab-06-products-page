// import functions and grab DOM elements

import { plants } from './plants.js';
import { renderPlants } from './renderPlants.js';

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
