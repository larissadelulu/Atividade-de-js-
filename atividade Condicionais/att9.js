 prompt = require('prompt-sync')();

 let idade = 100;

 if (idade < 12) {
    console.log("Você é criança.");
 } else if (idade < 18) {
    console.log("Você é adolescente.");
 } else if (idade < 60){
    console.log("Você é adulto.");
 } else {
    console.log("Você é o/a Velho/a da lancha.");
 }