
"use strict";

let animalCall = require("./animal");

let carnivoreDiv = document.getElementById("carnivore");
let herbivoreDiv = document.getElementById("herbivore");

let testfunction = function(animals){
    animals.carnivores.forEach(element => {
        carnivoreDiv.innerHTML += (element.species);
    });
};


animalCall.loadCarnivores(testfunction);