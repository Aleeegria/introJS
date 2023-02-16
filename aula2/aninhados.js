const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 987654321", "11 32456789"],
};

cliente.endereco = {
    rua: "Rua do Alojamento",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
console.log("\n", cliente.endereco);
console.log("\n", cliente["endereco"]);


