 prompt = require('prompt-sync')();

 let a = 30; 
 let b = 15;
 let c = 10; 


if (a < b + c && b < a + c && c < a + b) {
  

  if (a === b && b === c) {
    console.log("Triângulo equilátero");
  } 

  else if (a === b || a === c || b === c) {
    console.log("Triângulo isósceles");
  } 
  
  else {
    console.log("Triângulo escaleno");
  }

} else {
  console.log("As medidas fornecidas não formam um triângulo");
}
