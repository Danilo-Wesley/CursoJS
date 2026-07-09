function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()    
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora > 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#00A8FF'
    }else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        window.document.body.style.background = '#FF5E00'
    } else {
        img.src = 'fotonoite.jpg'
        window.document.body.style.background = '#0A1128'
        window.document.body.querySelector('header').style.color = '#00E5FF'
        window.document.body.querySelector('footer').style.color = '#F4F7F6'  
    }
}
