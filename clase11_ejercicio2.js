const prompt = require("prompt-sync")();

// Ejercicio 2: Semáforo inteligente (switch)
let color = prompt("Ingresa un color (rojo, amarillo o verde): ")
  .trim()
  .toLowerCase();

switch (color) {
  case "rojo":
    console.log("Alto, no puedes avanzar.");
    break;
  case "amarillo":
    console.log("Precaución, prepárate para avanzar.");
    break;
  case "verde":
    console.log("Avanza con seguridad.");
    break;
  default:
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}
