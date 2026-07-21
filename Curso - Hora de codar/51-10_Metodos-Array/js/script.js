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
