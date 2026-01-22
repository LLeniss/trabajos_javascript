const prompt = require("prompt-sync")();

// Ejercicio 7: Calculadora simple (switch)
let a = parseFloat(prompt("Ingresa el primer número: ") );
let b = parseFloat(prompt("Ingresa el segundo número: ") );
let operacion = prompt(
  "Ingresa la operación (suma, resta, multiplicación, division): "
)
  .trim()
  .toLowerCase();

if (isNaN(a) || isNaN(b)) {
  console.log("Error: debes ingresar números válidos.");
} else {
  switch (operacion) {
    case "suma":
      console.log(`Resultado: ${a + b}`);
      break;
    case "resta":
      console.log(`Resultado: ${a - b}`);
      break;
    case "multiplicación":
    case "multiplicacion":
      console.log(`Resultado: ${a * b}`);
      break;
    case "división":
    case "division":
      if (b === 0) console.log("Error: no se puede dividir entre 0.");
      else console.log(`Resultado: ${a / b}`);
      break;
    default:
      console.log(
        "Operación inválida. Usa: suma, resta, multiplicación o division."
      );
  }
}
