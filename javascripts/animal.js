'use strict';
let carnivores = [];
let herbivore = [];

let loadCarnivores = (callbackToInvoke) => {
    const loader = new XMLHttpRequest();
  
    loader.addEventListener("load", function() {
      // Set the value of the private array
      carnivores = JSON.parse(this.responseText);
  
      // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    });
  };

  loadCarnivores("GET", carnivores.JSON);
  console.log(carnivores);
module.exports.getjsonData =() => {
    const msgReq = new XMLHttpRequest();
    msgReq.open("GET", "carnivores.json");
    console.log(carnivores);
    
};
