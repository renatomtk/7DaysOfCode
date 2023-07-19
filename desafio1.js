let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

document.write('<h1>Comparando Valores e Tipagens</h1>')
document.write('<h2>Comparando 1 com "1"</h2>')
if (numeroUm == stringUm) {
    document.write('As variáveis <b>numeroUm</b> e <b>stringUm</b> tem o mesmo valor, mas tipos diferentes<hr>')
} else {
    document.write('As variáveis <b>numeroUm</b> e <b>stringUm</b> não tem o mesmo valor<hr>')
}

document.write('<h2>Comparando 30 com "30"</h2>')
if (numeroTrinta === stringTrinta) {
    document.write('As variáveis <b>numeroTrinta</b> e <b>stringTrinta</b> tem o mesmo valor e mesmo tipo<hr>')
} else {
    document.write('As variáveis <b>numeroTrinta</b> e <b>stringTrinta</b> não tem o mesmo tipo<hr>')
}

document.write('<h2>Comparando 10 com "10"</h2>')
if (numeroDez == stringDez) {
    document.write('As variáveis <b>numeroDez</b> e <b>stringDez</b> tem o mesmo valor, mas tipos diferentes<hr>')
} else {
    document.write('As variáveis <b>numeroDez</b> e <b>stringDez</b> não tem o mesmo valor<hr>')
}
