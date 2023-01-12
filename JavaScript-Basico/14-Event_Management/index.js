// Ejercicio 14 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const boton = document.querySelector("button")

boton.addEventListener("click", () => alert("Se dió CLICK en el botón!"))

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery!")
})
