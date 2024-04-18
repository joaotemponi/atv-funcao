/* Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
Aluno: Joãoo Pedro Temponi de Jesus  */
function volumeDoCirculo(raio) {
    var volume = ((4 / 3) * 3.14) * (raio * raio * raio);
    return volume;
}
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o raio do circulo: "));
console.log(volumeDoCirculo(raio));
