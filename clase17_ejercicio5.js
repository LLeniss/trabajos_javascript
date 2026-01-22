// Ejercicio 5: Manipulación de Arrays y Cadenas
let frases = [
  "El clima es MALO hoy",
  "Este libro es muy MALO",
  "El servicio aquí es MALO"
];

function procesarFrases(frases) {
  return frases.map(frase => {
    // 1. Convertir a minúsculas
    let minuscula = frase.toLowerCase();

    // 2. Dividir en palabras
    let palabras = minuscula.split(" ");

    // 3. Reemplazar "malo" por "bueno"
    palabras = palabras.map(p => p === "malo" ? "bueno" : p);

    // 4. Combinar palabras con espacios
    return palabras.join(" ");
  });
}

console.log("Frases originales:");
frases.forEach(f => console.log("  -", f));

let resultado = procesarFrases(frases);

console.log("\nFrases procesadas:");
resultado.forEach(f => console.log("  -", f));
