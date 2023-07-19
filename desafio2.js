let nome = prompt('Qual o seu nome?')
while (nome == '') {
    nome = prompt('Complete seu nome para continuar')
    if (nome != '') {
        continue
    }
}

let anos = prompt('Quantos anos você tem?')
while (anos == '') {
    anos = prompt('Complete sua idade para continuar')
    if (anos != '') {
        continue
    }
}

let linguagem = prompt('Qual linguagem de programação você está estudando?')
while (linguagem == '') {
    linguagem = prompt('Responda a pergunta para continuar')
    if (linguagem != '') {
        continue
    }
}

let gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
if (gosta > 2 || gosta < 1) {
    while (gosta > 2 || gosta < 1) {
        gosta = prompt('Responda a pergunta corretamente para continuar')
        if (gosta == 1 || gosta == 2) {
            continue
        }
        else {
            alert('Alguma informação está incorreta! Recarregue para continuar')
        }
    }
}

if (gosta == 1) {
    document.write(`Olá <b>${nome}</b>, você tem <b>${anos}</b> anos e já está aprendendo <b>${linguagem}</b>! Que bom que está gostando de<b> ${linguagem}</b>! Continue estudando e você terá muito sucesso. :)`)
}
else if (gosta == 2) {
    document.write(`Olá <b>${nome}</b>, você tem <b>${anos}</b> anos e já está aprendendo <b>${linguagem}</b>! Que pena que você não está gostando de <b>${linguagem}!</b> Já tentou aprender outras linguagens? :(`)
}