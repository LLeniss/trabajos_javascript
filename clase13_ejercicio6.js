const prompt = require("prompt-sync")();

// Ejercicio 6: Convertir a minutos
function convertirHorasAMinutos(horas) {
  return horas * 60;
}

let horas = parseFloat(prompt("Ingresa el número de horas: "));

if (isNaN(horas) || horas < 0) {
  console.log("Error: Debes ingresar un número válido de horas.");
} else {
  let minutos = convertirHorasAMinutos(horas);
  console.log(`${horas} horas equivalen a ${minutos} minutos.`);
}
