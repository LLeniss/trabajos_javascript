const prompt = require("prompt-sync")();

// Ejercicio 3: Clasificación de edades (Arrow Function)
const clasificarEdad = (edad) => {
  if (edad < 12) return "Niño";
  if (edad < 18) return "Adolescente";
  if (edad < 60) return "Adulto";
  return "Adulto mayor";
};

let edad = parseInt(prompt("Ingresa tu edad: "));

if (isNaN(edad) || edad < 0) {
  console.log("Error: Debes ingresar una edad válida.");
} else {
  console.log(`Clasificación: ${clasificarEdad(edad)}`);
}
