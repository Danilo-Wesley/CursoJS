// splice - adiciona elementos no meio de um array, [indice onde cmç , se vai excluir , oq quer adicionar]

var arr = [1,2,3,4,5]

arr.splice(2, 0, 999)

console.log(arr)

arr.splice(4, 1) // removendo sem subtituir
console.log(arr)

//indexOf - acha o index de um elemento

console.log(arr.indexOf(5))

// join - transforma array em uma string
var arr2 = ["Jesus", "te", "ama", "meu" , "irmão"]

console.log(arr2.join(" "))

// reverse - inverter um array
console.log(arr2.reverse())