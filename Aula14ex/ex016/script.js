function contar(){
    var iniciotxt = window.document.getElementById('txtinicio').value
    var fimtxt = window.document.getElementById('txtfim').value
    var res = window.document.getElementById('res')
    var passotxt = window.document.getElementById('txtpasso').value
    if (iniciotxt.length == 0 || fimtxt.length ==0){
        alert('[ERRO] Faltam dados para a contagem!')
        return
    }
    var inicio = Number(iniciotxt)   
    var fim = Number(fimtxt)
    var passo = Number(passotxt)
    if(passo <= 0){
        alert('Passo Inválido! Considerando Passo = 1')
        passo = 1
    }
    res.innerHTML = 'Contando: <br>'

    if (inicio < fim){
        for(var c = inicio; c <= fim; c = c + passo){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else { //decrescente
        for(var c = inicio; c >= fim; c = c - passo){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}