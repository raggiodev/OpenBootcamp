// Ejercicio 04 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
let nombre = "Joe";
let apellido = "Raggio";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let estudianteLength = estudiante.length;

let inicialNombre = nombre[0];
let finalApellido = apellido[apellido.length - 1];

let estudianteSinEspacios = estudiante.replace(/ /g, "");

let nombreEnEstudiante = estudiante.includes(nombre);

// Todos estos ejercicios también se pueden hacer de otros modos con los mismos resultados y que sean buenas prácticas.
