let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("--- EJERCICIO 6: Verificación Interactiva ---\n");

let primerNumero = parseFloat(prompt("Ingresa el primer número:"));
let segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

console.log("\nNúmeros ingresados:");
console.log("Primer número:", primerNumero);
console.log("Segundo número:", segundoNumero);

// Verificación individual
let primeroMayorQue10 = primerNumero > 10;
let segundoMayorQue10 = segundoNumero > 10;

// Verificación combinada con AND lógico
let ambosMayoresQue10 = primeroMayorQue10 && segundoMayorQue10;

console.log("\n--- RESULTADOS ---");
console.log("¿Primer número > 10?", primeroMayorQue10);
console.log("¿Segundo número > 10?", segundoMayorQue10);
console.log("¿AMBOS > 10?", ambosMayoresQue10);

// Mensaje personalizado
if (ambosMayoresQue10) {
    console.log("\n✅ ¡Ambos números son mayores que 10!");
} else {
    console.log("\n❌ Al menos uno de los números NO es mayor que 10");
}