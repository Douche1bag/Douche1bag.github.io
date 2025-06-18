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

// for (let i = 0; i < pets.length; i++) {
//   const pet = pets[i];
//   const petDiv = document.getElementById('pet-list').appendChild(document.createElement('div'));
//   petDiv.className = 'pet';
//   petDiv.innerHTML = `
//         <img src="${pet.img}" alt="${pet.name}">
//         <h3>${pet.name}</h3>
//         <p>Type: ${pet.type}</p>
//         <p>Age: ${pet.age} years</p>
//         <button onclick="adoptPet()">Adopt Now</button>
//     `;
//   document.getElementById('pet-list').appendChild(petDiv);
// }

function loadPets() {
    console.log("Loading pets...");
    const petList = $("#pet-list");
    pets.forEach((pet) => {
      const petItem = $("<div>").addClass("pet").html(`
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button class="adopt-btn">Adopt Now</button>
      `);
      petList.append(petItem);
    });
  
    // Attach click handler using event delegation
    $("#pet-list").on("click", ".adopt-btn", adoptPet);
  
    // install event handler for pet type
    $('input[name="pet-type"]').on("change", function () {
      const selectedType = $(this).val();
      filterPets();
  
    });
  }
  
function filterPets() {
  
  console.log("Selected pet type:", $('input[name="pet-type"]:checked'));
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();
  
  console.log(types);

  const filteredPets = pets.filter((pet) => types.includes(pet.type));
  console.log(filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the existing pets
  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}
  
$(document).ready(loadPets);
