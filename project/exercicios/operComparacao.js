;// operadores de comparações
// = atribui valor a uma variavel/const
// == -> comparação implícita
// === -> comparação explícita

const numero = 5;
const texto = "5";

console.log(numero == texto); // return true, compara valor
console.log(numero === texto); // return false, não converte
// compara tipo e valor
// boas práticas - > usa os 3=, e conversão explicita
// conversão explicita -> Number() e String()
//typeof - tipo de vaor que a var esta guardando
console.log(typeof numero);
console.log(typeof texto);

