// Ejercicio 7: Mensaje según la hora
let horaActual = 15; // Puedes cambiar este valor

function mostrarSaludo() {
  if (horaActual < 12) {
    console.log("Buenos días");
  } else if (horaActual < 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }
}

console.log(`Hora actual: ${horaActual}`);
mostrarSaludo();
