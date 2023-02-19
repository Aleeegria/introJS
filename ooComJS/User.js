export default class User {

    #nome;
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`;
      }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if ( novoNome === '') {
            throw new Error("Formato inválido !");
        }

        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }

    set role(novoRole) {
        this.#role =  novoRole;
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }
    
    exibirInfos() {
       return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }

    // #montaObjUser() {
    //     return ( {
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    // exibirInfos() {
    //     const ObjUser = this.#montaObjUser();
    //     return `${ObjUser.nome}, ${ObjUser.email}, ${ObjUser.nascimento}, ${ObjUser.role}, ${ObjUser.ativo}`;
    // }    
}

const novoUser = new User('Paulo', 'paulo@dominio.com', '1967-12-11');
console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log(User.prototype.isPrototypeOf(novoUser));