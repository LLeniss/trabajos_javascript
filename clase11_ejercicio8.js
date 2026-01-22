const prompt = require("prompt-sync")();

// Ejercicio 8: Encuentra los múltiplos de un número entre 1 y 100
let n = parseInt(prompt("Ingresa un número entero positivo: ") , 10);

if (isNaN(n) || n <= 0) {
  console.log("Error: debes ingresar un número entero positivo.");
} else {
  console.log(`Múltiplos de ${n} entre 1 y 100:`);
  for (let i = 1; i <= 100; i++) {
    if (i % n === 0) console.log(i);
  }
}
