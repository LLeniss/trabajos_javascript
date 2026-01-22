const prompt = require("prompt-sync")();

// Ejercicio 5: Verificar origen del auto (Arrow Function)
const verificarOrigen = (marca) => {
  const marcasNacionales = ["chevrolet", "ford", "fiat"];
  return marcasNacionales.includes(marca.toLowerCase()) 
    ? "El auto es de origen nacional" 
    : "El auto es importado";
};

let marca = prompt("Ingresa la marca del auto: ");

console.log(verificarOrigen(marca));
