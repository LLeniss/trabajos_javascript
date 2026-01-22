const prompt = require("prompt-sync")();

// Ejercicio 1: While
let suma = 0;

while (true) {
  let numero = parseFloat(prompt("Ingresa un número (negativo para salir): "));

  if (numero < 0) break;
  if (!isNaN(numero)) suma += numero;
}

console.log("La suma total es:", suma);
