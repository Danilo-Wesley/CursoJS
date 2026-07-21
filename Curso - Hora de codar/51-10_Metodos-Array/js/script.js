const data = [
    {name: "Matheus", age: 31, sallary: 2000, driverLicense: true},
    {name: "João", age: 18, sallary: 1500, driverLicense: false},
    {name: "Pedro", age: 50, sallary: 7200, driverLicense: true},
    {name: "Mariana", age: 22, sallary: 4000, driverLicense: true},
    {name: "Érica", age: 16, sallary: 0, driverLicense: false}
]

// 1- Reverse => 
const reverseData = data.toReversed() // inverte a lista sem alterar a atual

console.log(reverseData)

// 2 - find => encontra (mas so primeiro resultado)

const salarioAleatorio = 5000

const maiorSalario = data.find((user) => user.sallary > salarioAleatorio)

console.log(maiorSalario)

// 3 - findIndex - encontra o index de item que corresponde a alguma logica
const menorSalario = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)

console.log(menorSalario)

data[menorSalario].sallary += 200

console.log(data[menorSalario])

// 4 - includes => verifica se o array tem algum item especifico
const numbers = [1,2,3,4,5]

const hasFour = numbers.includes(4)

console.log(hasFour) // retorna true ou false

console.log(numbers.includes(100))

// 5 - map => pecorre cada um dos itens e tem a possibilidade de alterar cada um individualmente baseado na condição
data.map((user) => (user.newsletter = false))

console.log(data)

// 6 - filter => filtro baseado em uma condição
const drivers = data.filter((user) => user.driverLicense === true) // para caso seja true nao precisa comparar, so caso seja false

console.log(drivers)

// 7 reduce => redudiz, tipo a soma de salario de todos
const somaSalarios = data.reduce((salarioTotal, user) => (salarioTotal += user.sallary),0) // adicionou 0 ao salarioTotal pra nao dar erro

console.log(somaSalarios)

// 8 - forEach => Eu defino oq ele vai fazer
const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}`)
    })
}

showUserNames(data)

// 9 - some =. verifica se dentro do array algo corresponde ao buscado (true or false) se alguem tem
let someoneWithNewsLetter =  data.some((user) => user.newsletter)

console.log(someoneWithNewsLetter)

data[0].newsletter = true

someoneWithNewsLetter =  data.some((user) => user.newsletter)

console.log(someoneWithNewsLetter)

// 10 - every => verifica se todo mundo tem a condição buscada
const everyUserName = data.every((user) => user.name) // se tiver qualquer valor é true, se nao é false

console.log(everyUserName)

const evertGoodSalary = data.every((user) => user.sallary >= 2000)

console.log(evertGoodSalary)