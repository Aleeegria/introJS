// tipo de dado
// boleanos

//conversão implícita
const numero = 456;
const numeroString = Number("456");
const numeroString1 = Number("456a");

console.log(numero === numeroString); // compara tipo e valor
console.log(numero == numeroString); // compara valor
console.log(numero + " e " + numeroString); // concatenação

//Number() -> função que converte p/ numero
//String() -> função que converte para String
console.log(numero + Number(numeroString)); // compara valor
console.log(numero + Number(numeroString1)); // compara valor NaN

//conversão explícita

