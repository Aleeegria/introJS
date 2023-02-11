console.log("\n Trabalhando com iterações");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);

const idadeComprador = 16;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Recife";

console.log("\n Destinos possiveis : ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 4) {

    if (listaDeDestinos[contador] == destino) {       
        destinoExiste = true;
        break;   
    }
    contador += 1;
}

console.log("\n Destino existe ?", destinoExiste);