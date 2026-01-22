const prompt = require("prompt-sync")();

// Ejercicio 6: La tabla de multiplicar (1 al 10)
let n = parseFloat(prompt("Ingresa un número para su tabla de multiplicar: ") );

if (isNaN(n)) {
  console.log("Error: debes ingresar un número válido.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
