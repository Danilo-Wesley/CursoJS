var x = 1 // escopo global

var y = 3 // escopo global

console.log(x,y)

function teste(){
    var z = 0 //escopo local

console.log(z)

}
teste()

function testando(){

var z = 5 // por estar em escopo local, nao interfere com outra de mesmo nome local

console.log(z)

}
testando()

if(true){

var p = 1  // mesmo no IF ainda continua global

}

console.log(p)