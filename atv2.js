/* Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
Aluno: João Pedro Temponi de Jesus  */
function numeroMenor(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else {
        if (n2 < n3 && n2 < n1) {
            menor = n2;
        }
        else {
            if (n3 < n1 && n3 < n2) {
                menor = n3;
            }
            else {
            }
        }
    }
    return menor;
}
var teclado = require("prompt-sync")();
var menor = 0;
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
console.log(numeroMenor(n1, n2, n3));
