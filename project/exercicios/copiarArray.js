const notas = [7, 7, 8, 9];

const novasNotas = [6, ...notas, 10, 5];//spread operator = operador de espalhamento
                             //...notas é um novo array copiado q não altera o original
                            // o 6, 10 e 5 são adicionados ao novo array


console.log(`As notas originais são ${notas}.`);
console.log(`As novas notas são ${novasNotas}.`);


//exemplo da aula
let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

//outro exemplo
let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

//outro exemplo, esse copia e altera o original
const arrayOriginal = [7, 7, 8, 9];

function alteraArray([...array]) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);
