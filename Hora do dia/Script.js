function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = "FotoManha.png"
        document.body.style.background = '#FEDE66'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = "FotoTarde.png"
        document.body.style.background = '#F16400'
    } else {
        //Boa noite!
        img.src = "FotoNoite.png"
        document.body.style.background = '#4B3652'
    }
}