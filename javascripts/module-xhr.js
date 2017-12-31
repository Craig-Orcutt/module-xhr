
"use strict";

let animalCall = require("./animal");

let carnivoreDiv = document.getElementById("carnivore");
let herbivoreDiv = document.getElementById("herbivore");

let printCarnivore = function(animals){
    carnivoreDiv.innerHTML += "Carnivores: ";
    animals.carnivores.forEach(element => {
        carnivoreDiv.innerHTML += (element.species) + ' ' ;
    });
};
let printHerbivore = function(animals){
    herbivoreDiv.innerHTML += "Herbivores: ";
    animals.herbivores.forEach(element => {
        herbivoreDiv.innerHTML += (element.species) + ' ';
    });
};
 

animalCall.loadCarnivores(printCarnivore);
animalCall.loadHerbivores(printHerbivore);