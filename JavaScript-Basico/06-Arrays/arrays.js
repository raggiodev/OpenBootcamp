// Ejercicio 06 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const compra = ["Arroz", "Leche", "Pan", "Fideos", "Cafe"];

compra.push("Aceite de Girasol");
compra.pop();

const peliculas = [
    {
        titulo: "Interstellar",
        director: "Christopher Nolan",
        fecha: new Date(2014, 10, 06)
    },
    {
        titulo: "Schindler's List",
        director: "Steven Spielberg",
        fecha: new Date(1994, 1, 24)
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: new Date(1994, 4, 21)
    }
];

const newPeliculas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

const directores = peliculas.map(peliculas => peliculas.director);
const titulos = peliculas.map(peliculas => peliculas.titulo);

const directores_titulos = directores.concat(titulos);
const directores_titulos_propagacion = [...directores, ...titulos];
