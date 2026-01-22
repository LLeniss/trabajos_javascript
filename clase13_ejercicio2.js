const prompt = require("prompt-sync")();

// Ejercicio 2: Número mayor (función expresada)
const encontrarMayor = function(num1, num2) {
  return num1 > num2 ? num1 : num2;
};

let a = parseFloat(prompt("Ingresa el primer número: "));
let b = parseFloat(prompt("Ingresa el segundo número: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Error: Debes ingresar números válidos.");
} else {
  let mayor = encontrarMayor(a, b);
  console.log(`El número mayor es: ${mayor}`);
}
