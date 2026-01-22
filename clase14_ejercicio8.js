const prompt = require("prompt-sync")();

// Ejercicio 8: Función backEnd()
function backEnd(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("Back End");
    } else if (i % num1 === 0) {
      console.log("Back");
    } else if (i % num2 === 0) {
      console.log("End");
    } else {
      console.log(i);
    }
  }
}

let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));

if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
  console.log("Error: Debes ingresar números válidos y positivos.");
} else {
  backEnd(num1, num2);
}
