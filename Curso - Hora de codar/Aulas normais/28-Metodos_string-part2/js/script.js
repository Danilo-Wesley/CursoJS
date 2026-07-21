// toLowerCase e toUpperCase - transforma a caixa do texto

var frase =  "Está é a frase que vamos manipular"

var fraseCaixaAlta = frase.toUpperCase()

console.log(frase.toLowerCase())
console.log(fraseCaixaAlta)

// trim - apara espaços

var nome =  "     Danilo     "

var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)

// split trasforma em array

console.log(frase.split(" ")) // cada espaço

var tags =  "PHP, JavaScript, HTML, CSS, React"

console.log(tags.split(", ")) // espaço e virgua para array

// lastIndexOf - ultimo caractere 

var fraseDois = "Eu quero a ultima palavra desse teste"

console.log(fraseDois.lastIndexOf("a")) // encontra a ultima palavra de um texto