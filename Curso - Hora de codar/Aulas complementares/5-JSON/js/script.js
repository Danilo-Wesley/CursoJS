const objs = [
  {
    nome: "Danilo",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "programador",
      empresa: "Empresa X",
    },
    hobbies: ["Programar", "Ir ao culto", "ler"],
  },
  {
    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
  },
]

console.log(objs)


//JSON
// converter objeto para JSON (tipo enviar pra API)
const jsonData = JSON.stringify(objs)

console.log(jsonData)

console.log(typeof jsonData)

// converter JSON para objeto
const objData = JSON.parse(jsonData)

console.log(objData)

console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})