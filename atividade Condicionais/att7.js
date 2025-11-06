 prompt = require('prompt-sync')();

 let ValorCompra = 200;

 if (ValorCompra > 100) {

    let desconto = ValorCompra * 0.10;

    console.log("O valor da compra com desconto é:" , desconto);
 } else (ValorCompra < 100); {

    console.log("O valor da compra sem desconto é:" , ValorCompra);
 }
 