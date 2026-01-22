// Ejercicio 7: Libros (Objetos)
let libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

let libro2 = {
  titulo: "1984",
  autor: "George Orwell",
  anioPublicacion: 1949
};

function mostrarLibro(libros) {
  for (let i = 0; i < libros.length; i++) {
    console.log(`Libro ${i + 1}:`);
    console.log(`  Título: ${libros[i].titulo}`);
    console.log(`  Autor: ${libros[i].autor}`);
    console.log(`  Año de publicación: ${libros[i].anioPublicacion}`);
    console.log("---");
  }
}

let biblioteca = [libro1, libro2];
mostrarLibro(biblioteca);
