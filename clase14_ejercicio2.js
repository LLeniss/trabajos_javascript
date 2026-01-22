const prompt = require("prompt-sync")();

// Ejercicio 2: Calcular promedio de calificaciones (Arrow Function)
const calcularPromedio = (cal1, cal2, cal3, cal4, cal5) => 
  (cal1 + cal2 + cal3 + cal4 + cal5) / 5;

let calificaciones = [];

for (let i = 1; i <= 5; i++) {
  let cal = parseFloat(prompt(`Ingresa la calificación ${i}: `));
  if (isNaN(cal)) {
    console.log("Error: Debes ingresar números válidos.");
    process.exit();
  }
  calificaciones.push(cal);
}

let promedio = calcularPromedio(...calificaciones);
console.log(`El promedio de calificaciones es: ${promedio.toFixed(2)}`);
