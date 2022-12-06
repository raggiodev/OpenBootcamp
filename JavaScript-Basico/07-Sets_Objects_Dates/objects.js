// Ejercicio 07-2 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const misDatos = {
    nombre: "Fernando",
    apellido: "Raggio",
    edad: 23,
    altura: 180,
    eresDesarrollador: true
};

const edad = misDatos.edad;

const lista = [
    { ...misDatos },
    {
        nombre: "Gastón",
        apellido: "Da Silva",
        edad: 23,
        altura: 175,
        eresDesarrollador: false
    },
    {
        nombre: "Lucas",
        apellido: "Albuquerque",
        edad: 30,
        altura: 170,
        eresDesarrollador: true
    },
];

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad);

console.log(listaOrdenada); // [ { nombre: 'Lucas', apellido: 'Albuquerque', edad: 30, altura: 170, eresDesarrollador: true }, { nombre: 'Fernando', apellido: 'Raggio', edad: 23, altura: 180, eresDesarrollador: true }, { nombre: 'Gastón', apellido: 'Da Silva', edad: 23, altura: 175, eresDesarrollador: false } ]
