// Ejercicio 8: Búsqueda Binaria
function busquedaBinaria(lista, objetivo) {
  let izquierda = 0;
  let derecha = lista.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (lista[medio] === objetivo) {
      return medio;
    } else if (lista[medio] < objetivo) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }

  return -1; // No encontrado
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log("Lista:", list);
console.log("\n=== Búsqueda Binaria ===");
console.log("Posición del número 1:", busquedaBinaria(list, 1));
console.log("Posición del número 5:", busquedaBinaria(list, 5));
console.log("Posición del número 6:", busquedaBinaria(list, 6));
console.log("Posición del número 9:", busquedaBinaria(list, 9));
console.log("Posición del número 11:", busquedaBinaria(list, 11));
