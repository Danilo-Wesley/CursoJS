let numeros = []
let divresult = window.document.querySelector('div.resultado')

function Numero(n){
    if(n <1 || n > 100){
        return false
    } else{return true}
}

function inLista(n , l){
    if(l.indexOf(n) != -1){
        return true // ta na lista
    } else { return false // nao ta na lista
        }

}

function adicionar(){
    divresult.innerHTML = ''

    let input = window.document.getElementById('txtnum')
    let numtxt = input.value

    if(numtxt.length == 0){
        return alert('Adicione um número')
    }

    let num = Number(numtxt)

    if(Numero(num) && !inLista(num, numeros)){
    numeros.push(num)
    let selec = window.document.getElementById('res')
    let opt = window.document.createElement('option')
    opt.innerHTML = `Valor ${num} adicionado.`
    selec.appendChild(opt)
} else {
    alert('Valor inválido ou número ja adicionado')
}
    input.value = ''
    input.focus()
}
function finalizar(){
    
    if(numeros.length == 0){
        return alert('Adicione um número')
    }

    
    divresult.innerHTML = ''
    
    let ptotalnum = window.document.createElement('p')
    ptotalnum.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados`
    divresult.appendChild(ptotalnum)

    let pmaiornum = window.document.createElement('p')
    numeros.sort(function(a, b) { return a - b })
    pmaiornum.innerHTML = `O maior valor informado foi ${numeros.at(-1)}`
    divresult.appendChild(pmaiornum)

    let pmenornum = window.document.createElement('p')
    pmenornum.innerHTML = `O menor valor informado foi ${numeros[0]}`
    divresult.appendChild(pmenornum)

    let soma = 0
    numeros.forEach (numetemp => soma += numetemp)
    let psomanum = window.document.createElement('p')
    psomanum.innerHTML = `Somando todos os valores temos ${soma}`
    divresult.appendChild(psomanum)

    let media = soma / numeros.length
    let pmedia = window.document.createElement('p')
    pmedia.innerHTML = `A média dos valores é ${media}`
    divresult.appendChild(pmedia)
}