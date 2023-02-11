const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7; // se a média for < que 7, return true, Marcos -> lista de reporvados
                              // se >= 7, return aprovados //todos os outros -> lista dos aprovados
} )

console.log(reprovados);