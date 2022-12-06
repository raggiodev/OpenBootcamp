// Ejercicio 07-3 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const hoy_ahora = new Date(); // Fecha actual

const nacimiento = new Date(1999, 0, 9, 7, 45, 15); // Sat Jan 09 1999 07:45:15 GMT-0300 (hora estándar de Argentina)

const comparacion = hoy_ahora > nacimiento; // true

const diaNacimiento = nacimiento.getDate(); // 9
const mesNacimiento = nacimiento.getMonth()+1; // 1
const anioNacimiento = nacimiento.getFullYear(); // 1999
