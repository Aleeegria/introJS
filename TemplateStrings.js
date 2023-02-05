// template string -> é uma string modelo


// concatenação tradicional
const nome = "Ale";
const apresentacao = "Meu nome é " + nome;

console.log(apresentacao);

// concatenação tradicional
const meuNome = "Ale";
const idade = 2023 - 1966;
const naturalidade = "Brasília";

const apresentacao1 = "Meu nome é " + meuNome + 
" , minha idade é " + idade + " e nasci na cidade de " + naturalidade;

console.log(apresentacao1);

// template String
const meuNome1 = "Ale";
const idade1 = 2023 - 1966;
const naturalidade1 = "Brasília";

const apresentacao2 = `Meu nome é $(meuNome1), minha idade é $
(idade1) e nasci na cidade de $(naturalidade1)`;

console.log(apresentacao2);