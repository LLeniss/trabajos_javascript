let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("========================================");
console.log("    SISTEMA DE VALIDACIÓN DE EDAD");
console.log("========================================");

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

console.log("Rango de edad permitido: " + EDAD_MINIMA + " - " + EDAD_MAXIMA + " años\n");

let edadTexto = prompt("Ingresa tu edad:");
let edad = parseInt(edadTexto);

console.log("\n--- RESULTADO DE LA VALIDACIÓN ---");

if (isNaN(edad)) {
    console.log("❌ Error: Debes ingresar un número válido.");
} else if (edad < EDAD_MINIMA) {
    let faltante = EDAD_MINIMA - edad;
    console.log("❌ Acceso denegado.");
    console.log("Debes tener al menos " + EDAD_MINIMA + " años.");
    console.log("Te faltan " + faltante + " años para participar.");
} else if (edad > EDAD_MAXIMA) {
    let exceso = edad - EDAD_MAXIMA;
    console.log("❌ Acceso denegado.");
    console.log("La edad máxima permitida es " + EDAD_MAXIMA + " años.");
    console.log("Excedes el límite por " + exceso + " años.");
} else {
    console.log("✅ Validación exitosa.");
    console.log("Tu edad (" + edad + " años) cumple con los requisitos.");
    console.log("¡Bienvenido a la encuesta!");
}