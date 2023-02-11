const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];

}
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);

///////////////////
//exemploda aula
const notas1 = [10, 6.5, 8, 7.5] // média 8
const notas2 = [9, 6, 6] // média 7
const notas3 = [8.5, 9.5] // média 9

const notasGerais = [notas1, notas2, notas3]

let media1 = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++){
        media1 += notasGerais[i][j] / notasGerais[i].length;
    }
}

media1 = media1/notasGerais.length;
console.log(media1); // return 24/3 = 8
