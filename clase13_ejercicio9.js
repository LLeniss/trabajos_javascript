const prompt = require("prompt-sync")();

// Ejercicio 9: Contar hasta un número
function contarHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

let num = parseInt(prompt("Ingresa un número: "));

if (isNaN(num) || num <= 0) {
  console.log("Error: Debes ingresar un número entero positivo.");
} else {
  contarHasta(num);
}
