const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const ordenado = lista.sort( (a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }

        if (a[propriedade] > b[propriedade]) {
            return 1;
        }        
        return 0;       
    });
    return ordenado;   
}


const ordenadoNome = ordenar(clientes, "nome");
//const ordenado2 = ordenar(clientes, "telefone", "19918820860");

console.log(ordenadoNome);
console.log(ordenadoNome.length);
//console.log(ordenado2);

//console.log(clientes);