let num = document.getElementById("num")
let numList = document.getElementById("numList")
let res = document.getElementById("res")
let numArray = []

//versão melhorada

function adicionar() {
    let n = Number(num.value)
    if (n < 1 || n > 100 || num.length == 0) {
        window.alert('Dados inválidos!') 
    } else if (numArray.includes(n, 0)){
        window.alert('Valor já adicionado!')
    } else {
        numArray.push(n)
        numList.innerHTML += `<option>O valor ${n} foi adicionado.</option>`
        res.innerHTML = ""
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (numArray.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {    
        let maior = Math.max.apply(Math, numArray)
        let menor = Math.min.apply(Math, numArray)
        let soma = 0
        for (let pos in numArray) {
            soma += numArray[pos]
        }
        let media = soma / numArray.length

        res.innerHTML = ""
        res.innerHTML += `<p>A quantidade de valores adicionados é ${numArray.length}.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}

function apagar() {
    num.value = ""
    numList.innerHTML = ""
    numArray = []
    res.innerHTML = ""
}