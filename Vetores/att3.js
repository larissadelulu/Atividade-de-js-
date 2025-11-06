const prompt = require('prompt-sync')();

let numeros = [ 100, 90 , 80 , 70, 60];

let reverso = [...numeros].reverse();
console.log("Números na ordem inversa: " , reverso);