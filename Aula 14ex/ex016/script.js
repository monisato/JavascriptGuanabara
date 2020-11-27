function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
            
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else { 
        res.innerHTML = "Resultado:"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // se for contagem progressiva
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#128073 `
            }
        } else if (i > f) {
            // se for contagem regressiva
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} ` // mesmo emoji
            } 
        }
        res.innerHTML += '&#127752'

    }
}