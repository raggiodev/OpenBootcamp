// Ejercicio 08 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
function siempreTrue() {
    return true
};

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
};

function* generaIDPares() {
    let id = 0
    while (true) {
        yield id += 2
    }
};

const generador = generaIDPares();

console.log(generador.next()); // { value: 2, done: false }
console.log(generador.next().value); // 4
console.log(generador.next().value); // 6
console.log(generador.next().value); // 8
console.log(generador.next().value); // 10
