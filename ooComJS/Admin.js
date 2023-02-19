import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    nomeAdmin() {
        return `${this.nome}`;
    }

    criarCurso(nomeDoCurso, vagas) {

        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Monica', 'moni@dominio.com', '12/03/1999');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JS', 20));

