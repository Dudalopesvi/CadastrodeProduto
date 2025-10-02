const prompt = require('prompt-sync')(); // Para entrada no Node.js

// Perguntar quantas pessoas serão digitadas
const n = parseInt(prompt("Quantas pessoas serão digitadas? "));

const nomes = [];
const idades = [];
const alturas = [];

// Loop para ler os dados de cada pessoa
for (let i = 0; i < n; i++) {
    console.log(`\nDados da ${i + 1}ª pessoa:`);

    const nome = prompt("Nome: ");
    const idade = parseInt(prompt("Idade: "));
    const altura = parseFloat(prompt("Altura: "));

    nomes.push(nome);
    idades.push(idade);
    alturas.push(altura);
}

// Calculando a altura média
let somaAlturas = 0;
for (let altura of alturas) {
    somaAlturas += altura;
}
const alturaMedia = somaAlturas / n;

// Calculando percentual de pessoas com menos de 16 anos
let menores16 = 0;
for (let idade of idades) {
    if (idade < 16) menores16++;
}
const percentualMenores16 = (menores16 / n) * 100;

// Mostrando resultados
console.log(`\nAltura média: ${alturaMedia.toFixed(2)}`);
console.log(`Pessoas com menos de 16 anos: ${percentualMenores16.toFixed(1)}%`);

// Mostrando os nomes das pessoas com menos de 16 anos
for (let i = 0; i < n; i++) {
    if (idades[i] < 16) {
        console.log(nomes[i]);
    }
}
