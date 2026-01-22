let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("========================================");
console.log("  CALCULADORA DE DESCUENTOS");
console.log("  (Múltiples productos)");
console.log("========================================\n");

let totalOriginal = 0;
let totalFinal = 0;
let totalAhorro = 0;

// Producto 1
console.log("--- PRODUCTO 1 ---");
let precio1 = parseFloat(prompt("Precio del producto 1: $"));
let descuento1 = parseFloat(prompt("Descuento (%):"));
let monto1 = precio1 * (descuento1 / 100);
let final1 = precio1 - monto1;

// Producto 2
console.log("\n--- PRODUCTO 2 ---");
let precio2 = parseFloat(prompt("Precio del producto 2: $"));
let descuento2 = parseFloat(prompt("Descuento (%):"));
let monto2 = precio2 * (descuento2 / 100);
let final2 = precio2 - monto2;

// Calcular totales
totalOriginal = precio1 + precio2;
totalFinal = final1 + final2;
totalAhorro = monto1 + monto2;

// Mostrar resumen
console.log("\n========================================");
console.log("  RESUMEN DE COMPRA");
console.log("========================================");
console.log("Producto 1: $" + precio1.toFixed(2) + " → $" + final1.toFixed(2));
console.log("Producto 2: $" + precio2.toFixed(2) + " → $" + final2.toFixed(2));
console.log("----------------------------------------");
console.log("Total original:  $" + totalOriginal.toFixed(2));
console.log("Total ahorro:   -$" + totalAhorro.toFixed(2));
console.log("TOTAL A PAGAR:   $" + totalFinal.toFixed(2));
console.log("========================================");