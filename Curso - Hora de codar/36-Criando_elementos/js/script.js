// inserir elemento no body
const novoParagrafo = document.createElement("p")

novoParagrafo.textContent = "Este é o conteúdo do paragráfo"

console.log(novoParagrafo)

const body = document.body

console.log(body)

body.appendChild(novoParagrafo)

// inserir em um container

const container = document.getElementById("container")

console.log(container)

const elemento = document.createElement("span")

elemento.textContent = "Texto do span"

container.appendChild(elemento)