const prompt = require("prompt-sync")();

// Ejercicio 5: Buscar nombre
let nombres = [];

for (let i = 0; i < 5; i++) {
  nombres.push(prompt(`Ingresa el nombre ${i + 1}: `));
}

let buscar = prompt("Ingresa un nombre a buscar: ");

if (nombres.includes(buscar)) {
  console.log("El nombre está en la lista ✅");
} else {
  console.log("El nombre NO está en la lista ❌");
}
