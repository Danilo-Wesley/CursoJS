// criação de promessa
const myPromise = new Promise((resolve, reject) => {

    const nome = "Danilo"

    if(nome === "Danilo"){
    resolve("Usuário Danilo encontrado!")
    } else{
        reject("O usuário Danilo não foi encontrado!")
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Danilo"

    if(nome === "Danilo"){
    resolve("Usuário Danilo encontrado!")
    } else{
        reject("O usuário Danilo não foi encontrado!")
    }
})

myPromise2.then((data) => {
    return data.toUpperCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "João"

    if(nome === "Danilo"){
    resolve("Usuário Danilo encontrado!")
    } else{
        reject("O usuário Danilo não foi encontrado!")
    }
})

myPromise3.then((data)=> {
    console.log(data)
}).catch((err) => {
    console.log("Aconteceu um erro: " + err)
})

// Resolver várias promessas com all (espera todas as promessas)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P1, ok!")
    },3000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("p2, ok!")
})

const p3 = new Promise((resolve, reject) => {
    resolve("p3, ok!")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => console.log(data))

console.log("Depois do ALL")

// várias promessas com Race (corrida) so a mais rapida

const p4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P4, ok!")
    },3000)
})

const p5 = new Promise((resolve, reject) => {
    resolve("p5, ok!")
})

const p6 = new Promise((resolve, reject) => {
    resolve("p6, ok!")
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data) => console.log(data))

// Fetch request na API do github
// Fetch API

const userName = "Danilo-Wesley"

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers:{
        Accept: "application/vnd.github.v3+json"
    },
}).then((resposta) => {

    console.log(typeof resposta)
    console.log(resposta)
    return resposta.json()

}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`)
}).catch((err) => {
    console.log(`Houve um erro: ${err}`)
})


