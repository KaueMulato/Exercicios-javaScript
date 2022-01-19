function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 14) {
                    // Criança
                    img.setAttribute('src', 'criançaMasc.png')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'adolescenteMasc.png')
                } else if (idade <55) {
                    // Adulto
                    img.setAttribute('src', 'adultoMasc.png')
                } else {
                    // Idoso
                    img.setAttribute('src', 'IdosoMasc.png')
                }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'criançaFem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescenteFem.png')
            } else if (idade <55) {
                // Adulto
                img.setAttribute('src', 'adultoFem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'IdosoFem.png')
            }
        }
        res.style.textAlign = ('center')
        res.innerHTML = `${genero} ${idade} anos`
        res.appendChild(img)
    }
}