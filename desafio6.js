let frutas = []
let laticinios = []
let congelados = []
let doces = []

decisao = prompt('Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM ou digite qualquer outra tecla para NÃO')
if (decisao == 1) {
    while (decisao == 1) {
        nome = prompt('Digite o nome da comida')
        if (nome == '') {
            alert('Digite o nome da comida!')
            while (nome == '') {
                nome = prompt('Digite o nome da comida!')
            }
        }
        categoria = prompt('Em qual dessas categorias a seguir essa comida se encaixa? Digite 0 para frutas, 1 para laticínios, 2 para congelados ou 3 para doces)')
        if (categoria == '') {
            alert('Digite o nome da categoria!')
            while (categoria == '') {
                categoria = prompt('Digite o nome da categoria!')
            }
        }

        if (categoria == 0) {
            frutas.push(nome)
            alert('Alimento adicionado com sucesso!')
        }
        if (categoria == 1) {
            laticinios.push(nome)
            alert('Alimento adicionado com sucesso!')
        }
        if (categoria == 2) {
            congelados.push(nome)
            alert('Alimento adicionado com sucesso!')
        }
        if (categoria == 3) {
            doces.push(nome)
            alert('Alimento adicionado com sucesso!')
        }

        decisao = prompt('Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM, digite 2 para remover um item da lista ou digite qualquer outra tecla para NÃO')
        if (decisao == 2) {
            alert(`Lista de alimentos: FRUTAS: ${frutas}, LATICÍNIOS: ${laticinios}, CONGELADOS: ${congelados}, DOCES: ${doces}`)
            item = prompt('Digite o alimento que deseja remover')
            categoria2 = prompt('Digite a categoria em que você colocou o alimento: 0 - FRUTAS // 1 - LATICÍNIOS // 2 - CONGELADOS // 3 - DOCES')

            if (categoria2 == 0) {
                existe = frutas.includes(item)
                if (existe) {
                    remover = frutas.indexOf(item)
                    frutas.splice(remover, 1)
                    alert('Alimento removido com sucesso!')
                }
                else {
                    alert('Alimento não existente!')
                    break
                }
            }
            if (categoria2 == 1) {
                existe = laticinios.includes(item)
                if (existe) {
                    remover = laticinios.indexOf(`'${item}'`)
                    laticinios.splice(remover, 1)
                    alert('Alimento removido com sucesso!')
                }
                else {
                    alert('Alimento não existente!')
                    break
                }
            }
            if (categoria2 == 2) {
                existe = congelados.includes(item)
                if (existe) {
                    remover = congelados.indexOf(`'${item}'`)
                    congelados.splice(remover, 1)
                    alert('Alimento removido com sucesso!')
                }
                else {
                    alert('Alimento não existente!')
                    break
                }
            }
            if (categoria2 == 3) {
                existe = doces.includes(item)
                if (existe) {
                    remover = doces.indexOf(`'${item}'`)
                    doces.splice(remover, 1)
                    alert('Alimento removido com sucesso!')
                }
                else {
                    alert('Alimento não existente!')
                    break
                }
            }

            decisao = prompt('Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM ou digite qualquer outra tecla para NÃO')

        }
    }
}

document.write('<b>Lista de compras:</b><hr>')
document.write(`<b>Frutas:</b> ${frutas}<hr>`)
document.write(`<b>Laticínios:</b> ${laticinios}<hr>`)
document.write(`<b>Congelados:</b> ${congelados}<hr>`)
document.write(`<b>Doces:</b> ${doces}<hr>`)
