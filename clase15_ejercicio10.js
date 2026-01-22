// Ejercicio 10: Construye una frase a partir de una lista de palabras
let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let frase = palabras.reduce((acumulador, palabra) => acumulador + ' ' + palabra);

console.log("Lista de palabras:", palabras);
console.log("Frase construida:", frase);
