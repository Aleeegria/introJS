// tipo stinrg
const texto1 = "Olá Mundo !!!";
const texto2 = 'Ola Mudno !!!';
const senha = "senhaSuperSegura3456";
const StringDeNumeros = '904729347';
const citacao = 'O Leo disse: "Oi !" ';
const citacao2 = "O Leo disse: 'Oi !' ";

console.log(texto1)
console.log(texto2)
console.log(senha)
console.log(StringDeNumeros)
console.log(citacao)
console.log(citacao2)

//template string ou template literal
//vai ver depois

//concatenacao (+)
console.log(citacao + texto1)

//exemplo da aula
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//outro exemplo
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false

//exemplo
const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

//outro
const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres



