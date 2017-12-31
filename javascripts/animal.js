
'use strict';
let carnivores = [];
let herbivores = [];

// function to call carnivore json and assign it to carnivore Array

let loadCarnivores = function(callbackToInvoke) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);
    callbackToInvoke(carnivores);
  });
  xhr.open("GET", "carnivores.json");
  xhr.send();

};
let loadHerbivores = function(callbackToInvoke) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() { 
    // Set the value of the private array
    herbivores = JSON.parse(this.responseText);
    callbackToInvoke(herbivores);
  });
  xhr.open("GET", "herbivores.json");
  xhr.send();

};


module.exports = { loadCarnivores , loadHerbivores };