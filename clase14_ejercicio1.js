const prompt = require("prompt-sync")();

// Ejercicio 1: Calcular el precio final con IVA (Arrow Function)
const calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingresa el porcentaje de IVA: "));

if (isNaN(precio) || isNaN(iva) || precio < 0 || iva < 0) {
  console.log("Error: Debes ingresar valores válidos y positivos.");
} else {
  let precioFinal = calcularPrecioFinal(precio, iva);
  console.log(`El precio final con IVA es: $${precioFinal.toFixed(2)}`);
}
