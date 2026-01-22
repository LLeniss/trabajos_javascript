// Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
let estudiante = {
  nombre: "Juan Pérez",
  edad: 20,
  notas: [8, 9, 7, 8.5, 9.5]
};

function procesarEstudiante(estudiante, nuevaNota) {
  // 1. Agregar una nueva nota
  estudiante.notas.push(nuevaNota);

  // 2. Eliminar la primera nota
  estudiante.notas.shift();

  // 3. Calcular el promedio
  let promedio = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;

  // 4. Convertir nombre a mayúsculas
  let nombreMayuscula = estudiante.nombre.toUpperCase();

  // 5. Devolver objeto con nombre en mayúsculas y promedio
  return {
    nombre: nombreMayuscula,
    promedio: promedio.toFixed(2)
  };
}

console.log("Estudiante original:", estudiante);
let resultado = procesarEstudiante(estudiante, 8.5);
console.log("Resultado:", resultado);
console.log("Notas después del procesamiento:", estudiante.notas);
