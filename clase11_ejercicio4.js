const prompt = require("prompt-sync")();

// Ejercicio 4: ¿Es par o impar?
let n = parseInt(prompt("Ingresa un número entero: ") , 10);

if (isNaN(n)) {
  console.log("Error: debes ingresar un número entero válido.");
} else if (n % 2 === 0) {
  console.log("El número es PAR (se puede dividir entre 2 y da exacto).");
} else {
  console.log("El número es IMPAR (al dividir entre 2 sobra 1).");
}
