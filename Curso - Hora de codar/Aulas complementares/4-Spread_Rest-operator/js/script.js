// Spread (espalhar) e Rest

// ...obj

const player = {
    nickname: "Dellp",
    health: 20,
    inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
            {type: "regeneration", duration: 8},
            {type: "defense", duration: 8}
        ]
    }
}

function updatePlayer(player, newprops){
    return {...player, ...newprops } // espalhou todas as propriedades e substituiu
}

const updatedPlayer = updatePlayer(player, {
    nickname: "Danail",
    coins: 0,
})

console.log(updatedPlayer)

// mais simples:

const person = { name: "Danilo", filho: "De cristo"}
const newPerson = {...person, age:22 , name: "Dellp"}

console.log(newPerson)

const positive = [1,2,3,4]
const negative = [-1,-2,-3,-4]

const numbers = [...positive,... negative]

console.log(numbers)


// Rest => extraindo as propriedades do objetos... 

const[one, two, ...other] = numbers

console.log(one,two, other)

// Rest em destruturação

const { inventory, ...playerinfo } = player

console.log(playerinfo)