// keydown => se segurar gera mts

document.addEventListener("keydown", function(event){

    //console.log(event.key)

    if(event.key === "Enter"){
        console.log("Apertou Enter")
    }

})

//keyup => so funciona quando sobe, ou seja 1 vez só
document.addEventListener("keyup", function(e){

    if(e.key === "Enter"){

        console.log("Soltou o Enter")

    }

})
