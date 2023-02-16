const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 987654321", "11 32456789"],
};

cliente.enderecos = [
    {
        rua: "Rua do Alojamento",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

cliente.enderecos.push(
    {
        rua: "Rua do Alojamento",
        numero: 13,
        apartamento: false,       
    }
)

const listaSoAptos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(cliente);
console.log("\n", cliente.enderecos);
console.log("\n", cliente["enderecos"]);
console.log(listaSoAptos);