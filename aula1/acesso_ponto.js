const cliente = {

    nome: "Paulo",
    idade: 45,
    cpf: "11223344556",
    email: "paulo@dominio.com",

};

console.log(cliente);
console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos. `);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}. `);

