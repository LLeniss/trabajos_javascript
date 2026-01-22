// Ejercicio 3: Gestión Compleja de Arrays
let productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 },
  { nombre: "Monitor", precio: 300 }
];

function gestionarProductos(productos, nuevoProducto, productoABuscar) {
  // 1. Añadir nuevo producto
  productos.push(nuevoProducto);

  // 2. Eliminar el último producto
  productos.pop();

  // 3. Encontrar índice de un producto específico
  let indice = productos.findIndex(p => p.nombre === productoABuscar);

  // 4. Verificar si existe producto con precio > 50
  let existeMayor50 = productos.some(p => p.precio > 50);

  // 5. Devolver cadena de nombres separados por comas
  let nombres = productos.map(p => p.nombre).join(", ");

  return {
    productos: productos,
    indiceProducto: indice,
    existePrecioMayor50: existeMayor50,
    nombres: nombres
  };
}

let nuevoProducto = { nombre: "Webcam", precio: 60 };
let resultado = gestionarProductos(productos, nuevoProducto, "Teclado");

console.log("\n=== Resultados ===");
console.log("Productos finales:", resultado.productos);
console.log("Índice de 'Teclado':", resultado.indiceProducto);
console.log("¿Existe producto > $50?:", resultado.existePrecioMayor50);
console.log("Nombres de productos:", resultado.nombres);
