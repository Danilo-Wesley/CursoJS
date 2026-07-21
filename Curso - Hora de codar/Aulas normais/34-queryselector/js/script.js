var itemClasse = document.getElementsByClassName("item") // pegou os 8 itens

console.log(itemClasse)


// querySelectorAll
var itensQuery = document.querySelectorAll("#lista2 li") // so itens da lista 2

console.log(itensQuery)

var itensQuery2 = document.querySelectorAll("#lista .item") // so itens da lista 1

console.log(itensQuery2)

// querySelector - semelhante ao getElementeById, pega so 1

var itensQuery3 = document.querySelector("#lista .item") 

console.log(itensQuery3)

var primeiraLista = document.querySelector("#lista")

console.log(primeiraLista)

// so um elemento = querySelector
// Dois ou mais elementos = querySelectorAll