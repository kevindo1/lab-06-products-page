export function renderPlants(plant) {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plant.name;

    const plantImg = document.createElement('img');
    plantImg.src = plant.img;

    plantCard.append(plantHeader, plantImg);
    plantCard.appendChild(plantHeader, plantImg);
}