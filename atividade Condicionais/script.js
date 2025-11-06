const prompt = require('prompt-sync')();

//1

const idade = prompt("Digite sua idade:");


if (idade >= 16)
    console.log("Você pode votar!" , idade) 

else if(idade < 16)
    console.log("Você é de menor!" , idade)




