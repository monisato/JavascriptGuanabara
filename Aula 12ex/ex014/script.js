function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    //var hora = 20 para teste de horario

    msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha.jpg"
        img.alt = "foto da manhã"
        document.body.style.background = 'linear-gradient(180deg, rgba(255,165,48,1) 20%, rgba(148,69,0,1) 70%)'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "tarde.jpg"
        img.alt = "foto da tarde"
        document.body.style.background = 'linear-gradient(180deg, rgba(2,160,193,1) 0%, rgba(173,61,255,1) 50%, rgba(255,116,214,1) 100%)'
    } else {
        //boa noite
        img.src = "noite.jpg"
        img.alt = "foto da noite"
        document.body.style.background = 'linear-gradient(200deg, rgba(5,19,31,1) 0%, rgba(85,127,163,1) 100%)'
    }
}

