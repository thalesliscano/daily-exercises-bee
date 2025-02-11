"use strict"; // Ativa modo estrito para evitar erros comuns

const readline = require("readline");
const PI = 3.14159;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", function (a) {
    let raio = parseFloat(a);
    if (isNaN(raio)) {
        rl.close();
    } else {
        let area = PI * Math.pow(raio, 2); 
        let arredondado = (Math.round(area * 10000) / 10000).toFixed(4);
        console.log(`A=${arredondado}`);

        rl.close();
    }
});
