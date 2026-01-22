// Ejercicio 7: La Florería
function gestionarFloreria(entrada) {
  // 1. Quitar espacios alrededor de cada flor
  let flores = entrada.split(",").map(f => f.trim());

  // 2. Verificar si existe "Margarita" y agregar "Azucena"
  if (flores.some(f => f === "Margarita")) {
    flores.push("Azucena");
  }

  // 3. Reemplazar "Orquídea" por "Clavel"
  flores = flores.map(f => f === "Orquídea" ? "Clavel" : f);

  // 4. Encontrar índice de "Girasol" y si no existe, agregarlo al inicio
  let indiceGirasol = flores.findIndex(f => f === "Girasol");
  if (indiceGirasol === -1) {
    flores.unshift("Girasol");
  }

  // 5. Ordenar alfabéticamente y separar por puntos
  let ordenadas = flores.sort().join(".");

  return {
    flores: flores,
    indiceGirasol: indiceGirasol,
    floresOrdenadas: ordenadas
  };
}

let entrada = "Rosa, Tulipán, Orquídea, Lirio";
let resultado = gestionarFloreria(entrada);

console.log("\n=== Resultados ===");
console.log("Flores procesadas:", resultado.flores);
console.log("Índice de 'Girasol':", resultado.indiceGirasol);
console.log("Flores ordenadas:", resultado.floresOrdenadas);
