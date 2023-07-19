alert('Bem-vindo ao jogo das decisões!')

let area = prompt('Digite 1 se você deseja seguir para área de Front-End ou 2 se você deseja seguir para a área de Back-End')
if (area > 2 || area < 1) {
    while (area > 2 || area < 1) {
        area = prompt('Responda a pergunta corretamente para continuar')
        if (area == 1 || area == 2) {
            continue
        }
        else {
            alert('Alguma informação está incorreta!')
        }
    }
}

if (area == 1) {
    alert('Você pode aprender React ou Vue na área de front-end')
    fullstack = 'Você pode aprender C# ou Java na área de back-end para se tornar Fullstack'
} else {
    alert('Você pode aprender C# ou Java na área de back-end')
    fullstack = 'Você pode aprender React ou Vue na área de front-end para se tornar Fullstack'
}

let especilizar_ou_fullstack = prompt('Digite 1 se deseja seguir se especializando na área escolhida ou 2 se deseja seguir se desenvolvendo para se tornar Fullstack')
if (especilizar_ou_fullstack > 2 || especilizar_ou_fullstack < 1) {
    while (especilizar_ou_fullstack > 2 || especilizar_ou_fullstack < 1) {
        especilizar_ou_fullstack = prompt('Responda a pergunta corretamente para continuar')
        if (especilizar_ou_fullstack == 1 || especilizar_ou_fullstack == 2) {
            continue
        }
        else {
            alert('Alguma informação está incorreta!')
        }
    }
}

if (especilizar_ou_fullstack == 1) {
    alert('Estude mais ferramentas voltadas para sua área. Caso seja front-end, estude tecnologias como: HTML, CSS, JavaScript, Bootstrap. Caso seja back-end, estude tecnologias como: PHP, MySQL, Node.js.')
} else {
    alert(`${fullstack}`)
}

let mais_tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Aperte ENTER para sair.')
while (mais_tecnologia != 0) {
    alert(`Muito bem! Continue seus estudos que logo logo você vai estar estudando ${mais_tecnologia}! :)`)
    mais_tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite 0 para sair.')
    if (mais_tecnologia == '') {
        mais_tecnologia = prompt('Não esqueça de preencher os campos ou digite ENTER se realmente deseja sair')
    }
}

document.write('Obrigado por participar! :)')