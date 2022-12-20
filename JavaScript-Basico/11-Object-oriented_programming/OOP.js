// Ejercicio 11 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
class Estudiante {
    nombre = "Fernando"
    asignaturas = ["HTML", "CSS", "JavaScript"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
};

const estudiante = new Estudiante();

console.log(estudiante.obtenDatos()); // { nombre: 'Fernando', asignaturas: [ 'HTML', 'CSS', 'JavaScript' ] }
