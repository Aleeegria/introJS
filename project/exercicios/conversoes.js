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
//ver depois

//exemplos aulas

// teremos a conversão do número 12341234 para uma string 
// “12341234” e assim poderemos fazer
// a concatenação entre as strings
let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); 

//outro exemplo aula
// o .toString() é uma outra forma para  fazer essa 
// conversão, que é mais parecida com outras linguagens 
// de programação.
let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); 

// teremos a conversão da booleana para string, 
// nesse caso teremos uma string “false”.
let usuarioConectado1 = false;
console.log(String(usuarioConectado1));

// agora teremos uma string “true”.
let usuarioConectado2 = true;
console.log(String(usuarioConectado2)); 

//outro exemplo aula
// Vamos calcular a área de um retângulo
// teremos a conversão de String para números,
// possibilitando a realização da multiplicação
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 

//outro exemplo aula
// como a variável meuNome não contém apenas números 
//ele retorna o erro NaN (Not a Number, não é número);
let meuNome = "leonardo";
console.log(Number(meuNome)); 

// a conversão também retornará NaN
console.log( + meuNome); 

//outro exemplo aula
// teremos a conversão da booleana para número, 
// sendo que false (falso) retorna o número 0.
let usuarioConectado3 = false;
console.log(Number(usuarioConectado3)); 

 // agora teremos a conversão de true (verdadeiro) para 
 // o número 1.
 usuarioConectado3 = true;
 console.log(Number(usuarioConectado3));