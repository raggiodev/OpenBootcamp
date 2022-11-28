// Ejercicio 03-3 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
let factorial = 1;
let i = 10;

while (true) {
    factorial *= i;
    i--;
    if (i === 1) break;
}

console.log(factorial); // Factorial de 10 = 3628800
