const prompt = require("prompt-sync")();

// Ejercicio 3: Contar impares
let x = parseInt(prompt("Ingresa un número X: "));
let contador = 0;

for (let i = 0; i <= x; i++) {
  if (i % 2 !== 0) contador++;
}

console.log(`La cantidad de números impares desde 0 hasta ${x} (inclusive) es: ${contador}`);
