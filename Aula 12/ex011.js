var idade = 67
/*
if (idade < 16) {
    console.log('não vota')
} else {
    if (idade < 18 || idade > 60) {
        console.log('voto opcional')
    } else {
        console.log('voto obrigatório')
    }
}
*/
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 60) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}