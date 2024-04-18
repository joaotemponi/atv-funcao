/* Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3). 
Aluno: João Pedro Temponi de Jesus  */

function volumeDoCirculo(raio: number): number {
    let volume: number = ((4 / 3) * 3.14) * (raio * raio * raio);
    return volume;
}

const teclado = require(`prompt-sync`)();

let raio: number = parseFloat(teclado(`Digite o raio do circulo: `));

console.log(volumeDoCirculo(raio));