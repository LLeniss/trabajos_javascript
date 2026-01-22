const prompt = require("prompt-sync")();

// Ejercicio 4: Transformación y Análisis de Cadenas
function transformarYAnalizarNombres(entrada) {
  // 1. Quitar espacios alrededor de cada nombre
  let nombres = entrada.split(",").map(n => n.trim());
  
  // 2. Verificar si existe "Juan"
  let existeJuan = nombres.some(n => n === "Juan");
  
  // 3. Reemplazar "Maria" por "Ana"
  nombres = nombres.map(n => n === "Maria" ? "Ana" : n);
  
  // 4. Encontrar índice de "Pedro"
  let indicePedro = nombres.findIndex(n => n === "Pedro");
  
  // 5. Ordenar alfabéticamente y separar por puntos
  // Crear una copia para no modificar el array original
  let nombresOrdenados = [...nombres].sort().join(".");
  
  return {
    nombres: nombres,
    existeJuan: existeJuan,
    indicePedro: indicePedro,
    nombresOrdenados: nombresOrdenados
  };
}

let entrada = prompt("Ingresa nombres separados por comas (ej: Julian, Maria, Malena, Andrea, Pablo, Pedro): ");
let resultado = transformarYAnalizarNombres(entrada);

console.log("\n=== Resultados ===");
console.log("Nombres procesados:", resultado.nombres);
console.log("¿Existe 'Juan'?:", resultado.existeJuan);
console.log("Índice de 'Pedro':", resultado.indicePedro);
console.log("Nombres ordenados:", resultado.nombresOrdenados);