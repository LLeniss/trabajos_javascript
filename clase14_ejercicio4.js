const prompt = require("prompt-sync")();

// Ejercicio 4: Calcular descuento por cantidad (Arrow Function)
const calcularTotal = (cantidad, precioUnitario) => {
  let total = cantidad * precioUnitario;

  if (cantidad >= 10 && cantidad < 50) {
    total *= 0.9; // 10% descuento
  } else if (cantidad >= 50) {
    total *= 0.8; // 20% descuento
  }

  return total;
};

let cantidad = parseInt(prompt("Ingresa la cantidad de productos: "));
let precio = parseFloat(prompt("Ingresa el precio unitario: "));

if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
  console.log("Error: Debes ingresar valores válidos y positivos.");
} else {
  let total = calcularTotal(cantidad, precio);
  console.log(`Total a pagar: $${total.toFixed(2)}`);
}
