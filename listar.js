console.log("Trabalhando com listas !!!!")

// CTL + K + C = comenta em bloco
// CTL + K + U = descomenta em bloco

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
    'Salvador', 
    'São Paulo', 
    'Rio de Janeiro', 
    'Curitiba'
);

listaDeDestinos.push('Recife');//adicionar item na lista

console.log("Destinos possiveis : ");
//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1); //a partir da 2ª posição, deleta 1 elemento
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);