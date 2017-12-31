(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';
let carnivoreDiv = document.getElementById('carnivore');
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

module.exports = { loadCarnivores };
},{}],2:[function(require,module,exports){

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
},{"./animal":1}]},{},[2]);
