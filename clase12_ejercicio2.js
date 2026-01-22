const prompt = require("prompt-sync")();

// Ejercicio 2: Do While
let password;

do {
  password = prompt("Ingresa la contraseña: ");
} while (password !== "1234");

console.log("Contraseña correcta ✅");
