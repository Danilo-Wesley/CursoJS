// adicionar atributo
var title = document.querySelector("#title")

title.setAttribute("class", "testando-atributo") // adicionando class com este nome

console.log(title)

var button = document.querySelector("#button")

button.setAttribute("disabled", "disable")

var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute("id", "titulo2")

// remover atributo

var lista = document.querySelector("#lista")

lista.removeAttribute("id")