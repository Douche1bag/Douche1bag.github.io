var pl = document.getElementById("pet-list");

const pets = [ 

  {"name": "Buddy",
    "type": "Dog",
    "age": 3,
    "img": "petshop-img/dogs/dog01.jpg"}, 

  {"name": "Buddy",
    "type": "Dog",
    "age": 3,
    "img": "petshop-img/dogs/dog02.jpg"}, 

  {"name": "Whiskers",
    "type": "Cat",
    "age": 2,
    "img": "petshop-img/cats/cat01.jpg"}, 

  {"name": "Mittens",
    "type": "Cat",
    "age": 2,
    "img": "petshop-img/cats/cat02.jpg"}, 

] 

for(let i = 0; i< pets.length; i++){
    const pet = pets[i];
    const petDiv = document.getElementById("pet-list")
                    .appendChild(document.createElement("div"));
    petDiv.className = "pet";
    petDiv.innerHTML = `<img src="${pet.img}" alt="${pet.name}">
                        <h2>${pet.name}</h2>
                        <p>Type: ${pet.type}</p>
                        <p>Age: ${pet.age} years</p>`;
}