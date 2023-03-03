/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

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
