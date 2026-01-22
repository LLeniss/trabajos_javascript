// Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
let palabras = ['sol', 'luna', 'estrella'];

let totalLetras = palabras.reduce((total, palabra) => total + palabra.length, 0);

console.log("Lista de palabras:", palabras);
console.log("Total de letras:", totalLetras);
