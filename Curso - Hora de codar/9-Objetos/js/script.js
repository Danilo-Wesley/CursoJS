var obj = {
    nome:  "Danilo",
    idade: 18,
    profissao: "programador",
    estarTrabalhando: false
}

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.profissao)

console.log(`O meu nome é ${obj.nome} e tenho ${obj.idade} anos, e minha profissão é ${obj.profissao}`)

obj.idade = '19'

console.log(obj.idade)

obj.graduacao = "Eng. de Software"

console.log(obj)