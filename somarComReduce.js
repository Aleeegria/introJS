const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0); // o 0 é o 2º param do reduce e inicia o acumulador

    const media = somaDasNotas / notasDaSala.length;
    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//exemplo da aula
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

//outro exemplo da aula outra maneira de escrever
const soma1 = numeros.reduce(function (acc, atual) {
    return atual + acc
}, 0)

console.log(soma1) //170

//outro exemplo da aula outra maneira de escrever
function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const soma2 = numeros.reduce(operacaoNumerica, 0)
   console.log(soma2) //170
