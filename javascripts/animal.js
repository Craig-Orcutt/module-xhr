'use strict';
let carnivores = [];
let herbivore = [];
let loadUp = new XMLHttpRequest();

let xHRFail =() =>{
  console.log('An error occured while transferring the data');
};

let fileLoad = ()=>{
  // console.log('event.target',event.target);
  var data = JSON.parse(event.target.responseText);
  console.log('data',data);
};
loadUp.addEventListener('load', fileLoad);
loadUp.addEventListener('error', xHRFail);

loadUp.open("GET", 'carnivores.json');
loadUp.send();

