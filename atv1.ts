/* 01- Faça uma função que recebe um valor inteiro e verifica se o valor é par.
 A unção deve retornar 1 se o número for par e 0 se for ímpar.
Aluno: João Pedro Temponi de Jesus */

function imPar(valor: number): number {
    if (valor % 2 == 0) {
        retorno = 1;
    } else {
        retorno = 0;
    }
    return retorno;
}

let retorno: number

const teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite o número: `));

console.log(imPar(n));