var lista = ["Laranja", "Maçã", "Pera", "Jaca", "Açaí"]

var listaUl = document.createElement("ul")

var body = document.body

//console.log(body)

body.appendChild(listaUl)

var listaNoBody = document.getElementsByTagName("ul")

console.log(listaNoBody[0])

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement("li")

    liFor.textContent += lista[i]

    listaUl.appendChild(liFor)

}