const prompt = require("prompt-sync")();

// Ejercicio 4: Número par o impar
function esPar(numero) {
  let resultado = numero % 2 === 0 ? "Es par" : "Es impar";
  return resultado;
}

let num = parseInt(prompt("Ingresa un número: "));

if (isNaN(num)) {
  console.log("Error: Debes ingresar un número válido.");
} else {
  console.log(esPar(num));
}
