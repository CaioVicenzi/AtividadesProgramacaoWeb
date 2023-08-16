var numero = prompt("Digite um número pfv: ")
var ehPrimo = 1

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0) {
    ehPrimo = 0
} 

console.log (ehPrimo)