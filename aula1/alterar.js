const pessoa = {
    nome: "Patricia",
    profissao: "Engenheira",

};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.telefone); // propiedade naõ iniciada, return undefined

pessoa.telefone = "11 987654321";
console.log(pessoa.telefone); 

pessoa.nome = "Patrícia Lemos";
console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

//pessoa = novaPessoa; //atribuição p variavel constante não pode. 
// quanto tem um objeto guardado em uma variavel constante pode manipular o objeto, 
// e não pode reatribuir propriedades dentro da variavel mas podem ter seu conteúdo interno alterado.







