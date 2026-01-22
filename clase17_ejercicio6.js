// Ejercicio 6: Autos y más autos
function gestionarAutos(entrada) {
  // 1. Quitar espacios alrededor de cada marca
  let marcas = entrada.split(",").map(m => m.trim());

  // 2. Verificar si existe "Tesla"
  let existeTesla = marcas.some(m => m === "Tesla");

  // 3. Reemplazar "Ford" por "BMW"
  marcas = marcas.map(m => m === "Ford" ? "BMW" : m);

  // 4. Encontrar índice de "Chevrolet"
  let indiceChevrolet = marcas.findIndex(m => m === "Chevrolet");

  // 5. Ordenar alfabéticamente y separar por puntos
  let ordenadas = marcas.sort().join(".");

  return {
    marcas: marcas,
    existeTesla: existeTesla,
    indiceChevrolet: indiceChevrolet,
    marcasOrdenadas: ordenadas
  };
}

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
let resultado = gestionarAutos(entrada);

console.log("\n=== Resultados ===");
console.log("Marcas procesadas:", resultado.marcas);
console.log("¿Existe 'Tesla'?:", resultado.existeTesla);
console.log("Índice de 'Chevrolet':", resultado.indiceChevrolet);
console.log("Marcas ordenadas:", resultado.marcasOrdenadas);
