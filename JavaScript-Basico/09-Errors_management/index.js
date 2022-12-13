// Ejercicio 09 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const logger = require('./logger');

function showError() {
    throw new Error("Hola, soy un error desde una función 'showError' dentro del 'index.js' que se encuentra en la carpeta main.");
};

try {
    showError();
} catch (e) {
    logger.log("error", e.toString());
};
