const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Ingresa un número: "));

if (isNaN(numero)) {
  console.log("Error: debes ingresar un número válido.");
} else if (numero > 0) {
  console.log("El número es positivo (mayor que 0).");
} else if (numero < 0) {
  console.log("El número es negativo (menor que 0).");
} else {
  console.log("El número es cero (igual a 0).");
}