import './style.css';

const btnDogEl = document.getElementById('btnDog');
const btnCatEl = document.getElementById('btnCat');
const btnSurpriseEl = document.getElementById('btnSurprise');
const imgRandomEl = document.getElementById('imgRandom');

btnDogEl.addEventListener('click', randomDog);

async function randomDog () {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return imgRandomEl.src = data.message;
}

btnCatEl.addEventListener('click', randomCat);

async function randomCat () {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return imgRandomEl.src = data[0].url;
}

btnSurpriseEl.addEventListener('click', randomSurprise);

async function randomSurprise () {
    const response = await Promise.any([
        fetch('https://api.thecatapi.com/v1/images/search'),
        fetch('https://dog.ceo/api/breeds/image/random'),
    ]);

    const data = await response.json();
    const urlPets =  data.message || data[0].url;
    imgRandomEl.src = urlPets;
}