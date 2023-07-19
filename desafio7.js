function calcularSoma(x, y) {
    soma = x + y
    return soma
}

function calcularSubtracao(x, y) {
    subtracao = x - y
    return subtracao
}

function calcularMultiplicacao(x, y) {
    multiplicacao = x * y
    return multiplicacao
}

function calcularDivisao(x, y) {
    divisao = x / y
    return divisao
}

opcao = prompt('Digite 1 para SOMA | 2 para SUBTRAÇÃO | 3 para MULTIPLICAÇÃO | 4 para DIVISÃO | QUALQUER OUTRA TECLA PARA SAIR')
while (opcao == 1 || opcao == 2 || opcao == 3 || opcao == 4) {
    if (opcao == 1) {
        x = parseFloat(prompt('Digite o primeiro valor'))
        if (Number.isNaN(x)) {
            while (Number.isNaN(x)) {
                x = parseFloat(prompt('Digite o primeiro valor'))
            }
        }
        y = parseFloat(prompt('Digite o segundo valor'))
        if (Number.isNaN(y)) {
            while (Number.isNaN(y)) {
                y = parseFloat(prompt('Digite o segundo valor'))
            }
        }
        alert(`Resultado: ${calcularSoma(x, y)}`)
        opcao = prompt('Digite 1 para SOMA | 2 para SUBTRAÇÃO | 3 para MULTIPLICAÇÃO | 4 para DIVISÃO | QUALQUER OUTRA TECLA PARA SAIR')
    }

    if (opcao == 2) {
        x = parseFloat(prompt('Digite o primeiro valor'))
        if (Number.isNaN(x)) {
            while (Number.isNaN(x)) {
                x = parseFloat(prompt('Digite o primeiro valor'))
            }
        }
        y = parseFloat(prompt('Digite o segundo valor'))
        if (Number.isNaN(y)) {
            while (Number.isNaN(y)) {
                y = parseFloat(prompt('Digite o segundo valor'))
            }
        }
        alert(`Resultado: ${calcularSubtracao(x, y)}`)
        opcao = prompt('Digite 1 para SOMA | 2 para SUBTRAÇÃO | 3 para MULTIPLICAÇÃO | 4 para DIVISÃO | QUALQUER OUTRA TECLA PARA SAIR')
    }

    if (opcao == 3) {
        x = parseFloat(prompt('Digite o primeiro valor'))
        if (Number.isNaN(x)) {
            while (Number.isNaN(x)) {
                x = parseFloat(prompt('Digite o primeiro valor'))
            }
        }
        y = parseFloat(prompt('Digite o segundo valor'))
        if (Number.isNaN(y)) {
            while (Number.isNaN(y)) {
                y = parseFloat(prompt('Digite o segundo valor'))
            }
        }
        alert(`Resultado: ${calcularMultiplicacao(x, y)}`)
        opcao = prompt('Digite 1 para SOMA | 2 para SUBTRAÇÃO | 3 para MULTIPLICAÇÃO | 4 para DIVISÃO | QUALQUER OUTRA TECLA PARA SAIR')
    }

    if (opcao == 4) {
        x = parseFloat(prompt('Digite o primeiro valor'))
        if (Number.isNaN(x)) {
            while (Number.isNaN(x)) {
                x = parseFloat(prompt('Digite o primeiro valor'))
            }
        }
        y = parseFloat(prompt('Digite o segundo valor'))
        if (Number.isNaN(y)) {
            while (Number.isNaN(y)) {
                y = parseFloat(prompt('Digite o segundo valor'))
            }
        }
        alert(`Resultado: ${calcularDivisao(x, y)}`)
        opcao = prompt('Digite 1 para SOMA | 2 para SUBTRAÇÃO | 3 para MULTIPLICAÇÃO | 4 para DIVISÃO | QUALQUER OUTRA TECLA PARA SAIR')
    }
}

document.write('Obrigado por usar a calculadora! Até a próxima! :)')