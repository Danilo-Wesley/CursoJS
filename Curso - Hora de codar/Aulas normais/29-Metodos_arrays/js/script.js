// length

var arr = [1, 2, 3, 4, 5]

console.log(arr.length)


//push - adiciona elemento no array, no fim do array
arr.push("Qualquer coisa")

console.log(arr)

//pop - remove o elemento do fim do array
arr.pop()

console.log(arr)

//unshift - adiciona o elemento no inicio do array
arr.unshift(0)
arr.unshift("exato")

console.log(arr)

//shift - Remove o elemento do inicio do array

arr.shift()

console.log(arr)

// acessar o último elemento do array
console.log(arr[arr.length - 1])

//isArray - verifica se é um array (true ou false)

console.log(Array.isArray(5))

console.log(Array.isArray(arr))