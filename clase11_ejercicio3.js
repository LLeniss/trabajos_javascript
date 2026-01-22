const prompt = require("prompt-sync")();

// Ejercicio 3: ¿Sabes contar? (for)
let n = parseInt(prompt("Ingresa un número positivo: ") , 10);

if (isNaN(n) || n <= 0) {
  console.log("Error: debes ingresar un número entero positivo.");
} else {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
