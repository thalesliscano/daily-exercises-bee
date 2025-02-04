"use strict"; // Modo estrito para evitar erros comuns no JavaScript

const readline = require("readline"); // Importa o módulo readline para ler entrada do usuário

// Cria uma interface de leitura e escrita no console
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada como o terminal
    output: process.stdout // Define a saída como o terminal
});

// Faz as perguntas ao usuário
rl.question("", function(a) {
    rl.question("", function(b) {
        // Converte as entradas de string para número inteiro e realiza a soma
        let soma = parseInt(a) + parseInt(b);
        
        // Exibe o resultado no formato "X = resultado"
        console.log(`X = ${soma}`);

        // Fecha a interface de leitura
        rl.close();
    });
});
