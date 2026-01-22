const prompt = require("prompt-sync")();

// Ejercicio 8: Convertir Celsius a Fahrenheit (función expresada)
const convertirCelsiusAFahrenheit = function(celsius) {
  return (celsius * 9/5) + 32;
};

let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius: "));

if (isNaN(celsius)) {
  console.log("Error: Debes ingresar un número válido.");
} else {
  let fahrenheit = convertirCelsiusAFahrenheit(celsius);
  console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
}
