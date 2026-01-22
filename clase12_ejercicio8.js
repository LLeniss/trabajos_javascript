// Ejercicio 8: Rojo y Verde
let matriz = [];
let contador = 1;

for (let i = 0; i < 10; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) fila.push(contador++);
  matriz.push(fila);
}

function diagonalRoja(m) {
  let suma = 0;
  for (let i = 0; i < m.length; i++) suma += m[i][i];
  return suma;
}

function diagonalVerde(m) {
  let suma = 0;
  for (let i = 0; i < m.length; i++) suma += m[i][m.length - 1 - i];
  return suma;
}

console.log("Rojo:", diagonalRoja(matriz));
console.log("Verde:", diagonalVerde(matriz));
