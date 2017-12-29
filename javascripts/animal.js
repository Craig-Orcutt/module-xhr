'use strict';
let carnivores = [];
let herbivore = [];

function fileLoadCarnivore (callbackToInvoke) {
  let carnivoreCall = new XMLHttpRequest();
  carnivoreCall.addEventListener('load', function(){
  carnivores = JSON.parse(event.target.responseText);
  console.log(carnivores);
  // carnivores = carnivores.species;
});
carnivoreCall.open('GET', "carnivores.json");
carnivoreCall.send();
  
}
console.log(carnivores);
// let fileLoadHerbivore = ()=>{
//   let requestHerbivore = new XMLHttpRequest();
//   var herbivoreData = JSON.parse(event.target.responseText);
//   console.log('data1', herbivoreData);


// loadUpCarnivore.addEventListener('load', fileLoadCarnivore);
// loadUpCarnivore.addEventListener('error', xHRFail);
// // loadUpHerbivore.addEventListener('load', fileLoadHerbivore);
// // loadUpHerbivore.addEventListener('error', fileLoadHerbivore);

// loadUpCarnivore.open("GET", 'carnivores.json');
// loadUpCarnivore.send();
// loadUpHerbivore.open("GET", 'herbivores.json');
// loadUpHerbivore.send();


