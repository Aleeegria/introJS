console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);

const idadeComprador = 16;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis : ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, passagem vendida !")//assim o bilhete de viagem é vendido na instrução abaixo
//     listaDeDestinos.splice(2, 1); //a partir da 2ª posição, deleta 1 elemento
// } else if (estaAcompanhada) {   //é menor de idade
//     console.log("Comprador está acompanhado, passagem vendida !")//assim o bilhete de viagem é vendido na instrução abaixo
//     listaDeDestinos.splice(2, 1); //a partir da 2ª posição, deleta 1 elemento
// } else {
//     console.log("Não é maior de idade, não está acompanhado e não podemos vender !!!");
// }

console.log(listaDeDestinos);

//exemplo da aula
const salario = 3300.0;
if (salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}
else if (salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}

//outro exemplo da aula
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade ou acompanhado, passagem vendida !")//assim o bilhete de viagem é vendido na instrução abaixo
    listaDeDestinos.splice(2, 1); //a partir da 2ª posição, deleta 1 elemento
} else {
    console.log("Não é maior de idade, não está acompanhado e não podemos vender !!!");
}

console.log("Embarque:\n\n");
if(idadeComprador >= 18 || temPassagemComprada){
    console.log("Boa Viagem, divirta-se !!!!");
} else{
    console.log("Você não pode embarcar !!!!");
}



