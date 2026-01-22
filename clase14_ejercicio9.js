const prompt = require("prompt-sync")();

// Ejercicio 9: Última aparición de un modelo de auto
let modelosAutos = ["Toyota", "Honda", "Ford", "Chevrolet", "Toyota", "Nissan", "Ford", "Toyota"];

function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = -1;

  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i].toLowerCase() === modelo.toLowerCase()) {
      ultimaPosicion = i;
    }
  }

  if (ultimaPosicion !== -1) {
    console.log(`El modelo "${modelo}" aparece por última vez en la posición ${ultimaPosicion + 1}`);
  } else {
    console.log(`El modelo "${modelo}" no está presente en el array.`);
  }
}

console.log("Modelos disponibles:", modelosAutos);
let modelo = prompt("Ingresa el modelo de auto a buscar: ");

ultimaAparicionModeloAuto(modelo);
