const user = {
    nome: "Patricia",
    email: "pati@dominio.com",
    nascimento: "1972/01/01",
    role: "estudante", //role=papel
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
    }

}

const admin = {
    nome: "Pedro",
    email: "pedro@dominio.com",
    nascimento: "1962/01/01",
    role: "admin", //role=papel
    ativo: true,
    criarCurso: function () {
        console.log('Curso criado !');
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();
user.exibirInfos();

user.exibirInfos();
const exibir = user.exibirInfos;
exibir();

const exibir1 = function() {
    //console.log(this); // this sem especificar no node traz o objeto global.
    console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);

}
exibir1(); //undefined

const exibirUser = exibir.bind(user);
exibirUser(); // return dados do user
exibir(); // return undefined


