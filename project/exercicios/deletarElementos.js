// deletar elementos do array
const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // metodo de array que tira elemento

const media = (notas[0] + notas[1] + notas[2]+ notas[3]) / notas.length;

console.log(notas);
console.log(media);
console.log(`A média é ${media}`);

//////////////////////////

//exercios da aula
const arrayVazia = [];
console.log(arrayVazia) // return []
console.log(arrayVazia.length) // return 0


//outro exemplo da aula
const arrayVazia1 = [];
console.log(arrayVazia1[0]) // return undefined

// outro exemplo da a ula
const arrayVazia2 = [,,,]; 
console.log(arrayVazia2.length) // return 3
console.log(arrayVazia2[0]) // return undefined
console.log(arrayVazia2[1]) // return undefined
console.log(arrayVazia2[2]) // return undefined

//outro exemplo da aula
// Array esparso
const arrayVazia3 = [,,,];
console.log(arrayVazia3.length) // return 3
arrayVazia3.push(50) // return [ <3 empty itens>, 50]
console.log(arrayVazia3) // return 4
console.log(arrayVazia3.length)


//outro exercicio
jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)