// parametros de função -> 

function soma() {
    return 2 + 2;
}
console.log(soma());

function somaOutrosValores() {
    return 50 + 25;
}
console.log(somaOutrosValores());

function somaDeNovo(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somaDeNovo(398, 289));
console.log(somaDeNovo(-30, 279));
console.log(somaDeNovo(37, 122));
console.log(somaDeNovo(30, 12));


// parametros X argumentos
// ordem dos parametros
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(56, "Ale"));
console.log(nomeIdade("Ale", 56));

//////////////////////////////////////////////////

function multiplica1(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica1(somaDeNovo(4, 5), somaDeNovo(3, 3)));

//sem um argumento, return NaN
console.log(multiplica1(somaDeNovo(4, 5)));

// sem um argumento, mas inicializada com valor
function multiplica2(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
//sem um argumento, return com o 2º valor inicializado/ saída -> 9
console.log(multiplica2(somaDeNovo(4, 5)));

//////////////////////////////////////

// exercicios da aula
//Função sem retorno e sem parâmetro
function cumprimentar() {
    console.log('oi gente!')
}
cumprimentar()

//Função sem retorno, com parâmetro
function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}
cumprimentaPessoa('Karina')

//Função com retorno, sem parâmetro
function cumprimentar() {
    return 'Oi gente!'
}
cumprimentar()

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Maria') // “Oi gente! Meu nome é Maria”

//Função com return e mais de um parâmetro
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   console.log(operacaoMatematica(15, 30, 45)) // 90
      