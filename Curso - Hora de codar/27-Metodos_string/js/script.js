// length comprimento

var nome = "Danilo"

console.log(nome.length)

var obj = "bola"

console.log(obj.length)

//indexOf acha onde cmç uma frase ou qual caractere esta em tal posição

console.log(nome[3])

var frase = "Jesus voltará, acerta a tua vida."

console.log(frase.indexOf("acerta"))

//slice - extrai / copia (xerox) da parte selecionada

var acerta = frase.slice(15, 21)

console.log(acerta)

//replace - troca uma palavra

var novaFrase = frase.replace("acerta", "apruma")

console.log(novaFrase)