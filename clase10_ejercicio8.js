let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("========================================");
console.log("  CONVERSOR DE TEMPERATURAS");
console.log("========================================\n");

console.log("Elige una opción:");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

let opcion = prompt("\nIngresa tu opción (1 o 2):");

if (opcion === "1") {
    // Celsius a Fahrenheit
    let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
    
    if (isNaN(celsius)) {
        console.log("Error: Número inválido");
    } else {
        let fahrenheit = celsius * 9 / 5 + 32;
        console.log("\n" + celsius + "°C = " + fahrenheit.toFixed(2) + "°F");
    }
    
} else if (opcion === "2") {
    // Fahrenheit a Celsius
    let fahrenheit = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:"));
    
    if (isNaN(fahrenheit)) {
        console.log("Error: Número inválido");
    } else {
        let celsius = (fahrenheit - 32) * 5 / 9;
        console.log("\n" + fahrenheit + "°F = " + celsius.toFixed(2) + "°C");
    }
    
} else {
    console.log("Opción no válida");
}
