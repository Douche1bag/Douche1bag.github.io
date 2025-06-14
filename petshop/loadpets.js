const pets = [
  {
    "name": "Buddy",
    "type": "Dog",
    "age": 3,
    "img": "img/dogs/dog01.jpg"
  },
  {
    "name": "muffin",
    "type": "Dog",
    "age": 3,
    "img": "img/dogs/dog02.jpg"
  },
  { "name": "Vergil", "type": "Dog", "age": 2, "img": "img/dogs/dog03.jpg" },
  { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg" },
  { "name": "Doomslayer", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg" },
  { "name": "Abdula", "type": "Cat", "age": 1, "img": "img/cats/cat03.jpg" },
  { "name": "THedarkLord", "type": "Bird", "age": 1, "img": "img/birds/bird01.jpg" },
  { "name": "Voldemort", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg" },
  { "name": "Dante", "type": "Capybara", "age": 2, "img": "img/capybaras/capybara01.jpg" },
  { "name": "Mr.Potter", "type": "Capybara", "age": 3, "img": "img/capybaras/capybara02.jpg" }

]

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  const petDiv = document.getElementById('pet-list').appendChild(document.createElement('div'));
  petDiv.className = 'pet';
  petDiv.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
    `;
  document.getElementById('pet-list').appendChild(petDiv);
}