// RESUMO DO 'THIS':
// 1. Fora de objetos: 'this' é o escopo global (Ex: 'window' no navegador).
// 2. Dentro de objetos: 'this' é o PRÓPRIO OBJETO (Ex: 'this.nome' acessa a propriedade do objeto).
// 3. Por que usar dentro do objeto? Se não usar 'this', o JS procura uma variável fora/global 
//  em vez de olhar para os dados do próprio objeto, gerando erros.



var teste = 5

console.log(this)
console.log(this.teste)
console.log(teste)

let pessoa = { 
    nome: "Danilo",
    idade: 18,
    falar: function(){
        console.log("Olá tudo bem?")
    },
    dizerNome: function(){
        console.log(`O meu nome é ${this.nome}`)
    },
    aniversario: function(){
        this.idade += 1
    }
}

pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)