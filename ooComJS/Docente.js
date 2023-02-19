import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} obteve êxito no curso ${curso}. `;
    }
}

const novoDocente = new Docente('Ivone', 'ivone@dominio.com', '12/03/1987');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovarEstudante('Pedro', 'JS'));
