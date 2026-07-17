// setTimeout - vai executar uma função dps de um tempo - assícrono

console.log("Antes do setTimeout")

setTimeout(function(){

    console.log("Testando o setTimeout")

}, 2000) // em ms (milisegundos)

console.log("Depois do setTimeout")

// setInterval - tipo um loop, executa a cada tempo
setInterval(function(){

console.log("Testando setInterval")

},1000)