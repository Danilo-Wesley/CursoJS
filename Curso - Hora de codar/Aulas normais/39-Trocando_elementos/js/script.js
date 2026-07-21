//criar um elemento

var el = document.createElement("h3")

el.classList = "testando-classe"

el.textContent = "Este é o texto do H3"

console.log(el)

// selecionar o elemento q eu quero trocar
var title = document.querySelector("#title")

console.log(title)

// selecionar o pai do elemento
var pai = title.parentNode

// trocar o elemento
pai.replaceChild(el, title) // parametros [o novo, o substituido]