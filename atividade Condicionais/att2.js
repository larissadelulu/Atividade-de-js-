const prompt = require('prompt-sync')();


const numero = prompt("Digite um número:")


if(numero > 0)
    console.log("Seu resultado é positivo" , numero)


 else if( numero == 0)
    console.log("Seu número é zero!" , numero)



else if(numero < 0)
    console.log("Seu resultado é negativo" , numero)