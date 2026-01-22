const prompt = require("prompt-sync")();

// Ejercicio 10: Factorial de un número (función expresada)
const calcularFactorial = function(numero) {
  if (numero === 0 || numero === 1) return 1;

  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
};

let num = parseInt(prompt("Ingresa un número para calcular su factorial: "));

if (isNaN(num) || num < 0) {
  console.log("Error: Debes ingresar un número entero no negativo.");
} else {
  let resultado = calcularFactorial(num);
  console.log(`El factorial de ${num} es: ${resultado}`);
}
