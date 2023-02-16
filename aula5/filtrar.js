const clientes = require("./clientes.json");

function filtarAptoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtarAptoSemComplemento(clientes);

console.log(filtrados);
console.log(filtrados.length);
