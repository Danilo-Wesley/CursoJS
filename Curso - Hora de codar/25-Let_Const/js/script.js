let x = 5 // var x = 5 (basicamente a msm coisa)

const y = 10 // nao pode mudar o valor dps, dá erro

var z = 2 // se altera

//y = 12

x = 12

console.log(x)

if(true){

    let x = 20 // let consegue fazer um escopo local em blocos

    console.log(x)

    const y = 50 //nao se mistura com o global

    console.log(y)

    var z = 3 // alterou o global z

    console.log(z)

}

console.log(x)
console.log(y)
console.log(z)