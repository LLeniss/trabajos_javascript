const prompt = require("prompt-sync")();

// Ejercicio 1: Área de un triángulo (función declarada)
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

let base = parseFloat(prompt("Ingresa la base del triángulo: "));
let altura = parseFloat(prompt("Ingresa la altura del triángulo: "));

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
  console.log("Error: Debes ingresar valores válidos y positivos.");
} else {
  let area = calcularAreaTriangulo(base, altura);
  console.log(`El área del triángulo es: ${area}`);
}
