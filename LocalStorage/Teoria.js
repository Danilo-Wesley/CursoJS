// 1 - inserir dado
localStorage.setItem('nome', 'Danilo')

// 2 - restart sem perder dados

// 3 - resgatar item
const nome  = localStorage.getItem('nome')
console.log(nome)

// 4 - resgate de item q nao existe
const lastName = localStorage.getItem('lastname')
console.log(lastName)

if (!lastName){
    console.log('Sem sobrenome!')
}

// 5 - remover item
localStorage.removeItem('nome')

// 6 - Lipar todos os itens
localStorage.setItem('a', 1)
localStorage.setItem('b', 2)

//console.log(typeof localStorage.getItem('a')) - qualquer dado vira string

localStorage.clear()

// 7 - session storage
sessionStorage.setItem('number' , 123)

// 8 - reiniciar e perder dados


const n = sessionStorage.getItem('number')
console.log(n)

//sessionStorage.removeItem('number')

sessionStorage.clear()

// 9 - salvar objeto

const person = {
    name: 'Danilo',
    age: 18,
    job: 'Programmer'
}

// localStorage.setItem('Person' , person) - nao funciona, nao transforma direito

localStorage.setItem('person', JSON.stringify(person))


const getPerson = localStorage.getItem('person')

console.log(getPerson)

const personObjetc = JSON.parse(getPerson)

console.log(typeof personObjetc)

console.log(personObjetc.name)
