// funções - usa p/ dizer em que momento vai executar 

let x = 0;
x = 'Olá, tudo bem contigo ?';
console.log(x);

///////////////////////////////

// 1) declara a função, aqui String
function imprimeTexto(texto){
    console.log(texto);
}

// 2) executa a função (1 || + X)
imprimeTexto("Olá galerinha !!!");
imprimeTexto("Olá meu povo !!!");


// 3 formas de escrever funções
// 1)
function soma(){
    return 2 + 2; // return é a última linha a ser executada e sai da função  
}
console.log(soma())

// 2) função que chama função
imprimeTexto(soma());

// 3) 