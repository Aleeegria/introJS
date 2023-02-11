const nomes = ["Maria", "Julia", "Pedro"];

//nomes.forEach(function (nome){
//    console.log(nome);
//});
//esses codigos são equivalentes
//nomes.forEach((nome) => {
//    console.log(nome);
//});

function imprimeNome(nome){
    console.log(nome);
}
//esses codigos são equivalentes
nomes.forEach(imprimeNome);//função callback tbm



