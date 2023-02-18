const livros = require('./listaLivros');
const livros1 = require('./listaLivros');
const menorValor = require('./menorValor');
const maiorValor = require('./maiorValor');

for( let atual = 0; atual < livros.length; atual++){

    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Posição atual', atual);
    console.log('Livro atual', livros[atual]);
    
    let livroMenorPreco = livros[menor];
    console.log('Livro menor preco', livros[menor], "\n");

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

for( let atual = 0; atual < livros1.length; atual++){

    let maior = maiorValor(livros1, atual);

    let livroAtual = livros1[atual];
    console.log('Posição atual', atual);
    console.log('Livro atual', livros1[atual]);

    let livroMaiorPreco = livros1[maior];
    console.log('Livro maior preco', livros1[maior], "\n");

    livros1[atual] = livroMaiorPreco;
    livros1[maior] = livroAtual;

}

console.log(livros, "\n");
console.log(livros1);

