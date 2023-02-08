const notas = [10, 8.5, 3, 6.5];

let somaDasNotas = 0;

notas.forEach(function(nota, indice) { // função anônima callback(chama de volta)
   somaDasNotas += nota;
   console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
