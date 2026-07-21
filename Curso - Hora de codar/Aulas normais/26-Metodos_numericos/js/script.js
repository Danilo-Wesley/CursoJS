// parseFloat - Transforma string em número decimal (float)

console.log(parseFloat("9.99999"))
console.log(Number.parseFloat("9.99999"))

// parseInt - Transforma em inteiro extraindo os dígitos (NÃO arredonda, ele descarta os decimais)

console.log(parseInt("10"))
console.log(parseInt(16.96))

// toFixed - Controla as casas decimais e retorna uma STRING (Arredonda se necessário)

console.log(23.59213124.toFixed(1))

// isNaN - Verifica se o valor NÃO é um número (Not a Number)

console.log(isNaN("Teste"))
console.log(isNaN(12))
console.log(isNaN("12"))

// MAX_VALUE e MIN_VALUE -- max e minimo valor q se pode trabalahr em JS

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(2.7976931348623157e+308)