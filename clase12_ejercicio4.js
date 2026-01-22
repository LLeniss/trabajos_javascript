const prompt = require("prompt-sync")();

// Ejercicio 4: Notas con array
let notas = [];

for (let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt(`Ingresa la nota del estudiante ${i + 1}: `));
  notas[i] = nota;
}

console.log("Notas ingresadas:", notas);
