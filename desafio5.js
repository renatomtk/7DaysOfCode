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
        categoria = prompt('Em qual dessas categorias a seguir essa comida se encaixa? Digite 0 para frutas, 1 para laticínios, 2 para congelados ou 3 para doces')
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

        decisao = prompt('Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM ou digite qualquer outra tecla para NÃO')
    }
}

document.write('<b>Lista de compras:</b><hr>')
document.write(`<b>Frutas:</b> ${frutas}<hr>`)
document.write(`<b>Laticínios:</b> ${laticinios}<hr>`)
document.write(`<b>Congelados:</b> ${congelados}<hr>`)
document.write(`<b>Doces:</b> ${doces}<hr>`)