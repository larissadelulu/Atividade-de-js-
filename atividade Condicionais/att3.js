const prompt = require('prompt-sync')();


const login = prompt("Digite sua senha:")
const nome = "carlinhos" 
let senha = 1234


if(login == senha )
     console.log("Logado com sucesso", nome )
  else {
    console.log("Erro!!!")
  }
