const number = 21; // número a ser verificado na sequência
let fibonacci = [0, 1];

for (let i = 2; i <= number; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

if (fibonacci.includes(number)) {
  console.log(number + ' pertence à sequência de Fibonacci.');
} else {
  console.log(number + ' não pertence à sequência de Fibonacci.');
}
