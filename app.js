'use strict';

// forEach

let animals = [
  {species: 'Hog', weight: 204 },
  {species: 'Moose', weight: 620 },
  {species: 'Goose', weight: 9 },
  {species: 'Raccoon', weight: 12 }
];

for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i].species}`);
}

animals.forEach(function (animal) {
  console.log(`${animal.species}`);
});

// find

let found = null;
for (let i = 0; i < animals.length; i++) {
  if (animals[i].weight > 500) {
    found = animals[i];
  }
}
console.log(found); // {species: 'Moose', weight: 620 }

let foundAgain = animals.find(function (animal) {
  return animal.weight > 200;
});
console.log(foundAgain);

// filter

let lightAnimals = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].weight < 100) {
    lightAnimals.push(animals[i]);
  }
}
console.log(lightAnimals);

let heavyAnimals = animals.filter(function (animal) {
  return animal.weight > 100;
});
console.log(heavyAnimals);

// map
// In this loop, we're picking the species from each of the animals, to build a list of animal species:

let animalSpecies = [];
for (let i = 0; i < animals.length; i++) {
  animalSpecies.push(animals[i].species);
}
console.log(animalSpecies);


let animalWeights = animals.map(function (animal) {
  return animal.weight;
});
console.log(animalWeights);

// Just like the other array methods we've been looking at, map will run the function for each of the items in the array. 
// map uses the function to decide what to put in the new array. In this case, we want animal.species
// map works in any situation where we want to transform each value of an array into another value.

let beastWeights = {
  hog: 204,
  moose: 620,
  goose: 9,
  raccoon: 12,
};

let keys = Object.keys(beastWeights); 
console.log(keys); // ["hog", "moose", "goose", "raccoon"]

let ooses = Object.keys(beastWeights).filter(function(animalName) {
  return animalName.includes('oose');
}); // => ['moose', 'goose']

console.log(ooses);

// Back to the camp

let campgrounds = [
  { number: 1, view: 'ocean', partySize: 8, isReserved: false },
  { number: 5, view: 'ocean', partySize: 4, isReserved: false },
  { number: 12, view: 'ocean', partySize: 4, isReserved: true },
  { number: 18, view: 'forest', partySize: 4, isReserved: false },
  { number: 23, view: 'forest', partySize: 4, isReserved: true },
];

// Campground capacity

// using forEach
function campgroundCapacity(campgrounds) {
  let total = 0;
  campgrounds.forEach(function (campsite) {
    total += campsite.partySize; 
  });
  return total;
}

console.log(campgroundCapacity(campgrounds));

// Available campgrounds

// Uses filter and map
function availableCampsites(campgrounds) {
  let availableSites = campgrounds.filter(function (campsite) {
    return !campsite.isReserved;
  });
  let numbers = availableSites.map(function (campsite) {
    return campsite.number;
  });
  return numbers;
}

console.log(availableCampsites(campgrounds));

// count by view

// Uses filter and map
// use filter and length
function countByView(campgrounds, view) {
  let matchingSites = campgrounds.filter(function (campsite) {
    return campsite.view === view;
  });
  return matchingSites.length + ' ' + view;
}

console.log(countByView(campgrounds, 'forest'));

// find my campsites

function findMyCampsites(campgrounds, view, partySize) {
  return campgrounds.filter(function (campsite) {
    return !campsite.isReserved 
          && campsite.view === view 
          && campsite.partySize >= partySize;
  });
}

console.log(findMyCampsites(campgrounds, 'forest', 4));