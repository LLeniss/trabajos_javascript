const prompt = require("prompt-sync")();

// Ejercicio 10: Flores Favoritas
let floresFavoritas = [];

// Agregar flores manualmente (sin push)
floresFavoritas[0] = prompt("Ingresa tu primera flor favorita: ");
floresFavoritas[1] = prompt("Ingresa tu segunda flor favorita: ");
floresFavoritas[2] = prompt("Ingresa tu tercera flor favorita: ");

console.log("\nTus flores favoritas son:", floresFavoritas);

let florBuscada = prompt("\nIngresa una flor para verificar si está entre tus favoritas: ");

// Verificar si está entre las favoritas (manualmente)
let encontrada = false;
for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i].toLowerCase() === florBuscada.toLowerCase()) {
    encontrada = true;
    break;
  }
}

if (encontrada) {
  console.log(`¡Sí! "${florBuscada}" está entre tus flores favoritas.`);
} else {
  console.log(`No, "${florBuscada}" no está entre tus flores favoritas.`);
}

// Contar manualmente cuántas flores se mencionaron
let contador = 0;
for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i] !== "") {
    contador++;
  }
}

console.log(`\nTotal de flores favoritas mencionadas: ${contador}`);
