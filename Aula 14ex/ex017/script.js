let num = document.getElementById('num')
let res = document.getElementById('res')

// minha solução
function gerar() {
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''        
        for (let i = 0; i <= 10; i++) {
            res.innerHTML += `<option value="${i}">${i} x ${n} = ${i*n}</option>`
        }
    }
}

/* solução do guanabara
function gerar() {
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else { 
        let n = Number(num.value)
        let c = 0
        res.innerHTML = ''
        while (c <= 10) {
            let opt = document.createElement('option')
            opt.setAttribute('value', `${c}`)
            opt.text = `${c} x ${n} = ${c*n}`
            res.appendChild(opt)
            c++
        }
    }
}
*/