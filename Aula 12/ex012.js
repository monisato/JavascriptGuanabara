var agora = new Date()
var dia = agora.getDate()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Hoje é dia ${dia}. Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

console.log(agora.getFullYear())