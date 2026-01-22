// Ejercicio 9: Bubble Sort + Búsqueda Binaria
function bubbleSort(lista) {
  let n = lista.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (lista[j] > lista[j + 1]) {
        // Intercambiar
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
  return lista;
}

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

  return -1;
}

let list = [12, 3, 5, 7, 1, 22, 47, 100];

console.log("Lista original:", list);

// Ordenar con Bubble Sort
let listOrdenada = bubbleSort([...list]);
console.log("Lista ordenada:", listOrdenada);

console.log("\n=== Búsqueda Binaria en Lista Ordenada ===");
console.log("Posición del número 12:", busquedaBinaria(listOrdenada, 12));
console.log("Posición del número 5:", busquedaBinaria(listOrdenada, 5));
console.log("Posición del número 22:", busquedaBinaria(listOrdenada, 22));
console.log("Posición del número 100:", busquedaBinaria(listOrdenada, 100));
