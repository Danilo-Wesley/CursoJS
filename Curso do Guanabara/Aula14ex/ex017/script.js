function tabuada(){
    var numtxt = window.document.getElementById('txtnum').value
    var num = Number(numtxt)
    var tab = window.document.getElementById('tab')
    if(numtxt.length == 0){
        alert('[Erro] Insira um número')
    } else{
        tab.innerHTML = '' 
        for( var c = 0; c <= 10; c++){
            var res = window.document.createElement('option')

            var mut = num * c
            res.innerText = `${num} x ${c} = ${mut}`

            tab.appendChild(res)
        }
    }
}