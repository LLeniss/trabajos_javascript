const prompt = require("prompt-sync")();

// Ejercicio 5: Concatenar nombres (función expresada)
const concatenarNombres = function(nombre, apellido) {
  return nombre + " " + apellido;
};

let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

let nombreCompleto = concatenarNombres(nombre, apellido);
console.log(`Nombre completo: ${nombreCompleto}`);
