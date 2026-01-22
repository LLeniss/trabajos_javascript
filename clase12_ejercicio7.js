// Ejercicio 7: Matriz 5x5
let matriz = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];

let suma = 0;

for (let fila of matriz) {
  for (let num of fila) suma += num;
}

console.log("Suma total de la matriz:", suma);
