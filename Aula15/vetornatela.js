let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/* 
for(let pos = 0; pos < valores.length; pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)} // forma certa porem tem uma melhor
//  */ 

for(let pos in valores){ // esse for in so funciona para arrays e objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
