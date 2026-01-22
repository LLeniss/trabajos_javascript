// Ejercicio 8: Busca un nombre específico
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let nombreBuscado = nombres.find(nombre => nombre === 'Laura');

console.log("Lista de nombres:", nombres);

if (nombreBuscado) {
  console.log(`El nombre '${nombreBuscado}' está presente en la lista.`);
} else {
  console.log("El nombre 'Laura' no está en la lista.");
}
