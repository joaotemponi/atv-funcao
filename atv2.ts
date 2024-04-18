/* Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles. 
Aluno: João Pedro Temponi de Jesus  */

function numeroMenor(n1: number, n2: number, n3: number) {
    if (n1 < n2 && n1 < n3) {
        menor = n1
    } else {
        if (n2 < n3 && n2 < n1) {
            menor = n2
        } else {
            if (n3 < n1 && n3 < n2) {
                menor = n3
            } else {

            }
        }
    }
    return menor;
}
const teclado = require(`prompt-sync`)();

let menor: number = 0
let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));

console.log(numeroMenor(n1, n2, n3))