export function renderPlants(plant) {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const plantImg = document.createElement('img');
    plantImg.src = plant.img;

    const plantPrice = document.createElement('h4');
    plantPrice.textContent = plant.price;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Add to Cart';

    plantCard.append(plantHeader, plantImg, plantPrice, buyButton);

    return plantCard;
}
