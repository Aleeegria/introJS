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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);
if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro ! É necessário ter um endereço cadastrado !");
}

cliente.enderecos.push(
    {
        rua: "Rua do Alojamento",
        numero: 13,
        apartamento: false,       
    }
)

function ligaParacliente(foneComercial, foneResidencial) {
    console.log(` Ligando para ${foneComercial} `);
    console.log(` Ligando para ${foneResidencial} `);
}

ligaParacliente(cliente.fone[0], cliente.fone[1]);
ligaParacliente(...cliente.fone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(" A encomenda vai para: ");
console.log(encomenda);

for(let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(` A chave ${chave} tem o valor ${cliente[chave]}`);
    }    
}

const listaSoAptos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log("\n", cliente);
console.log("\n", cliente.enderecos);
console.log("\n", cliente["enderecos"]);
console.log(listaSoAptos);
