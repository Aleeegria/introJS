const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
       
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} está na turma e` + ' a média é ' + `${mediaDoAluno} !`);
    } else {
        console.log(`${aluno} não está na turma !`);
    }
}

exibeNomeENota("João");
exibeNomeENota("Juliana");
exibeNomeENota("Maria");
