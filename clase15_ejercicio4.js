// Ejercicio 4: Calcula la suma total de los números
let numeros = [1, 2, 3, 4];

let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log("Lista original:", numeros);
console.log("Suma total:", suma);
