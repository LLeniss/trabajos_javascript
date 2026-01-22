let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("--- EJERCICIO 4: TIPOS DE DATOS (Interactivo) ---\n");

// Declaración de variables
let verdadero = true;
let texto = prompt("Ingresa un mensaje de texto:");
let numero = parseFloat(prompt("Ingresa un número:"));
let nada = null;

console.log("\n--- VARIABLES DECLARADAS ---");
console.log("verdadero: " + verdadero);
console.log("texto: " + texto);
console.log("numero: " + numero);
console.log("nada: " + nada);

// Operaciones
console.log("\n--- OPERACIONES ---");

// 1. Operación matemática
let resultado = numero * 2;
console.log("El doble de " + numero + " es: " + resultado);

// 2. Concatenación
let textoCompleto = texto + " - ¡Esto es genial!";
console.log("Texto concatenado: " + textoCompleto);

// 3. Verificación booleana
if (verdadero) {
    console.log("La variable 'verdadero' es TRUE");
} else {
    console.log("La variable 'verdadero' es FALSE");
}

// 4. Verificación de null
if (nada === null) {
    console.log("La variable 'nada' es NULL (sin valor)");
}