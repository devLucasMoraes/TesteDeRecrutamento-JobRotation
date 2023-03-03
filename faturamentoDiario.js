const fs = require('fs');

const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

let menorFaturamento = data[0];
let maiorFaturamento = data[0];
let somaFaturamento = 0;
let diasAcimaDaMedia = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] < menorFaturamento) {
    menorFaturamento = data[i];
  }
  if (data[i] > maiorFaturamento) {
    maiorFaturamento = data[i];
  }
  somaFaturamento += data[i];
}

const mediaFaturamento = somaFaturamento / (data.length - 2);

for (let i = 0; i < data.length; i++) {
  if (data[i] > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}

console.log('Menor faturamento: ' + menorFaturamento);
console.log('Maior faturamento: ' + maiorFaturamento);
console.log('Dias acima da média: ' + diasAcimaDaMedia);
