function primeiraFuncao(){

console.log("Hello World das funções")

}

primeiraFuncao()

function dizerNome(nome){ // function com argumento / parâmetro

console.log(`O nome é ${nome}`)

}

dizerNome("Danilo")
dizerNome("Wesley")
dizerNome("Pedro")

var nomeDoBancoDeDados = "João"

dizerNome(nomeDoBancoDeDados)

function soma(a,b){
    var soma = a + b
    return soma

    /* 
    ou assim:

    return a + b

    */

}

var somaUm = soma(2,5)

console.log(somaUm)

var somaDois = soma(5,5)

console.log(somaDois)

// ou 

console.log(soma(4,5))