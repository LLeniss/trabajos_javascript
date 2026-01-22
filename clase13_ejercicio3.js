// Ejercicio 3: Mensaje global y local
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
  let saludoLocal = "Hola desde el scope local";
  console.log(saludoGlobal);
  console.log(saludoLocal);
}

mostrarMensaje();
