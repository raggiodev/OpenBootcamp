// Ejercicio 16 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
const paragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo " + paragraph.innerText);
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)

        const ghost_element = document.querySelector(".ghost-image")
        event.dataTransfer.setDragImage(ghost_element, 0, 0)
    })

    paragraph.addEventListener("dragend", () => {
        // console.log("Dejé de arrastrar el elemento")
        paragraph.classList.remove("dragging")
    })
})

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("Drag Over (Arrastro el elemento)");
    })

    section.addEventListener("drop", event => {
        console.log("Solté el elemento");
        const id_paragraph = event.dataTransfer.getData("id")
        console.log("Párrafo ID:", id_paragraph)
        const paragraph = document.getElementById(id_paragraph)
        section.appendChild(paragraph)
    })
})

const dumpster = document.querySelector(".dumpster")    

dumpster.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    console.log("Arrastro el elemento hacia la papelera")
})

dumpster.addEventListener("drop", event => {
    const id_paragraph = event.dataTransfer.getData("id")
    document.getElementById(id_paragraph).remove()
})
