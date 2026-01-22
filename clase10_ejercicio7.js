console.log("========================================");
console.log("  COMPARACIÓN DE LOS 3 MÉTODOS");
console.log("========================================\n");

// MÉTODO 1: Variable Temporal
let x1 = 5, y1 = 15;
console.log("Método 1 - Antes: x1=" + x1 + ", y1=" + y1);
let temp = x1;
x1 = y1;
y1 = temp;
console.log("Método 1 - Después: x1=" + x1 + ", y1=" + y1);

// MÉTODO 2: Aritmética
let x2 = 5, y2 = 15;
console.log("\nMétodo 2 - Antes: x2=" + x2 + ", y2=" + y2);
x2 = x2 + y2;
y2 = x2 - y2;
x2 = x2 - y2;
console.log("Método 2 - Después: x2=" + x2 + ", y2=" + y2);

// MÉTODO 3: Desestructuración
let x3 = 5, y3 = 15;
console.log("\nMétodo 3 - Antes: x3=" + x3 + ", y3=" + y3);
[x3, y3] = [y3, x3];
console.log("Método 3 - Después: x3=" + x3 + ", y3=" + y3);