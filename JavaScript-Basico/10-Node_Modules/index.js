// Ejercicio 10 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
import { suma, multiplica } from "./controller.js"; // Importo el módulo "controller.js" en el entrypoint "index.js" (este archivo).
import chalk from "chalk"; // Instalé e importé la librería "chalk" - https://www.npmjs.com/package/chalk

// console.log(multiplica(suma(1, 2), suma(4, 5)));
console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))));
