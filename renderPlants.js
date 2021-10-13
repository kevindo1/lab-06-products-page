import { toUSD } from "./utilities/utils.js"; 

export function renderPlants(plant) {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const plantImg = document.createElement('img');
    plantImg.src = plant.img;

    const plantPrice = document.createElement('h4');
    plantPrice.textContent = toUSD(plant.price);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Add to Cart';
    buyButton.id = plant.id;
    buyButton.classList.add('buy-button');

    plantCard.append(plantHeader, plantImg, plantPrice, buyButton);

    return plantCard;
}
