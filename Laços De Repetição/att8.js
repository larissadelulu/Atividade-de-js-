const prompt = require('prompt-sync')();

const numeroCorreto = 7;
let tentativa;

do {
    tentativa = Number(prompt('Digite um número: '));
    
    if (tentativa === numeroCorreto) {
        console.log("Você acertou!");
        break;
    } else {
        console.log("Você não acertou! Tente novamente!");
    }
} while (true);