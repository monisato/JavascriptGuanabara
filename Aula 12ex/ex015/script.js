function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // checar se foi preenchido o input e se ele não é maior que o ano atual
    // não é necessário colocar o Number(), pois já foi exigido número no html
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        // criando elemento <img> no html
        var img = document.createElement('img') 

        // definindo atributos no novo elemento img
        // colocando um id chamado foto
        img.setAttribute('id', 'foto')

        // img.style.height = "200px" // coloquei no css
        // img.style.width = "200px"

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'fotoM1.png')
            } else if (idade < 25) {
                // jovem
                img.setAttribute('src', 'fotoM2.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoM3.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoM4.png')
            }
            
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'fotoF1.png')
            } else if (idade < 25) {
                // jovem
                img.setAttribute('src', 'fotoF2.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoF3.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoF4.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        // para addicionar a img
        res.appendChild(img)
    }
}
