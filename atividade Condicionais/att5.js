const prompt = require('prompt-sync')();


const numero = prompt("Digite um número:")

if ( numero %2 == 0)
    console.log("Seu número é par!")
  else{
    console.log("Seu número é ímpar!")
  }