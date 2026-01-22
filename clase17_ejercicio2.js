const prompt = require("prompt-sync")();

// Ejercicio 2: Análisis y Modificación de Cadenas de Texto
function procesarOracion(oracion) {
  // 1. Quitar espacios al principio y final
  let limpia = oracion.trim();

  // 2. Dividir en palabras
  let palabras = limpia.split(" ");

  // 3. Reemplazar 'a' por '@'
  let conArroba = limpia.replace(/a/g, "@");

  // 4. Encontrar posición de "javascript"
  let posicion = limpia.toLowerCase().indexOf("javascript");

  // 5. Convertir a palabras separadas por guiones
  let conGuiones = palabras.join("-");

  return {
    oracionLimpia: limpia,
    palabras: palabras,
    conArroba: conArroba,
    posicionJavaScript: posicion,
    conGuiones: conGuiones
  };
}

let oracion = prompt("Ingresa una oración: ");
let resultado = procesarOracion(oracion);

console.log("\n=== Resultados ===");
console.log("Oración limpia:", resultado.oracionLimpia);
console.log("Palabras:", resultado.palabras);
console.log("Con arrobas:", resultado.conArroba);
console.log("Posición de 'javascript':", resultado.posicionJavaScript);
console.log("Con guiones:", resultado.conGuiones);
