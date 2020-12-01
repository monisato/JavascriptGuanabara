let num = document.getElementById("num") // receber numero do input
let numList = document.getElementById("numList")
let res = document.getElementById("res")
let numArray = []

//minha versão
/*
function adicionar() {
    let n = Number(num.value) 

    if (n < 1 || n > 100 || num.length == 0) {
        window.alert('Dados inválidos!') //checa se está entre 1 e 100 (1 e 100 incluso)
    } else if (numArray.includes(n, 0)){
        window.alert('Valor já adicionado!') //checa se o número já foi inserido
    } else {
        numArray.push(n)
        numList.innerHTML += `<option>O valor ${n} foi adicionado.</option>`
        res.innerHTML = ""
    }
    num.value = ""
    num.focus() // foco no input
}

function finalizar() {
    if (numArray.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let numOrder = numArray.sort() //ordem crescente dos valores
        
        res.innerHTML += `<p>A quantidade de valores adicionados é ${numOrder.length}.</p>`
    
        let numMaior = numOrder[numOrder.length -1]
        res.innerHTML += `<p>O maior valor adicionado é ${numMaior}.</p>`
    
        res.innerHTML += `<p>O menor valor adicionado é ${numOrder[0]}.</p>`
        
        let numTotal = 0
        for (let i = 0; i < numOrder.length; i++) {
            numTotal += numOrder[i]
        }
        res.innerHTML += `<p>A soma dos valores é ${numTotal}.</p>`
        
        let numMedia = (numTotal) / (numOrder.length)
        res.innerHTML += `<p>A média dos valores é ${numMedia}.</p>`
    }
}

function apagar() {
    num.value = ""
    numList.innerHTML = ""
    numArray = []
    res.innerHTML = ""
}
*/

// versão guanabara

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true // numero 1 a 100
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true // está na lista --> rejeitar dado
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numArray)) { // ""!"" para pegar return false
        numArray.push(Number(num.value))
        let newOpt = document.createElement('option')
        numList.appendChild(newOpt)
        newOpt.text = `Valor ${num.value} foi adicionado.` // não precisa converter para Number pois está sendo incluido numa lista
        res.innerHTML = ""      
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ""
    num.focus() // foco no input
}

function finalizar() {
    if (numArray.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = numArray.length


        res.innerHTML = ``
        res.innerHTML += `<p>Foram adicionados ${total} valores.</p>`
        res.innerHTML += `<p></p>`

    }
}


function apagar() {
    num.value = ""
    numList.innerHTML = ""
    numArray = []
    res.innerHTML = ""
}
