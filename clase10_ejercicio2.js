let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("--- EJERCICIO 2: Información Personal ---");

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let peso = parseFloat(prompt("Ingresa tu peso en kg:"));

if (nombre.trim() === "") {
    console.log("Error: Debes ingresar un nombre válido.");
} else if (isNaN(edad) || isNaN(peso)) {
    console.log("Error: La edad y el peso deben ser números válidos.");
} else {
    // Mensaje personalizado con más detalles
    console.log("\n========================================");
    console.log("       PERFIL DE USUARIO");
    console.log("========================================");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad + " años");
    console.log("Peso: " + peso + " kg");
    console.log("========================================");
    
    // Mensaje adicional según la edad
    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}