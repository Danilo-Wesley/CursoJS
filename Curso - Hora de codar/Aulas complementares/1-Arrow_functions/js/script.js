// Arrow function

/* (a,b) => {
    return a + b
} */

//(a,b) => a + b

let a = 5
let b = 10

// varios argumentos
let c = (num1,num2) => num1 + num2

console.log(c(a,b))

let d = (x,y) => {

    let op

    if(x>5){
        op = x * y
    }else{
        op = x / y
    }
    return op
}

console.log(d(a,b))

// um argumento
let frase = "O Danilo é um ótimo dev"

let fraseArray = (frase) => frase.split(" ")

console.log(fraseArray(frase))

//sem argumento
let semArg = () => console.log("Não tenho argumentos")

semArg()

// casos de uso

const data = [
    {name: "Matheus", age: 31, sallary: 2000, driverLicense: true},
    {name: "João", age: 18, sallary: 1500, driverLicense: false},
    {name: "Pedro", age: 50, sallary: 7200, driverLicense: true},
    {name: "Mariana", age: 22, sallary: 4000, driverLicense: true},
    {name: "Érica", age: 16, sallary: 0, driverLicense: false}
]

let SalarioAlto = data.filter((user) => user.sallary > 2000)

console.log(SalarioAlto)

// setTimeout(() => console.log("Deu tempo"),5000)

// NÃO USAR ARROW

let pessoa = { 
    nome: "Danilo",
    sayName: () => console.log(this.name) // o this aq na arrow é o window, melhor usar functions
}

pessoa.sayName()

let btn = document.querySelector("#btn")

console.log(btn)

// btn.addEventListener("click", () =>{ // nao funfa
//     this.classList.toggle("classe")
// })

// O certo: 

btn.addEventListener("click", function(){
    this.classList.toggle("classe")
})