const prompt = require('prompt-sync')();

let numeros = [ 1 , 4 , 7 , 13 , 10 , 50];

for (let i = 0 ; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
            console.log("Números pares: " , numeros[i]);
        }
    }