const prompt = require("prompt-sync")();

// Ejercicio 10: Adivina el número (1 a 10) - 3 intentos
let secreto = Math.floor(Math.random() * 10) + 1; // 1 a 10
let adivino = false;

for (let intento = 1; intento <= 3; intento++) {
  let guess = parseInt(
    prompt(`Intento ${intento}/3 - Adivina el número (1 a 10): `),
    10
  );

  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Entrada inválida. Debes escribir un número del 1 al 10.");
    continue;
  }

  if (guess === secreto) {
    console.log("¡Felicitaciones! Adivinaste el número.");
    adivino = true;
    break;
  } else {
    console.log("No acertaste.");
  }
}

if (!adivino) {
  console.log(`Se acabaron los intentos. El número secreto era: ${secreto}`);
}
