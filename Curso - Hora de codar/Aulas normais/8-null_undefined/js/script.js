//Hoisting - içamento
console.log(sobrenome) // não dá erro pq ele inicia previamente no topo do código, mas não carregadas, por isso dá undefined.

var nome = null
var sobrenome = "wesley"

console.log(nome)
console.log(sobrenome)

nome = "Danilo"

console.log(nome)