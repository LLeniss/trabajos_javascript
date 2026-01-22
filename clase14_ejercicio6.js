const prompt = require("prompt-sync")();

// Ejercicio 6: El deportista (Objeto literal)
let deportista = {
  nombre: "Juan",
  energia: 100,
  experiencia: 0,

  entrenarHoras: function(horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;
    console.log(`Después de entrenar ${horas} horas:`);
    console.log(`Energía: ${this.energia}`);
    console.log(`Experiencia: ${this.experiencia}`);
  }
};

console.log("Estado inicial:");
console.log(`Nombre: ${deportista.nombre}`);
console.log(`Energía: ${deportista.energia}`);
console.log(`Experiencia: ${deportista.experiencia}`);
console.log("\n--- Entrenamiento ---");

let horas = parseInt(prompt("¿Cuántas horas quieres entrenar?: "));

if (isNaN(horas) || horas <= 0) {
  console.log("Error: Debes ingresar un número válido de horas.");
} else {
  deportista.entrenarHoras(horas);
}
