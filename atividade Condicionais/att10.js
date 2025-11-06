 prompt = require('prompt-sync')();

 let num1 = 10; 
let num2 = 5;  
let operador = "-";

let resultado;

if (operador === "+") {
  resultado = num1 + num2;
  console.log("Resultado: " + resultado);
} 
else if (operador === "-") {
  resultado = num1 - num2;
  console.log("Resultado: " + resultado);
} 
else if (operador === "*") {
  resultado = num1 * num2;
  console.log("Resultado: " + resultado);
} 
else if (operador === "/") {
  if (num2 === 0) {
    console.log("Erro: divisão por zero não é permitida!");
  } else {
    resultado = num1 / num2;
    console.log("Resultado: " + resultado);
  }
} 
else {
  console.log("Operador inválido! Use +, -, * ou /.");
}
