const prompt = require('prompt-sync')();

const numero = prompt("Digite um número de 1 a 7:")

if (numero < 1 || numero > 7){
    console.log("Número inválido! Digite um número de 1 a 7.")
} else{
    let dia;

    if (numero === 1) dia = "Domingo";
    else if (numero === "2") dia = "Segunda-feira";
    else if (numero === "3") dia = "Terça-feira";
    else if (numero === "4") dia = "Quarta-feira";
    else if (numero === "5") dia = "Quinta-feira";
    else if (numero === "6") dia = "Sexta-feira";
    else if (numero === "7") dia = "Sábado-feira";

   console.log("O dia correspondente é; " + dia);

}