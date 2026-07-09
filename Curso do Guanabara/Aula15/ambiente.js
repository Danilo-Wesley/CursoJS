let num = [5, 8, 2, 9, 3]
console.log(num)

num[3] = 6 // posição 4 recebe num 6
num.push(9) // adiciona o num 12 na ultima posição
num.sort() // organiza em ordem crescente
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) // procura em qual posição esta o num entre () no caso 8, se nao acha = -1
if(pos == -1){
    console.log('o valor não foi encontrado!')
} else{
console.log(`O valor está na posição ${pos}`)
}