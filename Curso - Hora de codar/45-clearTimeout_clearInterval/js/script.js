// clear timeout na prática
var x = 0

var myTimer = setTimeout(function(){
    console.log("O x é 0")
},1500)

x = 5

if(x > 0){
    clearTimeout(myTimer)
    console.log("O x passou de zero")
}

// clearInterval na prática
var myInterval = setInterval(function(){
    console.log("Imprimindo Interval")
},500)

setTimeout(function(){


    console.log("Não precisamos mais repetir")

    clearInterval(myInterval)

},5000)