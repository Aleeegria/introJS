console.log("\n Trabalhando com iterações");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

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

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem !!! Divirta-se bastante !!! ");
} else {
    console.log("Desculpe tivemos um erro !!!");
}


for (let i = 0; i < 4; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;        
    }    
}