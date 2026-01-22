let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

let primerNumero = parseFloat(prompt("Ingresa el primer número:"));
let segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log("Suma:", resultadoSuma);
console.log("Resta:", resultadoResta);
console.log("Multiplicación:", resultadoMultiplicacion);
console.log("División:", resultadoDivision);