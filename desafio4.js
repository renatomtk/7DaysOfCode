let num = Math.floor(Math.random() * 11);
let chance = 2

let chute = prompt('Adivinhe o número que está entre 0 e 10. Você tem apenas 3 chances!')
if (chute == '') {
    while (chute == '') {
        chute = prompt('Chute um número!')
    }
}
for (i = 0; i < 2; i++) {
    let chute = prompt(`Adivinhe o número que está entre 0 e 10. Você tem apenas ${chance} chance(s)!`)
    if (chute == '') {
        while (chute == '') {
            chute = prompt('Chute um número!')
        }
    }
    chance = chance - 1
    if (chute == num) {
        document.write(`Parabéns! Você acertou o número! :) <br> O número inicial era <b>${num}</b>`)
        break
    }
    if (i == 1) {
        document.write(`Que pena que você não acertou! :( <br> O número inicial era <b>${num}</b>`)
    }
}