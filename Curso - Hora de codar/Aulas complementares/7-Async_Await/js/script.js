// sintaxe
// function primeiraFuncao(){

//   return new Promise((resolve) => {

//     setTimeout(() => {
//       console.log("Esperou isso")
//       resolve()
//     }, 3000)

//   })
    
// }

// async function segundaFuncao(){ //funcao assicrona

//   console.log("iniciou")
  
//   await primeiraFuncao() // o await faz esperar o tempo de da primeira pra funçao pra continuar o codigo

//   console.log("terminou")

// }

// segundaFuncao()

// Na prática

function getUser(id){

  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))

}

async function mostrarName(id) {
  
  try{

  const user = await getUser(id)

  console.log(`O nome do usuário é: ${user.name}`)

  } catch(err){
    console.log(`Erro: ${err}`)
  }
}

 mostrarName(3)