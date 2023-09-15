
/*
Crie uma função que:
A. Receba um array de números; 
B. Retorne um novo array com dois elementos:
    1) o último número dividido por dois; e
    2) o primeiro número dividido por dois.
*/


function inverterDividir (listaDeNumeros) {
    let primeiroNumero = listaDeNumeros[0]
    let ultimoNumero = listaDeNumeros[ listaDeNumeros.length - 1 ]

    primeiroNumero = primeiroNumero / 2
    ultimoNumero = ultimoNumero / 2

    let novosNumeros = [ ultimoNumero, primeiroNumero ]

    return novosNumeros
}


let minhaLista = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let listaProcessada = inverterDividir(minhaLista)

console.log(listaProcessada)
