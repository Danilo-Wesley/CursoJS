window.onload = function(){ // so funciona dps de todos os elementos da pagina carregar, assim pode usar o link script no inicio da pagina (head)

    console.log("carregou o DOM")

    var title = document.querySelector("#title")

    console.log(title) // aq funciona

}

console.log("Carregou o JS") // carrega antes

var title = document.querySelector("#title")

console.log(title) // aq da null