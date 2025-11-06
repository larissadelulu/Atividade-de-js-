const prompt = require('prompt-sync')();

let lado1 = Number(prompt("Digite o primeiro lado: "));
let lado2 = Number(prompt("Digite o segundo lado: "));
let lado3 = Number(prompt("Digite o terceiro lado: "));

// Verifica se é possível formar um triângulo
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  console.log("É possível formar um triângulo!");

  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Tipo: Equilátero (todos os lados iguais).");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Tipo: Isósceles (dois lados iguais).");
  } else {
    console.log("Tipo: Escaleno (todos os lados diferentes).");
  }

} else {
  console.log(" Não é possível formar um triângulo com essas medidas.");
}






