// ============================================================
// TRABAJO PRÁCTICO INTEGRADOR - FUNDAMENTOS DE JAVASCRIPT
// Sistema de Gestión de Biblioteca
// Usamos prompt-sync para poder pedir datos por consola en Node.js
// (Esto permite hacer un menú interactivo)
const prompt = require("prompt-sync")({ sigint: true });

// ============================================================
// PUNTO 1: ESTRUCTURA DE DATOS
// ============================================================
// Creamos 2 arrays principales:
// 1) libros: lista de libros en la biblioteca
// 2) usuarios: lista de usuarios registrados

let libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", anio: 1967, genero: "Realismo Magico", disponible: true },
  { id: 2, titulo: "Rayuela", autor: "Julio Cortazar", anio: 1963, genero: "Ficcion", disponible: true },
  { id: 3, titulo: "El Aleph", autor: "Jorge Luis Borges", anio: 1949, genero: "Ficcion", disponible: true },
  { id: 4, titulo: "Ficciones", autor: "Jorge Luis Borges", anio: 1944, genero: "Ficcion", disponible: true },
  { id: 5, titulo: "La casa de los espiritus", autor: "Isabel Allende", anio: 1982, genero: "Novela", disponible: true },
  { id: 6, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Clasico", disponible: true },
  { id: 7, titulo: "Martin Fierro", autor: "Jose Hernandez", anio: 1872, genero: "Poesia", disponible: true },
  { id: 8, titulo: "Sobre heroes y tumbas", autor: "Ernesto Sabato", anio: 1961, genero: "Novela", disponible: true },
  { id: 9, titulo: "La tregua", autor: "Mario Benedetti", anio: 1960, genero: "Novela", disponible: true },
  { id: 10, titulo: "Crónica de una muerte anunciada", autor: "Gabriel Garcia Marquez", anio: 1981, genero: "Cronica", disponible: true }
];

let usuarios = [
  { id: 1, nombre: "Ana Garcia", email: "ana@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Luis Perez", email: "luis@mail.com", librosPrestados: [] },
  { id: 3, nombre: "Maria Lopez", email: "maria@mail.com", librosPrestados: [] },
  { id: 4, nombre: "Pedro Gomez", email: "pedro@mail.com", librosPrestados: [] },
  { id: 5, nombre: "Lucia Diaz", email: "lucia@mail.com", librosPrestados: [] }
];

// Validar que un texto no venga vacío
function textoNoVacio(texto) {
  return typeof texto === "string" && texto.trim().length > 0;
}

// Validar email 
function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).trim());
}

// Normalizar texto para comparar sin importar mayúsculas/minúsculas y espacios
function normalizarTexto(texto) {
  return String(texto).trim().toLowerCase();
}

// Verificar que un número sea entero
function esEntero(n) {
  return Number.isInteger(n);
}

// Validar año: que sea número y no sea futuro
function anioValido(anio) {
  const anioActual = new Date().getFullYear();
  return Number.isInteger(anio) && anio >= 0 && anio <= anioActual;
}

// Mostrar datos del libro
function mostrarLibro(libro) {
  return {
    id: libro.id,
    titulo: libro.titulo,
    autor: libro.autor,
    anio: libro.anio,
    genero: libro.genero,
    disponible: libro.disponible
  };
}

// ============================================================
// PUNTO 2: FUNCIONES DE GESTIÓN DE LIBROS
// ============================================================

// a) Agregar un libro
function agregarLibro(id, titulo, autor, anio, genero) {
  // Validación 1: ID debe ser entero positivo
  if (!esEntero(id) || id <= 0) {
    console.log("❌ Error: El ID debe ser un número entero positivo.");
    return;
  }

  // Validación 2: ID no debe repetirse
  const existeId = libros.some(l => l.id === id);
  if (existeId) {
    console.log("❌ Error: Ya existe un libro con ese ID.");
    return;
  }

  // Validación 3: título / autor / género no vacíos
  if (!textoNoVacio(titulo) || !textoNoVacio(autor) || !textoNoVacio(genero)) {
    console.log("❌ Error: Título, autor y género no pueden estar vacíos.");
    return;
  }

  // Validación 4 (no tan obvia): título con mínimo 2 palabras
  // Esto no lo pide explícitamente, pero mejora la calidad de datos.
  if (titulo.trim().split(" ").filter(p => p.trim() !== "").length < 2) {
    console.log("❌ Error: El título debe tener al menos 2 palabras.");
    return;
  }

  // Validación 5: año válido (no futuro)
  if (!anioValido(anio)) {
    console.log("❌ Error: El año es inválido o está en el futuro.");
    return;
  }

  // Creamos el objeto libro
  const nuevoLibro = {
    id,
    titulo: titulo.trim(),
    autor: autor.trim(),
    anio,
    genero: genero.trim(),
    disponible: true
  };

  // Lo agregamos al array
  libros.push(nuevoLibro);
  console.log("✅ Libro agregado con éxito.");
}

// b) Buscar libro (búsqueda lineal)
function buscarLibro(criterio, valor) {
  // Validación de criterios permitidos
  const criteriosValidos = ["titulo", "autor", "genero"];
  if (!criteriosValidos.includes(criterio)) {
    console.log("❌ Error: criterio inválido. Usar titulo/autor/genero.");
    return [];
  }

  if (!textoNoVacio(valor)) {
    console.log("❌ Error: Debes ingresar un valor para buscar.");
    return [];
  }

  // Búsqueda lineal: recorremos uno por uno
  const valorNorm = normalizarTexto(valor);
  let resultados = [];

  for (let i = 0; i < libros.length; i++) {
    const campo = normalizarTexto(libros[i][criterio]);
    if (campo.includes(valorNorm)) {
      resultados.push(libros[i]);
    }
  }

  return resultados;
}

// c) Ordenar libros (bubble sort)
function ordenarLibros(criterio) {
  // Validamos criterio
  if (criterio !== "titulo" && criterio !== "anio") {
    console.log("❌ Error: Solo puedes ordenar por 'titulo' o 'anio'.");
    return;
  }

  // Copia para no alterar el orden original permanentemente
  let copia = [...libros];

  // Bubble sort
  let n = copia.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let a = copia[j][criterio];
      let b = copia[j + 1][criterio];

      // Si ordenamos por título, comparamos como texto normalizado
      if (criterio === "titulo") {
        a = normalizarTexto(a);
        b = normalizarTexto(b);
      }

      if (a > b) {
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }

  console.log(`✅ Libros ordenados por ${criterio}:`);
  console.table(copia.map(mostrarLibro));
}

// d) Borrar libro por ID
function borrarLibro(id) {
  if (!esEntero(id) || id <= 0) {
    console.log("❌ Error: ID inválido.");
    return;
  }

  // Validación extra: no borrar si está prestado
  const libro = libros.find(l => l.id === id);
  if (!libro) {
    console.log("❌ No se encontró un libro con ese ID.");
    return;
  }

  if (!libro.disponible) {
    console.log("❌ No se puede borrar un libro que está prestado.");
    return;
  }

  const indice = libros.findIndex(l => l.id === id);
  libros.splice(indice, 1);
  console.log("✅ Libro eliminado correctamente.");
}

// ============================================================
// PUNTO 3: GESTIÓN DE USUARIOS
// ============================================================

// a) Registrar usuario
function registrarUsuario(nombre, email) {
  if (!textoNoVacio(nombre)) {
    console.log("❌ Error: El nombre no puede estar vacío.");
    return;
  }

  if (!emailValido(email)) {
    console.log("❌ Error: Email con formato inválido.");
    return;
  }

  // Validación extra: evitar emails duplicados 
  const emailNorm = normalizarTexto(email);
  const existeEmail = usuarios.some(u => normalizarTexto(u.email) === emailNorm);
  if (existeEmail) {
    console.log("❌ Error: Ya existe un usuario con ese email.");
    return;
  }

  // Creamos el usuario
  const nuevoUsuario = {
    id: usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
    nombre: nombre.trim(),
    email: emailNorm,
    librosPrestados: []
  };

  usuarios.push(nuevoUsuario);
  console.log("✅ Usuario registrado con éxito.");
}

// b) Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  return usuarios;
}

// c) Buscar usuario por email
function buscarUsuario(email) {
  if (!emailValido(email)) {
    console.log("❌ Error: Email inválido.");
    return undefined;
  }

  const emailNorm = normalizarTexto(email);
  return usuarios.find(u => normalizarTexto(u.email) === emailNorm);
}

// d) Borrar usuario
function borrarUsuario(nombre, email) {
  if (!textoNoVacio(nombre) || !emailValido(email)) {
    console.log("❌ Error: Datos inválidos para borrar usuario.");
    return;
  }

  const emailNorm = normalizarTexto(email);
  const indice = usuarios.findIndex(u => normalizarTexto(u.nombre) === normalizarTexto(nombre) && normalizarTexto(u.email) === emailNorm);

  if (indice === -1) {
    console.log("❌ Usuario no encontrado.");
    return;
  }

  // Validación extra: no borrar usuario si tiene libros prestados
  if (usuarios[indice].librosPrestados.length > 0) {
    console.log("❌ No se puede borrar un usuario que tiene libros prestados.");
    return;
  }

  usuarios.splice(indice, 1);
  console.log("✅ Usuario eliminado correctamente.");
}

// ============================================================
// PUNTO 4: SISTEMA DE PRÉSTAMOS
// ============================================================

function prestarLibro(idLibro, idUsuario) {
  if (!esEntero(idLibro) || !esEntero(idUsuario)) {
    console.log("❌ Error: Los IDs deben ser números enteros.");
    return;
  }

  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro) {
    console.log("❌ Error: No existe un libro con ese ID.");
    return;
  }

  if (!usuario) {
    console.log("❌ Error: No existe un usuario con ese ID.");
    return;
  }

  // Validación extra: máximo 3 libros prestados
  if (usuario.librosPrestados.length >= 3) {
    console.log("❌ Error: El usuario ya tiene el máximo de 3 libros prestados.");
    return;
  }

  // Validación extra: evitar prestar el mismo libro dos veces al mismo usuario
  if (usuario.librosPrestados.includes(idLibro)) {
    console.log("❌ Error: Este usuario ya tiene prestado ese libro.");
    return;
  }

  if (!libro.disponible) {
    console.log("❌ Error: El libro no está disponible.");
    return;
  }

  // Si pasa todo, hacemos el préstamo
  libro.disponible = false;
  usuario.librosPrestados.push(idLibro);

  console.log(`✅ Libro "${libro.titulo}" prestado a ${usuario.nombre}.`);
}

function devolverLibro(idLibro, idUsuario) {
  if (!esEntero(idLibro) || !esEntero(idUsuario)) {
    console.log("❌ Error: Los IDs deben ser números enteros.");
    return;
  }

  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro || !usuario) {
    console.log("❌ Error: Libro o usuario inexistente.");
    return;
  }

  // Validación extra: el usuario debe tener ese libro prestado
  if (!usuario.librosPrestados.includes(idLibro)) {
    console.log("❌ Error: El usuario no tiene ese libro prestado.");
    return;
  }

  libro.disponible = true;
  usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);

  console.log(`✅ Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`);
}

// ============================================================
// PUNTO 5: REPORTES (map/filter/reduce)
// ============================================================

function generarReporteLibros() {
  if (libros.length === 0) {
    console.log("⚠️ No hay libros cargados para generar reporte.");
    return;
  }

  const totalLibros = libros.length;
  const cantidadPrestados = libros.filter(l => !l.disponible).length;

  // Cantidad por género usando reduce
  const cantidadPorGenero = libros.reduce((acc, libro) => {
    const g = libro.genero;
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});

  // Libro más antiguo y más nuevo con reduce
  const libroMasAntiguo = libros.reduce((prev, curr) => (prev.anio < curr.anio ? prev : curr));
  const libroMasNuevo = libros.reduce((prev, curr) => (prev.anio > curr.anio ? prev : curr));

  console.log("\n--- REPORTE DE LIBROS ---");
  console.log("Cantidad total de libros:", totalLibros);
  console.log("Cantidad de libros prestados:", cantidadPrestados);
  console.log("Cantidad de libros por género:", cantidadPorGenero);
  console.log("Libro más antiguo:", libroMasAntiguo.titulo, `(${libroMasAntiguo.anio})`);
  console.log("Libro más nuevo:", libroMasNuevo.titulo, `(${libroMasNuevo.anio})`);
}

// ============================================================
// PUNTO 6: LIBROS CON MÁS DE UNA PALABRA EN EL TÍTULO
// ============================================================

function librosConPalabrasEnTitulo() {
  // Regex: solo letras (incluye tildes y ñ) y espacios
  const regexSoloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  const titulos = libros
    .filter(l => {
      const titulo = l.titulo.trim();
      const tieneMasDeUnaPalabra = titulo.split(" ").filter(p => p !== "").length > 1;
      const soloLetras = regexSoloLetrasYEspacios.test(titulo);
      return tieneMasDeUnaPalabra && soloLetras;
    })
    .map(l => l.titulo);

  console.log("\n--- TÍTULOS CON MÁS DE UNA PALABRA (solo letras) ---");
  console.log(titulos);

  return titulos;
}

// ============================================================
// PUNTO 7: CÁLCULOS ESTADÍSTICOS (Math)
// ============================================================

function calcularEstadisticas() {
  if (libros.length === 0) {
    console.log("⚠️ No hay libros para calcular estadísticas.");
    return;
  }

  const anios = libros.map(l => l.anio);

  // Promedio
  const suma = anios.reduce((a, b) => a + b, 0);
  const promedio = Math.round(suma / anios.length);

  // Año más frecuente (moda)
  const frecuencias = {};
  anios.forEach(a => (frecuencias[a] = (frecuencias[a] || 0) + 1));

  const anioMasFrecuente = Number(
    Object.keys(frecuencias).reduce((a, b) => (frecuencias[a] > frecuencias[b] ? a : b))
  );

  // Diferencia entre más antiguo y más nuevo
  const minAnio = Math.min(...anios);
  const maxAnio = Math.max(...anios);
  const diferencia = maxAnio - minAnio;

  console.log("\n--- ESTADÍSTICAS ---");
  console.log("Promedio de años:", promedio);
  console.log("Año más frecuente:", anioMasFrecuente);
  console.log("Diferencia entre el más antiguo y el más nuevo:", diferencia);
}

// ============================================================
// PUNTO 8: NORMALIZACIÓN DE DATOS
// ============================================================

function normalizarDatos() {
  // Convertir títulos a mayúsculas
  libros.forEach(l => (l.titulo = l.titulo.toUpperCase()));

  // Eliminar espacios extra en autores
  libros.forEach(l => (l.autor = l.autor.trim()));

  // Emails a minúsculas
  usuarios.forEach(u => (u.email = normalizarTexto(u.email)));

  console.log("✅ Datos normalizados correctamente.");
}

// ============================================================
// PUNTO 9: MENÚ PRINCIPAL (Interfaz por consola)
// ============================================================

function menuPrincipal() {
  let opcion;

  do {
    console.log("\n=========== MENÚ BIBLIOTECA ===========");
    console.log("1. Agregar libro");
    console.log("2. Buscar libro");
    console.log("3. Ordenar libros");
    console.log("4. Borrar libro");
    console.log("5. Registrar usuario");
    console.log("6. Mostrar usuarios");
    console.log("7. Buscar usuario por email");
    console.log("8. Borrar usuario");
    console.log("9. Prestar libro");
    console.log("10. Devolver libro");
    console.log("11. Reporte de libros");
    console.log("12. Libros con títulos de más de una palabra");
    console.log("13. Estadísticas");
    console.log("14. Normalizar datos");
    console.log("0. Salir");

    opcion = prompt("Elegí una opción: ").trim();

    switch (opcion) {
      case "1": {
        // Pedimos datos del libro
        const id = parseInt(prompt("ID (número entero): "));
        const titulo = prompt("Título: ");
        const autor = prompt("Autor: ");
        const anio = parseInt(prompt("Año: "));
        const genero = prompt("Género: ");

        agregarLibro(id, titulo, autor, anio, genero);
        break;
      }

      case "2": {
        const criterio = normalizarTexto(prompt("Criterio (titulo/autor/genero): "));
        const valor = prompt("Valor a buscar: ");
        const resultados = buscarLibro(criterio, valor);
        console.table(resultados.map(mostrarLibro));
        break;
      }

      case "3": {
        const criterio = normalizarTexto(prompt("Ordenar por (titulo/anio): "));
        ordenarLibros(criterio);
        break;
      }

      case "4": {
        const id = parseInt(prompt("ID del libro a borrar: "));
        borrarLibro(id);
        break;
      }

      case "5": {
        const nombre = prompt("Nombre: ");
        const email = prompt("Email: ");
        registrarUsuario(nombre, email);
        break;
      }

      case "6": {
        console.table(mostrarTodosLosUsuarios());
        break;
      }

      case "7": {
        const email = prompt("Email del usuario: ");
        const usuario = buscarUsuario(email);
        if (usuario) {
          console.table([usuario]);
        } else {
          console.log("❌ No se encontró usuario con ese email.");
        }
        break;
      }

      case "8": {
        const nombre = prompt("Nombre del usuario: ");
        const email = prompt("Email del usuario: ");
        borrarUsuario(nombre, email);
        break;
      }

      case "9": {
        const idLibro = parseInt(prompt("ID del libro: "));
        const idUsuario = parseInt(prompt("ID del usuario: "));
        prestarLibro(idLibro, idUsuario);
        break;
      }

      case "10": {
        const idLibro = parseInt(prompt("ID del libro: "));
        const idUsuario = parseInt(prompt("ID del usuario: "));
        devolverLibro(idLibro, idUsuario);
        break;
      }

      case "11": {
        generarReporteLibros();
        break;
      }

      case "12": {
        librosConPalabrasEnTitulo();
        break;
      }

      case "13": {
        calcularEstadisticas();
        break;
      }

      case "14": {
        normalizarDatos();
        break;
      }

      case "0": {
        console.log("👋 Saliendo del sistema...");
        break;
      }

      default:
        console.log("❌ Opción inválida. Intentá otra vez.");
    }
  } while (opcion !== "0");
}

// ============================================================
// INICIO DEL PROGRAMA
// ============================================================
menuPrincipal();
