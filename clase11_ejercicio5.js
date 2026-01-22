const prompt = require("prompt-sync")();

// Ejercicio 5: Encuentra los números pares entre dos valores
let inicio = parseInt(prompt("Ingresa el número de inicio: ") , 10);
let fin = parseInt(prompt("Ingresa el número de fin: ") , 10);

if (isNaN(inicio) || isNaN(fin)) {
  console.log("Error: debes ingresar números enteros válidos.");
} else if (inicio > fin) {
  console.log("Valores inválidos: el inicio no puede ser mayor que el fin.");
} else {
  console.log(`Números pares entre ${inicio} y ${fin}:`);
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
