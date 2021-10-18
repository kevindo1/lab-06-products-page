import { addProduct } from "../utilities/utils.js";

const form = document.getElementById('plant-form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const data = new FormData(form);

    const newPlant = {
        id: data.get('id'),
        name: data.get('name'), 
        img: data.get('img'),
        price: Number(data.get('price'))
    };
    console.log(newPlant);
    addProduct(newPlant);
    alert('A new plant has been added');
    form.reset();
});